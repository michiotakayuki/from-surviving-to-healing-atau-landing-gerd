import { siteConfig } from "@/lib/config";
import Reveal from "./Reveal";
import CtaButton from "./CtaButton";
import { Check, Pill } from "./icons";

const items = [
  "Dipilih berdasarkan suplemen inti yang dibahas di dalam buku",
  "Membantumu memulai tanpa bingung memilih merek satu per satu",
  "Cocok dipasangkan dengan panduan prioritas di Bab 5",
];

export default function AddOn() {
  return (
    <section id="add-on" className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl border border-line bg-gradient-to-br from-surface to-accent-soft/50 p-8 shadow-soft sm:p-12">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/5 blur-2xl"
              aria-hidden
            />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <span className="eyebrow">
                  <Pill className="h-4 w-4" /> Add-On Opsional
                </span>
                <h2 className="h-display mt-5 text-[26px] leading-tight sm:text-[34px]">
                  Lengkapi dengan paket multivitamin rekomendasi.
                </h2>
                <p className="mt-5 max-w-prose text-[16px] leading-relaxed text-ink-soft">
                  Buat kamu yang ingin langsung memulai tanpa pusing trial-and-error
                  memilih suplemen sendiri. Paket ini melengkapi buku &mdash; bukan
                  pengganti saran dokter, dan tetap disesuaikan dengan kondisi
                  masing-masing.
                </p>

                <ul className="mt-6 space-y-3">
                  {items.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-[15px] text-ink-soft">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* price card */}
              <div className="rounded-3xl border border-line bg-surface p-7 shadow-soft">
                <p className="text-[13px] font-medium uppercase tracking-wide text-muted">
                  Paket Add-On
                </p>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-display text-[34px] font-light text-ink">
                    {siteConfig.price_addon}
                  </span>
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">
                  Bisa ditambahkan saat checkout buku.
                </p>
                <div className="my-6 hairline" />
                <CtaButton
                  href={siteConfig.checkoutUrlAddon}
                  className="w-full"
                >
                  Tambah Add-On
                </CtaButton>
                <p className="mt-4 text-center text-[12px] leading-relaxed text-muted">
                  Suplemen bersifat pelengkap nutrisi. Bukan obat dan tidak
                  menggantikan diagnosis atau pengobatan dokter.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
