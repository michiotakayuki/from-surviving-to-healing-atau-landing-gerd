import { siteConfig } from "@/lib/config";

/**
 * Premium editorial ebook cover (pure SVG → no image asset, fast loading).
 * Illustration: a woman seen from behind facing a sunrise — moving from
 * shadow toward warm light (calm & hope). Swap with a real <Image /> later
 * if you have photographic artwork; keep the same wrapper/markup.
 */
export default function BookCover() {
  return (
    <div className="relative w-full max-w-[360px] [perspective:1600px]">
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
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-r-2xl rounded-l-md border border-black/5 shadow-lift">
          <svg
            viewBox="0 0 320 420"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid slice"
            aria-label="Ilustrasi seorang wanita dari belakang menghadap cahaya matahari terbit"
            role="img"
          >
            <defs>
              <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#241a13" />
                <stop offset="0.55" stopColor="#7a4327" />
                <stop offset="1" stopColor="#b06536" />
              </linearGradient>
              <radialGradient id="halo" cx="0.5" cy="0.34" r="0.5">
                <stop offset="0" stopColor="#f6d9b0" stopOpacity="0.95" />
                <stop offset="0.4" stopColor="#e7a76d" stopOpacity="0.5" />
                <stop offset="1" stopColor="#e7a76d" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="fig" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#120c08" />
                <stop offset="1" stopColor="#2a1b12" />
              </linearGradient>
              <linearGradient id="scrim" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#0c0907" stopOpacity="0" />
                <stop offset="1" stopColor="#0c0907" stopOpacity="0.72" />
              </linearGradient>
            </defs>

            <rect width="320" height="420" fill="url(#bg)" />
            <circle cx="160" cy="150" r="150" fill="url(#halo)" />
            <circle cx="160" cy="138" r="30" fill="#f8e2c1" opacity="0.85" />
            <circle cx="160" cy="138" r="60" fill="none" stroke="#f0c79a" strokeOpacity="0.18" />

            {/* shoulders */}
            <path
              d="M58 420 L58 388 C58 350 104 330 160 330 C216 330 262 350 262 388 L262 420 Z"
              fill="url(#fig)"
            />
            {/* head + long hair */}
            <path
              d="M160 196 C201 196 222 230 220 276 C218 330 212 372 206 408 L114 408 C108 372 102 330 100 276 C98 230 119 196 160 196 Z"
              fill="url(#fig)"
            />
            {/* center part of the hair */}
            <path
              d="M160 204 L160 258"
              stroke="#5a4030"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.5"
            />
            {/* rim light, right (the light touching her) */}
            <path
              d="M220 276 C218 330 212 372 206 408"
              fill="none"
              stroke="#e29055"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.8"
            />
            {/* rim light, left subtle */}
            <path
              d="M100 276 C102 330 108 372 114 408"
              fill="none"
              stroke="#7a4a2e"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.5"
            />

            <rect y="300" width="320" height="120" fill="url(#scrim)" />
          </svg>

          {/* text overlay */}
          <div className="relative flex h-full flex-col justify-between p-7">
            <div>
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-paper/85">
                Ebook &middot; Pengalaman Pribadi
              </span>
            </div>

            <div>
              <h2 className="font-display text-[26px] font-light leading-[1.12] text-paper">
                From Surviving to Healing
              </h2>
              <p className="mt-3 text-[12px] leading-relaxed text-paper/70">
                Perjalanan Memutarbalikkan GERD, Gastritis, dan Colitis yang Datang
                Bersamaan.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-[11px] tracking-wide text-paper/75">
                  oleh {siteConfig.authorName}
                </span>
                <span className="h-7 w-7 rounded-full border border-paper/25" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
