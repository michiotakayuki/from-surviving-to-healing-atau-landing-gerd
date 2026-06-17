"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { Plus, Minus } from "./icons";

const faqs = [
  {
    q: "Aku sudah baca banyak artikel gratis. Apa bedanya?",
    a: "Artikel gratis tersebar dan sering saling bertentangan — penulis sendiri sempat tersesat di dalamnya dan beberapa metode justru memperburuk kondisinya. Buku ini satu alur utuh dari satu pengalaman, lengkap dengan urutan prioritas, supaya kamu tidak perlu menyusun potongan-potongan sendiri.",
  },
  {
    q: "Apakah ini akan menyembuhkanku?",
    a: "Buku ini bukan obat dan bukan nasihat medis. Ini berbagi pengalaman pribadi. Pemulihan setiap orang berbeda, dan langkah pertama yang justru ditekankan di dalamnya adalah tetap berkonsultasi dengan dokter.",
  },
  {
    q: "Aku juga punya anxiety bareng masalah lambung. Dibahas nggak?",
    a: "Iya, ada satu bab khusus tentang hubungan usus dan otak (gut-brain connection). Ini salah satu bagian yang paling jarang dibahas di tempat lain.",
  },
  {
    q: "Bahasanya berat nggak? Aku awam soal kesehatan.",
    a: "Ditulis dengan bahasa sehari-hari yang mudah dipahami. Tidak ada istilah medis rumit tanpa penjelasan.",
  },
  {
    q: "Bagaimana cara membacanya?",
    a: "Berbentuk ebook digital. Setelah pembelian, kamu bisa langsung membacanya dari HP atau laptop kapan saja.",
  },
  {
    q: "Apakah aku harus membeli add-on multivitaminnya?",
    a: "Tidak. Add-on sepenuhnya opsional. Buku sudah lengkap berdiri sendiri. Add-on hanya untuk kamu yang ingin langsung memulai tanpa repot memilih suplemen satu per satu.",
  },
];

function FaqItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-line">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
      >
        <span className="font-display text-[18px] font-normal text-ink sm:text-[19px]">
          {q}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-accent transition-colors ${
            isOpen ? "bg-accent text-white" : "bg-surface"
          }`}
        >
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-6 pr-12 text-[15px] leading-relaxed text-ink-soft">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="eyebrow">Pertanyaan yang sering ditanya</span>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="h-display mt-5 text-[28px] leading-tight sm:text-[36px]">
                Masih ragu? Mungkin ini menjawabnya.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 max-w-prose text-[15px] leading-relaxed text-ink-soft">
                Kalau ada hal lain yang ingin kamu tanyakan sebelum membeli, jangan
                ragu untuk menghubungi kami terlebih dahulu.
              </p>
            </Reveal>
          </div>

          <div>
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 40}>
                <FaqItem
                  q={f.q}
                  a={f.a}
                  isOpen={open === i}
                  onToggle={() => setOpen(open === i ? null : i)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
