import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg border px-[18px] py-2.5 text-[0.9375rem] font-semibold leading-snug transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60'

const variants = {
  primary: 'border-transparent bg-primary text-white hover:bg-[#1d4fd8]',
  secondary: 'border-border text-text hover:border-text-secondary hover:bg-surface',
}

export default function Button({ to, href, variant = 'primary', children, ...rest }) {
  const className = `${base} ${variants[variant]}`

  if (to) {
    return (
      <Link to={to} className={className} {...rest}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={className} {...rest}>
      {children}
    </button>
  )
}