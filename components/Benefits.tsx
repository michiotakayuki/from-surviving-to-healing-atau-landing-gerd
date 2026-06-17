import Reveal from "./Reveal";
import { Compass, Heart, Brain, Leaf } from "./icons";

const benefits = [
  {
    icon: Compass,
    title: "Satu peta, bukan ribuan informasi",
    body: "Berhenti tenggelam dalam artikel yang saling bertentangan. Satu alur runut dari titik nol sampai pulih, lengkap dengan urutan prioritas.",
  },
  {
    icon: Heart,
    title: "Ditulis manusiawi & jujur",
    body: "Tanpa drama “sembuh dalam 7 hari”. Cerita nyata yang membuatmu merasa dipahami dan ditemani, bukan digurui.",
  },
  {
    icon: Leaf,
    title: "Hemat uang & trial-error",
    body: "Suplemen functional medicine tidak murah. Buku ini membantumu menyusun skala prioritas agar tidak boros membeli yang belum tentu cocok.",
  },
  {
    icon: Brain,
    title: "Sisi yang jarang dibahas",
    body: "Hubungan antara pencernaan dan kecemasan (gut-brain connection) — bagian yang hampir tidak pernah disentuh artikel lambung biasa.",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">Kenapa buku ini berbeda</span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="h-display mt-5 text-[28px] leading-tight sm:text-[38px]">
              Bukan sekadar tambahan informasi. Sebuah arah.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 max-w-prose text-[16px] leading-relaxed text-ink-soft">
              Kalau hari ini terasa berat, mungkin yang kamu butuhkan bukan lebih
              banyak informasi &mdash; tapi satu arah yang jelas.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 80}>
              <div className="card group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-105">
                  <b.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-[20px] font-normal text-ink">
                  {b.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {b.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
