import Reveal from "./Reveal";

const signals = [
  "Menahan rasa tidak nyaman di perut yang tak kunjung hilang",
  "Dada tiba-tiba berdebar kencang tanpa alasan yang jelas",
  "Napas pendek-pendek dan dada terasa penuh seperti mengganjal",
  "Takut makan, karena tak tahu mana yang akan memicu gejala",
  "Sudah berobat berkali-kali, tapi rasanya tak menemukan arah",
  "Diam-diam, rasa cemas mulai ikut tumbuh setiap hari",
];

export default function Problem() {
  return (
    <section id="masalah" className="relative py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-prose text-center">
          <Reveal>
            <span className="eyebrow">Mungkin ini terdengar familiar</span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="h-display mt-5 text-[28px] leading-tight sm:text-[36px]">
              Mungkin kamu sedang membaca ini sambil&hellip;
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">
              Kalau salah satunya terasa seperti kamu, tarik napas dulu. Kamu tidak
              sedang berlebihan. Dan kamu tidak sendirian.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
          {signals.map((s, i) => (
            <Reveal key={s} delay={i * 60}>
              <div className="flex items-start gap-3 rounded-2xl border border-line bg-surface/70 p-5 transition-colors hover:border-accent/30">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-[13px] font-semibold text-accent">
                  {i + 1}
                </span>
                <p className="text-[15px] leading-relaxed text-ink-soft">{s}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-12 max-w-prose text-center font-display text-[20px] font-light leading-relaxed text-ink sm:text-[24px]">
            Yang paling melelahkan bukan cuma sakitnya &mdash; tapi siklusnya. Ke
            dokter, membaik sebentar, lalu kambuh lagi. Googling tengah malam.
            Mencoba semuanya. Sebagian malah memperburuk.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
