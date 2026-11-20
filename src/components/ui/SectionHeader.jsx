export default function SectionHeader({ eyebrow, title, description, level = 2 }) {
  const Heading = `h${level}`

  return (
    <div className="flex flex-col gap-3">
      {eyebrow && (
        <p className="text-sm font-medium uppercase tracking-[0.04em] text-text-secondary">{eyebrow}</p>
      )}
      <Heading className="break-words text-(length:--page-title-size) font-bold leading-[1.2] tracking-[-0.02em]">
        {title}
      </Heading>
      {description && (
        <p className="max-w-[65ch] text-(length:--page-desc-size) text-text-secondary">{description}</p>
      )}
    </div>
  )
}