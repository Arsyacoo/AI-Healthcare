function normalizeText(text) {
  const headings = [
    'Ringkasan',
    'Summary',
    'Poin Penting',
    'Poin penting',
    'Key Points',
    'Key points',
    'Pertanyaan Klarifikasi',
    'Pertanyaan klarifikasi',
    'Pertanyaan Klarifikasi Lanjutan',
    'Pertanyaan klarifikasi lanjutan',
    'Kemungkinan Penyebab Umum',
    'Kemungkinan penyebab umum',
    'Possible Common Causes',
    'Possible common causes',
    'Perawatan Mandiri yang Aman',
    'Perawatan mandiri yang aman',
    'Safe Self-Care',
    'Safe self-care',
    'Yang Bisa Dilakukan',
    'Yang bisa dilakukan',
    'What You Can Do',
    'What you can do',
    'OTC Options To Ask About',
    'OTC options to ask about',
    'Opsi Obat Bebas Untuk Ditanyakan',
    'Opsi obat bebas untuk ditanyakan',
    'Kapan Perlu ke Dokter',
    'Kapan perlu ke dokter',
    'When To See A Doctor',
    'When to see a doctor',
    'Tanda Bahaya',
    'Tanda bahaya',
    'Warning Signs',
    'Warning signs',
    'Kegunaan Umum',
    'Kegunaan umum',
    'General Use',
    'General use',
    'Efek Samping Umum',
    'Efek samping umum',
    'Common Side Effects',
    'Common side effects',
    'Peringatan Keselamatan',
    'Peringatan keselamatan',
    'Safety Warnings',
    'Safety warnings',
    'Kapan perlu bertanya ke dokter atau apoteker',
    'When to ask a doctor or pharmacist',
    'Clarifying Questions',
    'Clarifying questions',
  ];

  const headingPattern = new RegExp(`\\s*(${headings.join('|')})\\s*:?\\s*`, 'g');

  return text
    .replace(/\r\n/g, '\n')
    .replace(/^Tentu,?\s*(berikut|saya).*?:?\s*/i, '')
    .replace(headingPattern, '\n\n$1:\n')
    .replace(/\s+\*\s+/g, '\n- ')
    .replace(/\s+-\s+/g, '\n- ')
    .replace(/\s+\d+\.\s+/g, '\n- ')
    .replace(/\s*\*\*([^*\n:]{2,60}):\*\*/g, '\n\n$1:')
    .replace(/\s*\*\*([^*\n]{2,60})\*\*/g, '\n\n$1')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function renderInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    return part;
  });
}

export default function FormattedText({ text }) {
  const normalized = normalizeText(text);
  const blocks = normalized.split(/\n{2,}/).filter(Boolean);

  return (
    <div className="formatted-text">
      {blocks.map((block, blockIndex) => {
        const lines = block.split('\n').filter(Boolean);
        const listItems = lines.filter((line) => line.trim().startsWith('- '));
        const firstLine = lines[0]?.trim() || '';
        const firstLineIsHeading = firstLine.endsWith(':') && firstLine.length < 80;

        if (firstLineIsHeading) {
          const contentLines = lines.slice(1);
          const bulletLines = contentLines.filter((line) => line.trim().startsWith('- '));

          return (
            <section key={`${block}-${blockIndex}`}>
              <h4>{renderInline(firstLine.replace(/:$/, ''))}</h4>
              {bulletLines.length === contentLines.length && bulletLines.length > 0 ? (
                <ul>
                  {bulletLines.map((line, lineIndex) => (
                    <li key={`${line}-${lineIndex}`}>{renderInline(line.replace(/^- /, '').trim())}</li>
                  ))}
                </ul>
              ) : (
                contentLines.map((line, lineIndex) => {
                  if (line.trim().startsWith('- ')) {
                    return (
                      <ul key={`${line}-${lineIndex}`}>
                        <li>{renderInline(line.replace(/^- /, '').trim())}</li>
                      </ul>
                    );
                  }

                  return <p key={`${line}-${lineIndex}`}>{renderInline(line.trim())}</p>;
                })
              )}
            </section>
          );
        }

        if (listItems.length === lines.length) {
          return (
            <ul key={`${block}-${blockIndex}`}>
              {listItems.map((line, lineIndex) => (
                <li key={`${line}-${lineIndex}`}>{renderInline(line.replace(/^- /, '').trim())}</li>
              ))}
            </ul>
          );
        }

        if (lines.length > 1 && lines.slice(1).some((line) => line.trim().startsWith('- '))) {
          return (
            <section key={`${block}-${blockIndex}`}>
              <h4>{renderInline(lines[0].replace(/:$/, ''))}</h4>
              <ul>
                {lines.slice(1).map((line, lineIndex) => (
                  <li key={`${line}-${lineIndex}`}>{renderInline(line.replace(/^- /, '').trim())}</li>
                ))}
              </ul>
            </section>
          );
        }

        return (
          <p key={`${block}-${blockIndex}`}>
            {renderInline(lines.join(' '))}
          </p>
        );
      })}
    </div>
  );
}

