import Section from "@/components/section"

export default function Loading() {
  return (
    <div className="page">
      <Section>
        <div className="animate-pulse space-y-6">
          <div className="h-10 w-2/3 rounded bg-white/10" />
          <div className="h-6 w-1/2 rounded bg-white/10" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-[16/10] rounded-xl bg-white/10" />
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
