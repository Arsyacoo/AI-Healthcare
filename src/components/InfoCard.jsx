export default function InfoCard({ icon: Icon, title, children, className = '', tone = 'primary' }) {
  const toneClass = {
    primary: 'bg-primary-soft text-primary',
    secondary: 'bg-secondary-soft/40 text-secondary',
    warning: 'bg-warning-soft text-warning',
    danger: 'bg-danger-soft text-danger',
  }[tone];

  return (
    <article className={`card ${className}`}>
      {Icon && (
        <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${toneClass}`}>
          <Icon size={24} />
        </div>
      )}
      <h3 className="font-headline text-xl font-bold text-text">{title}</h3>
      <div className="mt-3 text-muted">{children}</div>
    </article>
  );
}
