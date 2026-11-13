import Link from "next/link";
import { PhoneIcon, MapPinIcon, TrophyIcon } from "@heroicons/react/24/outline";
import { clinic, hours } from "@/lib/content";

export function Footer() {
  const openDays = hours.filter((h) => h.open);
  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="container-responsive grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="text-xl font-extrabold tracking-tight text-white">
            {clinic.name}
          </p>
          <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed">
            Roofing, storm restoration, and whole-home remodeling in Spring,
            The Woodlands and Houston — since 2002. Owner{" "}
            {clinic.owner.name} runs every job himself.
          </p>
          <p className="mt-4 flex items-center gap-2 text-[0.95rem] font-semibold text-white">
            <TrophyIcon className="h-5 w-5 text-gold" aria-hidden="true" />
            BBB Winner of Distinction · 2021 &amp; 2023
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-white">
            Visit us
          </p>
          <p className="mt-3 flex items-start gap-2 text-[0.95rem] leading-relaxed">
            <MapPinIcon className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
            <a
              href={clinic.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="underline-offset-2 hover:text-white hover:underline"
            >
              {clinic.address}
            </a>
          </p>
          <p className="mt-3 flex items-center gap-2 text-[0.95rem]">
            <PhoneIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
            <a
              href={`tel:${clinic.phoneTel}`}
              className="font-semibold text-white underline-offset-2 hover:underline"
            >
              {clinic.phoneDisplay}
            </a>
          </p>
          <p className="mt-3 text-[0.95rem]">
            Second number:{" "}
            <a
              href={`tel:${clinic.phone2Tel}`}
              className="font-semibold text-white underline-offset-2 hover:underline"
            >
              {clinic.phone2Display}
            </a>
          </p>
          <p className="mt-3 text-[0.95rem]">{clinic.facebookText}.</p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-white">
            Opening hours
          </p>
          <ul className="mt-3 space-y-1.5 text-[0.95rem]">
            {openDays.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="font-semibold tabular-nums text-white">
                  {h.time}
                </span>
              </li>
            ))}
            <li className="flex justify-between gap-4 text-navy-200">
              <span>Sunday</span>
              <span>Closed</span>
            </li>
          </ul>
          <Link
            href="#book"
            className="mt-5 inline-flex min-h-11 items-center rounded-full bg-white px-5 py-2.5 text-sm font-bold text-navy-900 transition-colors hover:bg-navy-50"
          >
            Get a free inspection
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-responsive flex flex-col gap-2 py-5 text-sm text-navy-200 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 {clinic.name} · {clinic.address}
          </p>
          <p>
            Preview website built from public information — details can be
            corrected on request. Photography: Unsplash.
          </p>
        </div>
      </div>
    </footer>
  );
}
