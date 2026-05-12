export default function PageHeader({ eyebrow, title, children }) {
  return (
    <header className="mb-8">
      {eyebrow && <p className="mb-2 text-sm font-bold uppercase tracking-wide text-secondary">{eyebrow}</p>}
      <h1 className="max-w-4xl font-headline text-3xl font-extrabold leading-tight text-text sm:text-4xl">
        {title}
      </h1>
      {children && <p className="mt-4 max-w-3xl text-lg text-muted">{children}</p>}
    </header>
  );
}
