import PageBg from "@/components/backgrounds/page-bg"
import Section from "@/components/section"
import ContactForm from "./ui-form"

export const metadata = { title: "Contact" }

export default function ContactPage() {
  return (
    <div className="  min-h-[calc(100dvh-64px)] relative overflow-hidden">
      <PageBg variant="contact" />
      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          {/* Left column */}
          <div>
            <h1 className="text-5xl font-bold">Let&apos;s Connect</h1>
            <p className="lead mt-3">
              Always interested in new opportunities, collaborations, and conversations about technology and design.
            </p>
            <a
              href="mailto:test@example.com"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10 transition"
              aria-label="Email"
            >
              test@example.com <span aria-hidden>→</span>
            </a>
          </div>

          {/* Right column */}
          <div>
            <p className="text-xs tracking-widest text-muted-foreground">ELSEWHERE</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {[
                { label: "GitHub", handle: "@felixmacaspac", href: "https://github.com/your" },
                { label: "v0.dev", handle: "@felixmacaspac", href: "https://v0.dev" },
                { label: "HubSpot Community", handle: "@felixmacaspac", href: "https://community.hubspot.com" },
                { label: "LinkedIn", handle: "felixmacaspac", href: "https://linkedin.com/in/your" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass rounded-xl p-4 hover:scale-[1.01] transition"
                >
                  <div className="text-sm font-medium">{item.label}</div>
                  <div className="mt-1 text-sm text-foreground/75">{item.handle}</div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mix in existing design: keep the contact form below
        <div className="mt-12">
          <h2 className="h2 text-xl">Send a message</h2>
          <div className="mt-4">
            <ContactForm />
          </div>
        </div> */}
      </Section>
    </div>
  )
}
