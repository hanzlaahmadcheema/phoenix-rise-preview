import {
  ShieldCheckIcon,
  HomeIcon,
  BoltIcon,
  PaintBrushIcon,
  WrenchScrewdriverIcon,
  Squares2X2Icon,
  MagnifyingGlassIcon,
  CheckCircleIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import { clinic, hours, serviceGroups, reviews, faqs, serviceAreas, claimSteps } from "@/lib/content";
import { BookForm } from "@/components/BookForm";
import { Reveal } from "@/components/Reveal";

const GROUP_ICONS = [
  HomeIcon,
  BoltIcon,
  PaintBrushIcon,
  WrenchScrewdriverIcon,
  Squares2X2Icon,
  MagnifyingGlassIcon,
];

function SectionHeading({
  title,
  intro,
}: {
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-3 text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}

export default function HomePage() {
  return (
    <div id="top">
      {/* ---------- HERO (photo-led, MedBills pattern) ---------- */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-navy-50 via-ivory to-sand"
        aria-labelledby="hero-heading"
      >
        <div className="container-responsive py-10 md:py-20">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <p className="inline-flex animate-hero items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold text-navy-800 shadow-sm">
                <TrophyIcon className="h-4 w-4 text-gold" aria-hidden="true" />
                BBB Awards for Excellence · Winner of Distinction
              </p>
              <h1
                id="hero-heading"
                className="mt-5 animate-hero animate-hero-delay-1 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-[3.4rem]"
              >
                A roof that holds through the next Texas storm.
              </h1>
              <div className="mt-5 animate-hero-photo animate-hero-delay-2 md:hidden">
                <img
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80"
                  alt="Two-story suburban home with a new gray shingled roof and a white front porch"
                  width={1600}
                  height={1067}
                  className="h-auto w-full rounded-2xl shadow-xl"
                />
              </div>
              <p className="mt-5 animate-hero animate-hero-delay-2 max-w-prose text-lg leading-relaxed text-muted">
                Roofing and home improvement in Spring, The Woodlands and
                Houston — since 2002. Owner {clinic.owner.name} runs every job
                himself, from the free inspection to the final cleanup.
              </p>
              <div className="mt-7 flex animate-hero animate-hero-delay-3 flex-col gap-3 sm:flex-row">
                <a
                  href="#book"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-ember px-7 py-3 font-bold text-white shadow-lg shadow-ember/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember-dark hover:shadow-xl"
                >
                  Get a free inspection
                </a>
                <a
                  href={`tel:${clinic.phoneTel}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-navy-800 px-7 py-3 font-bold text-navy-800 transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-50"
                >
                  <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                  Call {clinic.phoneDisplay}
                </a>
              </div>
              <div className="mt-8 flex animate-hero animate-hero-delay-4 flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-muted">
                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-navy-600" aria-hidden="true" />
                  Free inspections
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-navy-600" aria-hidden="true" />
                  Storm &amp; insurance specialists
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-navy-600" aria-hidden="true" />
                  23 years in business
                </span>
              </div>
            </div>
            <div className="relative hidden animate-hero-photo animate-hero-delay-2 md:block">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80"
                  alt="Two-story suburban home with a new gray shingled roof and a white front porch"
                  width={1600}
                  height={1067}
                  className="h-[480px] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-5 py-4 shadow-xl">
                <p className="flex items-center gap-1.5 text-lg font-extrabold text-ink">
                  <TrophyIcon className="h-5 w-5 text-gold" aria-hidden="true" />
                  Since 2002
                </p>
                <p className="text-sm text-muted">
                  BBB Winner of Distinction · 2021 &amp; 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TRUST STRIP ---------- */}
      <section className="border-y border-navy-100 bg-navy-50" aria-label="Why homeowners choose us">
        <div className="container-responsive grid grid-cols-2 gap-x-4 gap-y-5 py-6 md:grid-cols-4">
          {[
            { strong: "Since 2002", sub: "23 years in business" },
            { strong: "BBB Winner of Distinction", sub: "2021 & 2023" },
            { strong: "Free inspections", sub: "Written estimates" },
            { strong: "Spring · The Woodlands · Houston", sub: "Local, not a call center" },
          ].map((f, i) => (
            <Reveal key={f.strong} delay={(i % 4) as 0 | 1 | 2 | 3}>
            <div className="border-l-2 border-navy-200 pl-4">
              <p className="font-extrabold text-navy-800">{f.strong}</p>
              <p className="text-sm text-muted">{f.sub}</p>
            </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- SERVICES, GROUPED ---------- */}
      <section id="services" className="scroll-mt-24 py-16 md:py-24" aria-labelledby="services-heading">
        <div className="container-responsive">
          <Reveal>
          <SectionHeading
            title="Roofs, repairs, and the whole house — one crew"
            intro="From a leaking roof after a storm to a new kitchen — here is what we do, and what each job looks like."
          />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceGroups.map((group, i) => {
              const Icon = GROUP_ICONS[i % GROUP_ICONS.length];
              const featured = !!group.image;
              return (
                <Reveal
                  key={group.title}
                  delay={(i % 3) as 0 | 1 | 2 | 3}
                  className={featured ? "sm:col-span-2 lg:col-span-1" : ""}
                >
                <article className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  {group.image && (
                    <img
                      src={group.image}
                      alt={group.imageAlt ?? ""}
                      width={1600}
                      height={1067}
                      loading="lazy"
                      className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="p-6">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-ink">
                      {group.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted">{group.blurb}</p>
                    <ul className="mt-4 space-y-1.5">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[0.95rem] text-ink">
                          <CheckCircleIcon
                            className="mt-0.5 h-5 w-5 shrink-0 text-navy-600"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`tel:${clinic.phoneTel}`}
                      className="mt-5 inline-flex min-h-11 items-center font-bold text-navy-800 underline-offset-4 hover:underline"
                    >
                      Call to book
                    </a>
                  </div>
                </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- STORM & INSURANCE (dark band) ---------- */}
      <section id="storm" className="scroll-mt-24 bg-navy-900 py-16 md:py-24" aria-labelledby="storm-heading">
        <div className="container-responsive grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal variant="left">
          <div>
            <h2 id="storm-heading" className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              After the storm, we do the paperwork too
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-100">
              Hail and wind damage is stressful enough without fighting your
              insurer over it. We document the damage, meet your adjuster on
              site, and handle the repair once the claim is approved.
            </p>
            <a
              href="#book"
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-ember px-7 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember-dark"
            >
              Get a free storm inspection
            </a>
          </div>
          </Reveal>
          <ol className="space-y-5">
            {claimSteps.map((step, i) => (
              <Reveal key={step.title} delay={(i % 3) as 0 | 1 | 2 | 3}>
              <li className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-lg font-extrabold text-navy-900">
                  {i + 1}
                </span>
                <div>
                  <p className="font-bold text-white">{step.title}</p>
                  <p className="mt-1 leading-relaxed text-navy-100">{step.body}</p>
                </div>
              </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- EMERGENCY ---------- */}
      <section className="bg-ember-light py-14 md:py-20" aria-labelledby="emergency-heading">
        <Reveal>
        <div className="container-responsive flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 font-bold text-ember-dark">
              <BoltIcon className="h-6 w-6" aria-hidden="true" />
              Roof leaking right now?
            </p>
            <h2 id="emergency-heading" className="mt-2 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
              Call us — we tarp it today so the damage stops spreading.
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-muted">
              A leak does not wait for business hours. Call as soon as you see
              water coming in and we will get you covered fast.
            </p>
          </div>
          <a
            href={`tel:${clinic.phoneTel}`}
            className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-ember px-7 py-3 font-bold text-white shadow-lg shadow-ember/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember-dark hover:shadow-xl"
          >
            <PhoneIcon className="h-5 w-5" aria-hidden="true" />
            Call {clinic.phoneDisplay}
          </a>
        </div>
        </Reveal>
      </section>

      {/* ---------- MEET JESSE ---------- */}
      <section className="py-16 md:py-24" aria-labelledby="owner-heading">
        <Reveal>
        <div className="container-responsive grid items-center gap-8 md:grid-cols-[auto_1fr] md:gap-12">
          <div className="flex h-40 w-40 items-center justify-center rounded-3xl bg-navy-800 font-serif text-6xl font-semibold text-white shadow-xl md:h-52 md:w-52">
            JP
          </div>
          <div>
            <h2 id="owner-heading" className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
              Meet {clinic.owner.name}, {clinic.owner.title}
            </h2>
            <p className="mt-2 font-semibold text-navy-700">
              Owner since {clinic.founded} · {clinic.officeManager} runs the office
            </p>
            <p className="mt-4 max-w-prose text-lg leading-relaxed text-muted">
              {clinic.owner.bio}
            </p>
            <p className="mt-4 text-muted">
              Roofing, storm restoration, and whole-home remodeling — one crew,
              one standard, across Spring, The Woodlands and Houston.
            </p>
          </div>
        </div>
        </Reveal>
      </section>

      {/* ---------- REVIEWS ---------- */}
      <section id="reviews" className="scroll-mt-24 border-y border-navy-100 bg-navy-50 py-16 md:py-24" aria-labelledby="reviews-heading">
        <div className="container-responsive">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
            <SectionHeading
              title="What homeowners say"
              intro="The words below are paraphrases of real customer reviews, not word-for-word quotes."
            />
            </Reveal>
            <div className="shrink-0 rounded-2xl bg-white px-6 py-5 shadow-sm">
              <p className="flex items-center gap-2 text-2xl font-extrabold text-ink">
                <TrophyIcon className="h-7 w-7 text-gold" aria-hidden="true" />
                BBB Winner of Distinction
              </p>
              <p className="mt-1 text-sm text-muted">
                Awards for Excellence · 2021 &amp; 2023
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={r.quote.slice(0, 24)} delay={(i % 3) as 0 | 1 | 2 | 3}>
              <figure className="rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <blockquote className="font-serif text-xl font-medium leading-snug text-navy-800">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm text-muted">
                  {r.note}
                </figcaption>
              </figure>
              </Reveal>
            ))}
            <Reveal delay={2}>
            <figure className="flex flex-col justify-center rounded-2xl bg-navy-800 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="flex items-center gap-2 text-lg font-extrabold text-white">
                <ShieldCheckIcon className="h-6 w-6 text-gold" aria-hidden="true" />
                BBB Awards for Excellence
              </p>
              <blockquote className="mt-3 font-serif text-xl font-medium leading-snug text-navy-100">
                &ldquo;Winner of Distinction — recognized by the BBB of Greater
                Houston and South Texas in 2021 and 2023.&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm text-navy-200">
                BBB profile · Business since 2002
              </figcaption>
            </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- SERVICE AREA & INSURANCE ---------- */}
      <section id="areas" className="scroll-mt-24 py-16 md:py-24" aria-labelledby="areas-heading">
        <div className="container-responsive grid gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
            <SectionHeading
              title="Where we work"
              intro="We are a local crew, not a call center. If your home is in one of these towns, we can come out — usually within a day or two."
            />
            </Reveal>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {serviceAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-[0.95rem] font-semibold text-ink"
                >
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Not sure if we cover your street? Call us — if we cannot help,
              we will tell you who can.
            </p>
          </div>
          <Reveal variant="right">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-bold text-ink">We work with your insurer</h3>
            <p className="mt-3 leading-relaxed text-muted">
              Storm damage usually goes through your homeowner&rsquo;s
              insurance. We document everything with photos and a written
              scope, meet your adjuster on site, and repair the damage once
              the claim is approved — so you are never left arguing the damage
              alone.
            </p>
            <a
              href={`tel:${clinic.phoneTel}`}
              className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-navy-800 px-6 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-900"
            >
              <PhoneIcon className="h-5 w-5" aria-hidden="true" />
              Ask about your claim — {clinic.phoneDisplay}
            </a>
          </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section className="py-16 md:py-24" aria-labelledby="how-heading">
        <div className="container-responsive grid gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
            <SectionHeading
              title="How a job works, step by step"
              intro="Three simple steps — and you will know the price before any work starts."
            />
            </Reveal>
            <ol className="mt-8 space-y-6">
              {[
                {
                  title: "Free inspection",
                  body: "Call or request online. We come out, look properly, and photograph what we find — free, and with no pressure.",
                },
                {
                  title: "Written scope and price",
                  body: "You get a clear written scope: what we will do, what it costs, and how long it takes. The price we quote is the price you pay.",
                },
                {
                  title: "We build, you approve",
                  body: "We do the work, protect your home and yard while we are there, and clean up the same day. You approve it before we call it done.",
                },
              ].map((step, i) => (
                <Reveal key={step.title} delay={(i % 3) as 0 | 1 | 2 | 3}>
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-800 text-lg font-extrabold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-bold text-ink">{step.title}</p>
                    <p className="mt-1 leading-relaxed text-muted">{step.body}</p>
                  </div>
                </li>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal variant="right">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-bold text-ink">What to have ready</h3>
            <ul className="mt-4 space-y-3">
              {[
                "Photos of the damage, if you can take them safely",
                "Your insurance policy number, if it is a storm claim",
                "Any previous repair paperwork for the roof",
                "A good time for us to come out and look",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-muted">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-navy-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="group mt-6 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1200&q=80"
                alt="Roofer inspecting damaged shingles on a brick home"
                width={1600}
                height={1067}
                loading="lazy"
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-3 text-sm text-muted">
              Every inspection starts on the roof, not on the phone — we look
              at the real damage before we quote anything.
            </p>
          </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- BOOK ---------- */}
      <section id="book" className="scroll-mt-24 border-y border-navy-100 bg-navy-50 py-16 md:py-24" aria-labelledby="book-heading">
        <div className="container-responsive grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal variant="left">
          <div>
            <Reveal>
            <SectionHeading
              title="Get a free inspection"
              intro="Request an inspection and we will call you back to set a time. Prefer to talk now? Call us directly."
            />
            </Reveal>
            <p className="mt-6 flex items-center gap-3 text-lg font-bold text-navy-800">
              <PhoneIcon className="h-6 w-6" aria-hidden="true" />
              <a href={`tel:${clinic.phoneTel}`} className="underline-offset-4 hover:underline">
                {clinic.phoneDisplay}
              </a>
            </p>
            <p className="mt-3 text-muted">
              Second number:{" "}
              <a href={`tel:${clinic.phone2Tel}`} className="font-semibold text-navy-800 underline-offset-4 hover:underline">
                {clinic.phone2Display}
              </a>
            </p>
            <p className="mt-3 flex items-start gap-3 text-muted">
              <ClockIcon className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
              Open Monday–Friday 9–5, Saturday 9–12. Closed Sunday.
            </p>
            <p className="mt-3 flex items-start gap-3 text-muted">
              <MapPinIcon className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
              {clinic.address}
            </p>
          </div>
          </Reveal>
          <Reveal variant="right">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <BookForm />
          </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section id="faq" className="scroll-mt-24 py-16 md:py-24" aria-labelledby="faq-heading">
        <div className="container-responsive max-w-3xl">
          <Reveal>
          <SectionHeading
            title="Questions homeowners ask"
            intro="Answers from the company's public information. Anything else — call and ask."
          />
          </Reveal>
          <div className="mt-8">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={(i % 2) as 0 | 1}>
              <details className="group border-t border-slate-200 py-5 last:border-b">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-ink marker:hidden [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="text-2xl font-normal text-muted transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-prose leading-relaxed text-muted">{f.a}</p>
              </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- VISIT ---------- */}
      <section id="visit" className="scroll-mt-24 border-t border-slate-200 py-16 md:py-24" aria-labelledby="visit-heading">
        <div className="container-responsive grid gap-10 md:grid-cols-2">
          <Reveal variant="left">
          <div>
            <Reveal>
            <SectionHeading
              title="Visit us"
              intro="On Louetta Road in Spring, between Kuykendahl and Champions Forest Drive."
            />
            </Reveal>
            <table className="mt-8 w-full border-collapse">
              <thead>
                <tr>
                  <th scope="col" className="border-b-2 border-navy-800 pb-2.5 text-left font-bold">
                    Day
                  </th>
                  <th scope="col" className="border-b-2 border-navy-800 pb-2.5 text-right font-bold">
                    Hours
                  </th>
                </tr>
              </thead>
              <tbody>
                {hours.map((h) => (
                  <tr key={h.day} className="border-b border-slate-200">
                    <td className="py-3">{h.day}</td>
                    <td
                      className={`py-3 text-right tabular-nums ${
                        h.open ? "font-bold" : "text-muted"
                      }`}
                    >
                      {h.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </Reveal>
          <Reveal variant="right">
          <div className="rounded-2xl bg-navy-800 p-6 text-white shadow-xl sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="text-xl font-bold">Getting here</h3>
            <p className="mt-3 leading-relaxed text-navy-100">
              {clinic.address}. Call before you come by — the crew is usually
              out on a job during the day.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={clinic.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-navy-900 transition-colors hover:bg-navy-50"
              >
                <MapPinIcon className="h-5 w-5" aria-hidden="true" />
                Get directions
              </a>
              <a
                href={`tel:${clinic.phoneTel}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-white/60 px-6 py-3 font-bold text-white transition-colors hover:bg-white/10"
              >
                <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                {clinic.phoneDisplay}
              </a>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-navy-100">
              No email listed — the phone is the fastest way to reach us. You
              can also find us on Facebook: {clinic.shortName}, Spring.
            </p>
          </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="bg-navy-900 py-16 md:py-20" aria-labelledby="closing-heading">
        <Reveal>
        <div className="container-responsive max-w-3xl text-center md:text-left">
          <h2 id="closing-heading" className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Storm damage? Leaking roof? Call now.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-navy-100 md:mx-0">
            A free inspection costs you nothing. A missed problem can cost you
            everything. Call and we will come out and look — usually within a
            day or two.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-start md:justify-start">
            <a
              href={`tel:${clinic.phoneTel}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ember px-7 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember-dark"
            >
              <PhoneIcon className="h-5 w-5" aria-hidden="true" />
              Call {clinic.phoneDisplay}
            </a>
            <a
              href="#book"
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-white/60 px-7 py-3 font-bold text-white transition-colors hover:bg-white/10"
            >
              Request a free inspection
            </a>
          </div>
        </div>
        </Reveal>
      </section>
    </div>
  );
}
