# From Surviving to Healing — Landing Page

Landing page premium (Next.js + Tailwind CSS) untuk ebook GERD & Gastritis.
Mobile-first, SEO-friendly, fast-loading, dan dioptimalkan untuk konversi.

## ✨ Fitur

- **Next.js 14 (App Router)** + **TypeScript** + **Tailwind CSS**
- 9 section: Hero, Problem, Personal Story, Benefits, What You'll Learn, Add-On Multivitamin, FAQ, CTA, Footer
- Animasi scroll ringan (IntersectionObserver, tanpa library berat) + hormat `prefers-reduced-motion`
- **Sticky CTA** khusus mobile
- Cover ebook full-CSS (tanpa file gambar → loading cepat)
- SEO: metadata, Open Graph, JSON-LD (schema Book), `sitemap.xml`, `robots.txt`
- Aman untuk kebijakan iklan: tanpa klaim medis / janji sembuh

## 🔧 Yang WAJIB kamu ganti

Semua ada di satu file: **`lib/config.ts`**

```ts
checkoutUrl: "#",        // ← URL checkout Scalev untuk ebook
checkoutUrlAddon: "#",   // ← URL checkout Scalev untuk add-on multivitamin
price: "Rp99.000",       // ← harga jual
priceStrike: "Rp149.000",// ← harga coret (opsional)
price_addon: "Rp129.000",// ← harga add-on
url: "https://...",      // ← domain final (untuk SEO/OG)
```

> Setelah link Scalev kamu siap, cukup tempelkan ke `checkoutUrl`. Semua tombol
> (hero, sticky mobile, nav, CTA section) otomatis ikut.

## 🚀 Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## ☁️ Deploy ke Vercel

1. Push folder ini ke sebuah repository GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: landing page From Surviving to Healing"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO.git
   git push -u origin main
   ```
2. Buka [vercel.com](https://vercel.com) → **Add New Project** → import repo tersebut.
3. Vercel otomatis mendeteksi Next.js. Klik **Deploy**. Selesai.
4. (Opsional) Tambahkan custom domain di Settings → Domains, lalu update `url` di `lib/config.ts`.

## 🎨 Kustomisasi cepat

| Mau ubah          | Di file                          |
| ----------------- | -------------------------------- |
| Warna / font      | `tailwind.config.ts`, `app/layout.tsx` |
| Teks tiap section | `components/*.tsx`               |
| Harga & link      | `lib/config.ts`                  |
| Cover ebook       | `components/BookCover.tsx` (ganti dengan `next/image` jika punya artwork) |
| Pertanyaan FAQ    | `components/Faq.tsx`             |

## 📁 Struktur

```
app/
  layout.tsx      # font, metadata, JSON-LD
  page.tsx        # rangkaian section
  globals.css     # design tokens & utilities
  robots.ts
  sitemap.ts
components/        # tiap section + UI primitives
lib/config.ts     # ⭐ satu-satunya file yang perlu kamu edit
```

---

Dibuat dengan Next.js. Tanpa klaim medis — fokus pada cerita, kepercayaan, dan konversi.
