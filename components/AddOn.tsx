import { siteConfig } from "@/lib/config";
import Reveal from "./Reveal";
import CtaButton from "./CtaButton";
import { Check, Pill } from "./icons";

const items = [
  "Multivitamin yang aku gunakan selama perjalanan pemulihan",
  "Alasan kenapa aku memilih produk-produk tersebut",
  "Cara mengenali produk yang lebih terpercaya",
  "Daftar toko & marketplace yang menurut pengalamanku bisa diandalkan",
];

const disclaimers = [
  "Setiap orang punya kondisi & respons tubuh yang berbeda",
  "Hasil setiap individu bisa berbeda",
  "Konsistensi jauh lebih penting daripada kecepatan",
  "Ini berbagi pengalaman — bukan janji hasil instan, bukan saran medis",
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
            <div className="relative grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <span className="eyebrow">
                  <Pill className="h-4 w-4" /> Bonus Add-On
                </span>
                <h2 className="h-display mt-5 text-[26px] leading-tight sm:text-[34px]">
                  Lengkapi Perjalananmu.
                </h2>
                <p className="mt-5 max-w-prose text-[16px] leading-relaxed text-ink-soft">
                  Selama proses pemulihanku, salah satu hal yang paling memusingkan
                  justru memilih suplemen. Di marketplace ada banyak sekali produk
                  dengan kualitas yang berbeda-beda, dan tidak semuanya bisa
                  dipercaya.
                </p>
                <p className="mt-4 max-w-prose text-[16px] leading-relaxed text-ink-soft">
                  Karena itu, aku merangkum panduan kecil berisi apa yang benar-benar
                  aku gunakan dan pelajari selama perjalananku &mdash; supaya kamu
                  tidak perlu menebak-nebak sendiri.
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

                <div className="mt-7 rounded-2xl border border-line bg-surface/70 p-5">
                  <p className="text-[12px] font-semibold uppercase tracking-wide text-muted">
                    Yang perlu kamu tahu
                  </p>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {disclaimers.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-[13px] leading-relaxed text-muted"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* price card */}
              <div className="rounded-3xl border border-line bg-surface p-7 shadow-soft">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent">
                  Bonus Add-On
                </span>
                <h3 className="mt-4 font-display text-[20px] leading-snug text-ink">
                  Panduan Multivitamin &amp; Toko Terpercaya
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-muted">
                  Pelengkap ebook utama, dengan harga terpisah.
                </p>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-display text-[34px] font-light text-ink">
                    {siteConfig.price_addon}
                  </span>
                  <span className="text-[13px] text-muted">/ panduan</span>
                </div>
                <div className="my-6 hairline" />
                <CtaButton href={siteConfig.checkoutUrlAddon} className="w-full">
                  Tambah Add-On
                </CtaButton>
                <p className="mt-4 text-center text-[12px] leading-relaxed text-muted">
                  Bisa ditambahkan saat checkout. Suplemen bersifat pelengkap nutrisi,
                  bukan obat dan tidak menggantikan saran dokter.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
