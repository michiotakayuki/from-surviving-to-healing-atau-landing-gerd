"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/config";
import { Leaf } from "./icons";

const links = [
  { href: "#cerita", label: "Cerita" },
  { href: "#isi-buku", label: "Isi Buku" },
  { href: "#add-on", label: "Add-On" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-paper/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-accent">
            <Leaf className="h-[18px] w-[18px]" />
          </span>
          <span className="font-display text-[17px] font-normal tracking-tight text-ink">
            Surviving&nbsp;to&nbsp;Healing
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={siteConfig.checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-ink px-5 py-2.5 text-[14px] font-semibold text-paper transition-all duration-300 hover:bg-ink-soft md:inline-flex"
        >
          Dapatkan Buku
        </a>
      </nav>
    </header>
  );
}
