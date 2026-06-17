/**
 * SITE CONFIG
 * ---------------------------------------------------------------
 * Ganti nilai di bawah ini sesuai kebutuhan kamu.
 * Cukup edit file ini — semua tombol & metadata otomatis ikut.
 */

export const siteConfig = {
  // === LINK CHECKOUT SCALEV ===
  // Ganti "#" dengan URL checkout Scalev kamu (mis. https://checkout.scalev.id/xxxx)
  checkoutUrl: "#",

  // Link checkout untuk add-on multivitamin (opsional, bisa sama dengan di atas)
  checkoutUrlAddon: "#",

  // === IDENTITAS ===
  productName: "From Surviving to Healing",
  authorName: "Rovie",
  brandName: "From Surviving to Healing",

  // === HARGA ===
  price: "Rp99.000",
  priceStrike: "Rp299.000",
  priceBadge: "Harga perkenalan",
  priceSave: "Hemat Rp200.000",
  priceNote:
    "Aku ingin cerita ini bisa dijangkau siapa pun yang sedang berjuang. Karena itu, untuk saat ini harganya jauh di bawah nilai sebenarnya.",

  price_addon: "Rp49.000",

  // === DOMAIN (untuk SEO / Open Graph) ===
  url: "https://from-surviving-to-healing.vercel.app",

  // === META ===
  title: "From Surviving to Healing — Perjalanan Bangkit dari GERD & Gastritis",
  description:
    "Catatan jujur perjalanan nyata bangkit dari GERD, gastritis, dan colitis yang datang bersamaan. Sebuah peta first-aid untuk kamu yang lelah mencari arah. Bukan janji sembuh instan.",
};

export type SiteConfig = typeof siteConfig;
