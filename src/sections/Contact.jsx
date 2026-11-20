import { useEffect, useState } from 'react'
import { Mail } from 'lucide-react'
import { profile } from '../data/profile'
import SectionHeader from '../components/ui/SectionHeader'
import Stack from '../components/ui/Stack'
import Button from '../components/ui/Button'
import FormField from '../components/ui/FormField'
import { LinkedInIcon, GitHubIcon } from '../components/ui/SocialIcons'

const emptyValues = { name: '', email: '', subject: '', message: '' }
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const linkClass =
  'inline-flex items-center gap-2 font-medium text-link [overflow-wrap:anywhere] hover:underline'

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address, like name@example.com.'
  }
  if (!values.subject.trim()) errors.subject = 'Please enter a subject.'
  if (!values.message.trim()) errors.message = 'Please write a message.'
  return errors
}

export default function Contact({ headingLevel = 2 }) {
  const [values, setValues] = useState(emptyValues)
  const [errors, setErrors] = useState({})
  // 'idle' | 'error' | 'sending' | 'sent' | 'failed'
  const [status, setStatus] = useState('idle')

  // Hide the success message after 6 seconds
  useEffect(() => {
    if (status !== 'sent') return
    const timer = setTimeout(() => setStatus('idle'), 6000)
    return () => clearTimeout(timer)
  }, [status])

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))

    if (errors[name]) {
      const remaining = { ...errors, [name]: undefined }
      setErrors(remaining)

      // Hide the banner once every highlighted field has been fixed
      if (status === 'error' && Object.values(remaining).every((message) => !message)) {
        setStatus('idle')
      }
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const found = validate(values)
    setErrors(found)

    const firstInvalid = Object.keys(found)[0]
    if (firstInvalid) {
      setStatus('error')
      form.elements[firstInvalid]?.focus()
      return
    }

    // Hidden spam trap: real people never tick this box.
    if (form.elements.botcheck?.checked) return

    setStatus('sending')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: profile.web3formsKey,
          name: values.name.trim(),
          email: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
          from_name: 'Portfolio contact form',
        }),
      })
      const result = await response.json()

      if (result.success) {
        setValues(emptyValues)
        setStatus('sent')
      } else {
        setStatus('failed')
      }
    } catch {
      setStatus('failed')
    }
  }

  return (
    <Stack>
      <SectionHeader
        title="Contact"
        description="I'm open to software developer roles, internships and real-world projects. Send a message or reach out on LinkedIn or GitHub."
        level={headingLevel}
      />

      <ul className="flex flex-wrap gap-x-6 gap-y-3">
        {profile.email && (
          <li>
            <a className={linkClass} href={`mailto:${profile.email}`}>
              <Mail size={22} aria-hidden="true" />
              {profile.email}
            </a>
          </li>
        )}
        <li>
          <a
            className={linkClass}
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
            LinkedIn<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
        <li>
          <a
            className={linkClass}
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            GitHub<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
      </ul>

      <form className="flex max-w-[640px] flex-col gap-5" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <FormField
            name="name"
            label="Name"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            error={errors.name}
          />
          <FormField
            name="email"
            label="Email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
          />
        </div>
        <FormField
          name="subject"
          label="Subject"
          value={values.subject}
          onChange={handleChange}
          error={errors.subject}
        />
        <FormField
          name="message"
          label="Message"
          multiline
          value={values.message}
          onChange={handleChange}
          error={errors.message}
        />

        <input
          type="checkbox"
          name="botcheck"
          className="absolute -left-[9999px] size-px opacity-0"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div role="status" className="text-sm text-text empty:hidden">
          {status === 'error' && 'Please fix the highlighted fields and try again.'}
          {status === 'sending' && 'Sending your message…'}
          {status === 'sent' && "Thanks! Your message has been sent. I'll get back to you soon."}
          {status === 'failed' &&
            `Sorry, your message could not be sent. Please try again, or email me directly at ${profile.email}.`}
        </div>

        <div>
          <Button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </Button>
        </div>
      </form>
    </Stack>
  )
}