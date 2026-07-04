export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-bone tracking-tight">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-mist leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}
