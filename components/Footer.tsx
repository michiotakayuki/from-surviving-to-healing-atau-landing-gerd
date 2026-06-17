import { siteConfig } from "@/lib/config";
import { Leaf } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-paper">
      <div className="container-page py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-accent">
                <Leaf className="h-[18px] w-[18px]" />
              </span>
              <span className="font-display text-[16px] leading-tight text-ink">
                {siteConfig.productName}
              </span>
            </div>
            <p className="mt-4 text-[14px] leading-relaxed text-muted">
              Sebuah ebook pengalaman pribadi tentang perjalanan pulih saat GERD,
              gastritis, dan colitis datang bersamaan. Ditulis oleh{" "}
              {siteConfig.authorName}.
            </p>
          </div>

          <nav className="flex gap-12">
            <div className="flex flex-col gap-3 text-[14px]">
              <span className="text-[12px] font-medium uppercase tracking-wide text-muted">
                Navigasi
              </span>
              <a href="#cerita" className="text-ink-soft hover:text-ink">Cerita</a>
              <a href="#isi-buku" className="text-ink-soft hover:text-ink">Isi Buku</a>
              <a href="#add-on" className="text-ink-soft hover:text-ink">Add-On</a>
              <a href="#faq" className="text-ink-soft hover:text-ink">FAQ</a>
            </div>
          </nav>
        </div>

        <div className="mt-12 rounded-2xl border border-line bg-surface/60 p-5">
          <p className="text-[12px] leading-relaxed text-muted">
            <strong className="font-semibold text-ink-soft">Disclaimer:</strong>{" "}
            Ebook ini ditulis berdasarkan pengalaman pribadi dan ditujukan untuk
            tujuan edukasi serta berbagi pengalaman. Informasi di dalamnya tidak
            dimaksudkan sebagai pengganti diagnosis, pengobatan, atau saran medis
            profesional. Setiap individu memiliki kondisi kesehatan yang berbeda.
            Disarankan untuk berkonsultasi dengan dokter atau profesional kesehatan
            sebelum menerapkan informasi apa pun.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-line pt-8 text-[13px] text-muted sm:flex-row">
          <p>© {year} {siteConfig.productName}. All rights reserved.</p>
          <p>Dibuat dengan penuh harapan untuk yang sedang berjuang.</p>
        </div>
      </div>
    </footer>
  );
}
