import { siteConfig } from "@/lib/config";
import Reveal from "./Reveal";
import CtaButton from "./CtaButton";
import BookCover from "./BookCover";
import { Check, Spark } from "./icons";

const proofs = ["Pengalaman pribadi nyata", "Bahasa mudah dipahami", "Bisa dibaca dari HP"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      {/* soft warm wash */}
      <div className="pointer-events-none absolute inset-0 gradient-warm" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grain opacity-60" aria-hidden />

      <div className="container-page relative grid items-center gap-14 pb-16 sm:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Copy */}
        <div className="max-w-xl">
          <Reveal>
            <span className="eyebrow">
              <Spark className="h-4 w-4" />
              Sebuah ebook pengalaman pribadi
            </span>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="h-display mt-5 text-[34px] leading-[1.08] sm:text-[44px] lg:text-[52px]">
              Sudah ke 4 dokter, rawat inap, bolak&#8209;balik IGD&hellip;{" "}
              <span className="text-accent">tapi lambungku justru makin parah.</span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 max-w-prose text-[17px] leading-relaxed text-ink-soft">
              Catatan jujur tentang perjalanan bangkit dari GERD, gastritis, dan
              colitis yang datang bersamaan &mdash; untuk kamu yang sudah lelah
              mencari arah.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <CtaButton href={siteConfig.checkoutUrl}>
                Mulai Baca Perjalanannya
              </CtaButton>
              <div className="flex flex-col gap-1">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent">
                  {siteConfig.priceBadge}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-[26px] text-ink">
                    {siteConfig.price}
                  </span>
                  <span className="text-[15px] text-muted line-through">
                    {siteConfig.priceStrike}
                  </span>
                  <span className="text-[13px] font-medium text-sage">
                    {siteConfig.priceSave}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-4 max-w-prose text-[13px] leading-relaxed text-muted">
              {siteConfig.priceNote}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {proofs.map((p) => (
                <li key={p} className="flex items-center gap-2 text-[14px] text-ink-soft">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Book visual */}
        <Reveal delay={160} className="flex justify-center lg:justify-end">
          <BookCover />
        </Reveal>
      </div>
    </section>
  );
}
