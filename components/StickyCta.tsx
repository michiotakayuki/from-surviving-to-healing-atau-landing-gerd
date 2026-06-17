"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/config";
import { ArrowRight } from "./icons";

/**
 * Mobile-only sticky CTA. Appears after the user scrolls past the hero
 * and hides near the very bottom so it never overlaps the footer CTA.
 */
export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const nearBottom =
        window.innerHeight + y >= document.body.scrollHeight - 220;
      setShow(y > 640 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 transition-all duration-300 md:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <div className="border-t border-line bg-paper/90 px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl">
        <a
          href={siteConfig.checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-between rounded-full bg-accent px-5 py-3.5 text-white shadow-glow"
        >
          <span className="flex flex-col items-start leading-tight">
            <span className="text-[15px] font-semibold">Dapatkan Bukunya</span>
            <span className="text-[12px] text-white/80">
              {siteConfig.price}{" "}
              <span className="line-through opacity-70">{siteConfig.priceStrike}</span>
            </span>
          </span>
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
