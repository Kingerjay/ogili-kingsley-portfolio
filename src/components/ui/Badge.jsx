export default function Badge({ children }) {
  return (
    <span className="inline-block rounded-lg bg-primary-soft px-2.5 py-0.5 text-[0.8125rem] font-medium leading-relaxed text-link">
      {children}
    </span>
  )
}

export function BadgeList({ items, label }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label={label}>
      {items.map((item) => (
        <li key={item}>
          <Badge>{item}</Badge>
        </li>
      ))}
    </ul>
  )
}