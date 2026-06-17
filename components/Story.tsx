import { siteConfig } from "@/lib/config";
import Reveal from "./Reveal";

const stats = [
  { value: "11 kg", label: "berat badan yang sempat hilang" },
  { value: "4", label: "dokter spesialis di RS berbeda" },
  { value: "6–7×", label: "bolak-balik ke IGD" },
];

export default function Story() {
  return (
    <section id="cerita" className="relative bg-ink py-20 text-paper sm:py-28">
      <div className="pointer-events-none absolute inset-0 grain opacity-20" aria-hidden />
      <div className="container-page relative">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left: intro + stats */}
          <div>
            <Reveal>
              <span className="eyebrow text-accent">Perkenalan</span>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="h-display mt-5 text-[28px] leading-tight text-paper sm:text-[38px]">
                Halo, aku {siteConfig.authorName}.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 max-w-md text-[16px] leading-relaxed text-paper/70">
                Aku bukan dokter. Bukan ahli gizi. Bukan praktisi kesehatan. Aku
                hanya seseorang yang pada 2021 dunianya sempat dijungkirbalikkan oleh
                sakit lambung dan usus yang datang bersamaan.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={160 + i * 80}>
                  <div className="rounded-2xl border border-paper/10 bg-paper/5 p-4">
                    <div className="font-display text-[26px] font-light text-accent sm:text-[30px]">
                      {s.value}
                    </div>
                    <div className="mt-1 text-[12px] leading-snug text-paper/55">
                      {s.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: narrative */}
          <div className="space-y-6">
            <Reveal>
              <p className="text-[17px] leading-relaxed text-paper/85">
                Awalnya kukira cuma asam lambung biasa. Tapi suatu pagi aku terbangun
                jam 3 dini hari dengan perut gelisah &mdash; lalu diare yang tak
                berhenti berhari-hari. Setelahnya semuanya seperti runtuh: perut nyeri
                tiap habis makan, napas berat, jantung berdebar, dan rasa cemas yang
                belum pernah kualami seumur hidup.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-[17px] leading-relaxed text-paper/85">
                Aku berobat ke empat dokter spesialis, sempat dirawat inap, dan
                bolak-balik ke IGD entah berapa kali &mdash; bukan lagi karena yakin
                akan sembuh, tapi sekadar ingin merasa aman sebentar.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <blockquote className="relative rounded-3xl border border-paper/10 bg-paper/5 p-7">
                <span
                  className="absolute left-5 top-1 font-display text-[56px] leading-none text-accent/40"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <p className="relative font-display text-[20px] font-light leading-relaxed text-paper sm:text-[24px]">
                  Selama ini belum ada yang benar-benar menyentuh akar masalahnya.
                </p>
              </blockquote>
            </Reveal>

            <Reveal delay={220}>
              <p className="text-[17px] leading-relaxed text-paper/85">
                Di titik terendah itulah seorang sahabat mengenalkanku pada pendekatan
                yang baru buatku. Aku tidak akan bilang sembuh dalam semalam &mdash;
                prosesnya naik-turun dan butuh waktu. Tapi pelan-pelan tubuhku mulai
                memberi respons. Hari ini, aku sudah bisa menikmati kopi lagi, makan
                lebih bebas, dan beraktivitas tanpa rasa takut yang dulu membayangi.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <p className="font-display text-[19px] font-light text-paper">
                Buku ini adalah seluruh perjalanan itu &mdash; kutuliskan untukmu.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
