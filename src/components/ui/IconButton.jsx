const classes =
  'inline-flex size-9 items-center justify-center rounded-md text-link transition-colors duration-150 hover:bg-primary-soft sm:size-10 [&_svg]:size-[18px] sm:[&_svg]:size-[22px]'

// With `href`: an external link that opens in a new tab. Without: a button.
export default function IconButton({ href, label, children, ...rest }) {
  if (href) {
    return (
      <a
        className={classes}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label} (opens in a new tab)`}
        {...rest}
      >
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={classes} aria-label={label} {...rest}>
      {children}
    </button>
  )
}