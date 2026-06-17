import { siteConfig } from "@/lib/config";

/**
 * Pure-CSS premium ebook cover mockup (no image assets needed → fast loading).
 * Swap with a real <Image /> later if you have cover artwork.
 */
export default function BookCover() {
  return (
    <div className="relative w-full max-w-[360px] [perspective:1600px]">
      {/* glow behind */}
      <div
        className="absolute -inset-6 -z-10 rounded-[40px] bg-accent/10 blur-3xl"
        aria-hidden
      />

      <div className="relative animate-float [transform-style:preserve-3d] [transform:rotateY(-16deg)_rotateX(4deg)]">
        {/* spine */}
        <div
          className="absolute left-0 top-0 h-full w-3 rounded-l-md bg-gradient-to-b from-[#9a4a2c] to-[#7c3a22] [transform:translateX(-6px)_rotateY(90deg)] [transform-origin:left]"
          aria-hidden
        />

        {/* cover face */}
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-r-2xl rounded-l-md border border-black/5 bg-gradient-to-br from-[#1f1a16] via-[#2a221c] to-[#3a2c22] shadow-lift">
          {/* texture */}
          <div className="absolute inset-0 grain opacity-30" aria-hidden />
          {/* arc accent */}
          <div
            className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-accent/30"
            aria-hidden
          />
          <div
            className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-accent/20"
            aria-hidden
          />

          <div className="relative flex h-full flex-col justify-between p-7">
            <div>
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-accent/90">
                Ebook &middot; Pengalaman Pribadi
              </span>
            </div>

            <div>
              <h2 className="font-display text-[26px] font-light leading-[1.12] text-paper">
                From Surviving to Healing
              </h2>
              <p className="mt-3 text-[12px] leading-relaxed text-paper/55">
                Perjalanan memutarbalikkan GERD, Gastritis, &amp; Colitis yang
                datang bersamaan.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[11px] tracking-wide text-paper/70">
                oleh {siteConfig.authorName}
              </span>
              <span className="h-8 w-8 rounded-full border border-paper/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
