import { profile } from '../data/profile'
import SectionHeader from '../components/ui/SectionHeader'
import Stack from '../components/ui/Stack'

export default function About({ headingLevel = 2 }) {
  return (
    <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-10">
      <div className="shrink-0 lg:order-2">
        <img
          className="block aspect-[4/5] h-auto w-[200px] max-w-full rounded-full border border-border bg-surface object-cover object-top lg:w-60"
          src={profile.photo.src}
          alt={profile.photo.alt}
          width="240"
          height="300"
          loading="lazy"
        />
      </div>

      <div className="w-full min-w-0 lg:order-1 lg:flex-1">
        <Stack>
          <SectionHeader
            title="About Me"
            description="A little about who I am and what I'm aiming for."
            level={headingLevel}
          />
          <div className="flex max-w-[65ch] flex-col gap-4">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Stack>
      </div>
    </div>
  )
}