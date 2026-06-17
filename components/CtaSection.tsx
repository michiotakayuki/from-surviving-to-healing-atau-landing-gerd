import { siteConfig } from "@/lib/config";
import Reveal from "./Reveal";
import CtaButton from "./CtaButton";
import { Check } from "./icons";

const includes = [
  "Ebook lengkap (7 bab perjalanan utuh)",
  "Bonus #1 — Resep Healing Food",
  "Bonus #2 — Panduan Ringkas Suplemen",
  "Akses selamanya, dibaca dari HP kapan pun",
];

export default function CtaSection() {
  return (
    <section className="pb-24 pt-4 sm:pb-28">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl bg-ink px-7 py-14 text-center text-paper sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute inset-0 grain opacity-20" aria-hidden />
            <div
              className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
              aria-hidden
            />

            <div className="relative mx-auto max-w-2xl">
              <span className="eyebrow text-accent">Langkah pertamamu</span>
              <h2 className="h-display mt-5 text-[30px] leading-tight text-paper sm:text-[42px]">
                Mungkin yang kamu butuhkan bukan lebih banyak informasi &mdash; tapi
                satu arah yang jelas.
              </h2>
              <p className="mx-auto mt-6 max-w-prose text-[16px] leading-relaxed text-paper/70">
                Aku menulis buku ini sebagai lilin kecil di masa yang gelap. Semoga ia
                bisa menemanimu juga.
              </p>

              <ul className="mx-auto mt-9 grid max-w-md gap-3 text-left sm:grid-cols-2">
                {includes.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-[14px] text-paper/85">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col items-center gap-4">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-[40px] font-light text-paper">
                    {siteConfig.price}
                  </span>
                  <span className="text-[17px] text-paper/40 line-through">
                    {siteConfig.priceStrike}
                  </span>
                </div>
                <CtaButton href={siteConfig.checkoutUrl} className="px-9">
                  Dapatkan Bukunya Sekarang
                </CtaButton>
                <p className="text-[13px] text-paper/50">
                  Kurang dari harga sekali konsultasi, atau satu botol suplemen yang
                  belum tentu cocok.
                </p>
              </div>

              <p className="mx-auto mt-10 max-w-prose border-t border-paper/10 pt-7 text-[14px] italic leading-relaxed text-paper/60">
                P.S. — Dulu aku bahkan tidak berani membayangkan bisa berada di titik
                ini. Aku tidak tahu persis seperti apa jalanmu nanti. Tapi aku tahu satu
                hal: kamu tidak harus melewatinya sendirian, dan tanpa peta.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
