import { siteConfig } from "@/lib/config";
import Reveal from "./Reveal";
import CtaButton from "./CtaButton";
import { Book } from "./icons";

const chapters = [
  {
    no: "01—02",
    title: "Bagaimana semuanya bermula",
    body: "Cerita lengkap dari gejala pertama sampai titik terberat — supaya kamu merasa dipahami dan mengenali pola yang mungkin juga sedang kamu alami.",
  },
  {
    no: "03",
    title: "Titik balik: cara pandang baru",
    body: "Pergeseran cara melihat kondisi ini — dari sekadar menekan gejala menjadi memahami akar masalah.",
  },
  {
    no: "04",
    title: "Makanan yang membantu & memperburuk",
    body: "Pengalaman soal makanan pemicu, healing food, cara makan, sampai pelajaran dari tes food sensitivity. Termasuk kenapa makanan yang “katanya aman” belum tentu cocok.",
  },
  {
    no: "05",
    title: "Suplemen, probiotik & protokol",
    body: "Penjelasan sederhana fungsi tiap suplemen, cara & waktu konsumsinya, plus cara menyusun skala prioritas agar tidak boros.",
  },
  {
    no: "06",
    title: "Saat anxiety ternyata ikut membaik",
    body: "Bagian yang jarang dibahas: kenapa lambung dan pikiran saling memengaruhi, dan langkah nyata yang membantu menenangkan keduanya.",
  },
  {
    no: "07",
    title: "Kondisiku sekarang & pesan untukmu",
    body: "Penutup yang jujur dan penuh harapan — plus panduan “first aid” 5 langkah untuk memulai.",
  },
];

export default function Learn() {
  return (
    <section id="isi-buku" className="bg-accent-soft/40 py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-prose text-center">
          <Reveal>
            <span className="eyebrow">
              <Book className="h-4 w-4" /> Apa yang akan kamu pelajari
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="h-display mt-5 text-[28px] leading-tight sm:text-[38px]">
              Tujuh bab perjalanan, dirangkai jadi satu peta.
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 max-w-4xl divide-y divide-line overflow-hidden rounded-3xl border border-line bg-surface">
          {chapters.map((c, i) => (
            <Reveal key={c.no} delay={i * 50}>
              <div className="group flex flex-col gap-3 p-6 transition-colors hover:bg-accent-soft/40 sm:flex-row sm:gap-8 sm:p-7">
                <span className="font-display text-[16px] font-normal tracking-wide text-accent sm:w-20 sm:shrink-0">
                  {c.no}
                </span>
                <div>
                  <h3 className="font-display text-[20px] font-normal text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                    {c.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bonuses */}
        <div className="mx-auto mt-6 grid max-w-4xl gap-4 sm:grid-cols-2">
          <Reveal>
            <div className="flex h-full items-start gap-4 rounded-3xl border border-accent/20 bg-surface p-6">
              <span className="text-[22px]">🎁</span>
              <div>
                <h4 className="font-display text-[18px] text-ink">
                  Bonus #1 — Resep Healing Food
                </h4>
                <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">
                  Resep sederhana yang menemani proses pemulihan: simple chicken soup,
                  beef broth, fish soup, dan lainnya.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex h-full items-start gap-4 rounded-3xl border border-accent/20 bg-surface p-6">
              <span className="text-[22px]">🎁</span>
              <div>
                <h4 className="font-display text-[18px] text-ink">
                  Bonus #2 — Panduan Ringkas Suplemen
                </h4>
                <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">
                  Tabel praktis: suplemen, tujuannya, dan waktu konsumsinya — tanpa
                  perlu bolak-balik mencari di tengah halaman.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="mt-12 flex justify-center">
            <CtaButton href={siteConfig.checkoutUrl}>
              Dapatkan Akses Sekarang — {siteConfig.price}
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
