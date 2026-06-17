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
  priceStrike: "Rp149.000",

  price_addon: "Rp129.000",

  // === DOMAIN (untuk SEO / Open Graph) ===
  url: "https://from-surviving-to-healing.vercel.app",

  // === META ===
  title: "From Surviving to Healing — Perjalanan Memutarbalikkan GERD & Gastritis",
  description:
    "Catatan jujur perjalanan nyata memutarbalikkan GERD, gastritis, dan colitis yang datang bersamaan. Sebuah peta first-aid untuk kamu yang lelah mencari arah. Bukan janji sembuh instan.",
};

export type SiteConfig = typeof siteConfig;
