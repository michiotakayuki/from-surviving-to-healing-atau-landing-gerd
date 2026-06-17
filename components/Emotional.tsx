import Reveal from "./Reveal";
import { Brain } from "./icons";

const feelings = [
  "Pikiran yang sulit berhenti",
  "Kecemasan tanpa alasan jelas",
  "Rasa takut yang berlebihan",
  "Jantung berdebar & panik tiba-tiba",
  "Sulit menikmati hari-hari biasa",
];

export default function Emotional() {
  return (
    <section className="relative overflow-hidden bg-accent-soft/40 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 grain opacity-50" aria-hidden />
      <div className="container-page relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">
              <Brain className="h-4 w-4" /> Lebih dari sekadar fisik
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="h-display mt-5 text-[28px] leading-tight sm:text-[38px]">
              Ini bukan hanya soal lambung.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 text-[17px] leading-relaxed text-ink-soft">
              Kalau kamu pernah merasa ada yang aneh &mdash; bukan cuma di perut, tapi
              juga di pikiran &mdash; kamu tidak salah, dan kamu tidak sedang
              berlebihan.
            </p>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2.5">
            {feelings.map((f) => (
              <li
                key={f}
                className="rounded-full border border-line bg-surface/80 px-4 py-2 text-[14px] text-ink-soft"
              >
                {f}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-10 max-w-prose text-center text-[16px] leading-relaxed text-ink-soft">
            Banyak orang yang berjuang dengan masalah pencernaan diam-diam juga
            merasakan hal-hal yang jarang diceritakan. Hari-hari yang dulu terasa
            biasa pelan-pelan jadi sulit dinikmati. Aku tahu rasanya, karena aku
            pernah ada di sana.
          </p>
        </Reveal>

        <Reveal delay={260}>
          <p className="mx-auto mt-8 max-w-prose text-balance text-center font-display text-[22px] font-light leading-relaxed text-ink sm:text-[27px]">
            Dan salah satu hal yang paling melegakan dalam perjalananku adalah
            menyadari: tubuh dan pikiran ternyata saling terhubung &mdash; dan aku
            tidak sedang &ldquo;mengada-ada&rdquo;.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
