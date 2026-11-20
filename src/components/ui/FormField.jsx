export default function FormField({ name, label, error, multiline = false, ...inputProps }) {
  const Control = multiline ? 'textarea' : 'input'
  const id = `field-${name}`
  const errorId = `${id}-error`

  const control = [
    'w-full rounded-lg border bg-bg px-3 py-2.5 text-text transition-colors duration-150',
    error ? 'border-error' : 'border-border hover:border-text-secondary',
    multiline ? 'min-h-[140px] resize-y' : '',
  ].join(' ')

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label} <span aria-hidden="true">*</span>
      </label>
      <Control
        id={id}
        name={name}
        className={control}
        required
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? errorId : undefined}
        {...inputProps}
      />
      {error && (
        <p id={errorId} className="text-sm text-error">
          {error}
        </p>
      )}
    </div>
  )
}