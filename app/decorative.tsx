"use client";

// Sketch-style line art illustrations inspired by continuous-line botanical + mother-and-baby artwork.
// Bold strokes, magnolia flowers, leaf sprigs, nursing silhouettes.
// Palette: deepPlum #4A3F4B, sage #8BA888, terracotta #C4887A, blush #F5E6DC

// ─── BOTANICAL ELEMENTS ────────────────────────────────────────

export function MagnoliaFlower({ className = "", size = 80, color = "#4A3F4B" }: { className?: string; size?: number; color?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 80 80" fill="none" aria-hidden="true">
      {/* Center */}
      <circle cx="40" cy="40" r="4" stroke={color} strokeWidth="1.2" opacity="0.7" />
      <circle cx="40" cy="40" r="1.5" fill={color} opacity="0.3" />
      {/* Petals - large magnolia-style open petals */}
      <path d="M40 36C38 28 34 20 40 14C46 20 42 28 40 36Z" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      <path d="M44 38C50 33 58 28 62 36C56 40 48 38 44 38Z" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
      <path d="M43 43C48 48 54 56 48 62C42 56 40 48 43 43Z" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      <path d="M36 43C30 48 22 54 18 46C24 42 32 42 36 43Z" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
      <path d="M37 37C32 32 26 24 32 18C38 24 38 32 37 37Z" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      {/* Inner petal lines */}
      <path d="M40 36C40 30 40 22 40 16" stroke={color} strokeWidth="0.6" strokeLinecap="round" opacity="0.25" />
      <path d="M44 38C48 36 54 32 60 36" stroke={color} strokeWidth="0.6" strokeLinecap="round" opacity="0.25" />
      <path d="M43 43C46 46 50 52 48 58" stroke={color} strokeWidth="0.6" strokeLinecap="round" opacity="0.25" />
      <path d="M36 43C32 46 26 50 20 46" stroke={color} strokeWidth="0.6" strokeLinecap="round" opacity="0.25" />
    </svg>
  );
}

export function LeafSprig({ className = "", size = 60, color = "#4A3F4B", flip = false }: { className?: string; size?: number; color?: string; flip?: boolean }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 60 60" fill="none" aria-hidden="true" style={flip ? { transform: "scaleX(-1)" } : undefined}>
      {/* Main stem - elegant curve */}
      <path d="M10 55C15 45 20 35 30 25C35 20 42 15 50 8" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.7" />
      {/* Leaves along stem */}
      <path d="M18 46C14 40 18 36 22 40" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M22 40C26 44 22 48 18 46" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M25 36C20 30 24 26 28 30" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
      <path d="M28 30C32 34 28 38 25 36" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
      <path d="M33 26C30 20 34 16 38 20" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M38 20C42 24 38 28 33 26" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M42 16C40 10 44 7 47 11" stroke={color} strokeWidth="1.1" strokeLinecap="round" opacity="0.45" />
      <path d="M47 11C50 15 46 18 42 16" stroke={color} strokeWidth="1.1" strokeLinecap="round" opacity="0.45" />
      {/* Leaf veins */}
      <path d="M20 43L19 40" stroke={color} strokeWidth="0.5" strokeLinecap="round" opacity="0.2" />
      <path d="M26 33L26 30" stroke={color} strokeWidth="0.5" strokeLinecap="round" opacity="0.2" />
      <path d="M35 22L36 19" stroke={color} strokeWidth="0.5" strokeLinecap="round" opacity="0.2" />
    </svg>
  );
}

export function LeafAccent({ className = "", color = "#8BA888" }: { className?: string; color?: string }) {
  return (
    <svg className={`inline-block ${className}`} width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M6 24C6 24 8 16 14 10C20 4 26 2 26 2C26 2 24 10 18 16C12 22 6 24 6 24Z" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      <path d="M6 24C8 20 11 15 16 10" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
      <path d="M2 26L6 24" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

// ─── MOTHER & BABY ILLUSTRATIONS ────────────────────────────────

export function MotherAndBaby({ className = "", size = 160, color = "#4A3F4B" }: { className?: string; size?: number; color?: string }) {
  return (
    <svg className={className} width={size} height={size * 1.1} viewBox="0 0 160 176" fill="none" aria-hidden="true">
      {/* Mother's head - hair in bun */}
      <path d="M68 32C68 22 74 14 82 14C90 14 96 22 96 32" stroke={color} strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
      <circle cx="88" cy="12" r="6" stroke={color} strokeWidth="1.2" opacity="0.5" />
      <path d="M82 12C84 10 88 8 92 10" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
      {/* Mother's face - looking down lovingly */}
      <path d="M74 32C74 40 78 46 84 46C90 46 92 40 92 34" stroke={color} strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
      {/* Neck and shoulders */}
      <path d="M78 46C76 50 72 54 62 58" stroke={color} strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
      <path d="M88 46C90 50 94 54 104 58" stroke={color} strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
      {/* Arms cradling */}
      <path d="M62 58C56 64 52 72 54 80C56 88 64 92 72 90" stroke={color} strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
      <path d="M104 58C108 64 110 72 106 82C104 88 96 92 88 90" stroke={color} strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
      {/* Baby - small curled form */}
      <path d="M72 72C74 66 78 62 84 62C90 62 92 66 92 72" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.55" />
      <path d="M72 72C72 78 76 84 82 84C88 84 92 78 92 72" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.55" />
      {/* Baby's head */}
      <circle cx="76" cy="66" r="5" stroke={color} strokeWidth="1.2" opacity="0.5" />
      {/* Baby's tiny hand */}
      <path d="M86 70C88 68 90 69 89 71" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      {/* Flowers at bottom - magnolia style */}
      <path d="M30 130C34 124 40 120 46 122C44 128 38 132 30 130Z" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.45" />
      <path d="M46 122C50 116 56 114 60 118C56 124 50 126 46 122Z" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.4" />
      <path d="M38 136C34 130 36 124 42 124C44 130 42 136 38 136Z" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.4" />
      <circle cx="44" cy="126" r="2" stroke={color} strokeWidth="0.8" opacity="0.3" />
      {/* Right flower cluster */}
      <path d="M110 126C114 120 120 118 124 122C120 128 114 130 110 126Z" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.45" />
      <path d="M120 132C116 126 118 120 124 120C126 126 124 132 120 132Z" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.4" />
      <path d="M124 122C128 116 134 116 136 120C132 124 126 126 124 122Z" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.4" />
      <circle cx="122" cy="124" r="2" stroke={color} strokeWidth="0.8" opacity="0.3" />
      {/* Connecting vine */}
      <path d="M54 128C64 132 72 130 80 128C88 126 96 128 110 126" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      {/* Small leaves on vine */}
      <path d="M68 130C66 126 70 124 72 127" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
      <path d="M92 127C90 123 94 121 96 124" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
    </svg>
  );
}

export function NursingMother({ className = "", size = 120, color = "#4A3F4B" }: { className?: string; size?: number; color?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      {/* Hair */}
      <path d="M52 24C52 16 56 10 64 10C72 10 76 16 76 24" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.55" />
      <path d="M68 10C70 8 74 8 76 10" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      {/* Face silhouette looking down */}
      <path d="M54 24C54 32 58 36 64 38" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.55" />
      <path d="M74 24C74 30 70 36 64 38" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.55" />
      {/* Body - seated pose */}
      <path d="M56 38C52 42 46 48 42 56C38 64 40 72 44 78" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
      <path d="M72 38C76 42 82 48 84 56C86 64 82 72 78 78" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
      {/* Arms holding baby */}
      <path d="M46 56C48 60 52 64 56 66" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
      <path d="M82 56C78 60 74 64 70 66" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
      {/* Baby shape */}
      <ellipse cx="63" cy="62" rx="10" ry="7" stroke={color} strokeWidth="1.2" opacity="0.45" />
      <circle cx="56" cy="58" r="4" stroke={color} strokeWidth="1" opacity="0.4" />
      {/* Small leaf accent */}
      <path d="M90 30C94 24 100 24 102 28C98 32 92 32 90 30Z" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.35" />
      <path d="M100 22C102 18 106 18 108 22C104 24 100 24 100 22Z" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M102 28C104 26 102 22 100 22" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
    </svg>
  );
}

// ─── DIVIDERS ────────────────────────────────────────────────────

export function BranchDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center py-5 ${className}`} aria-hidden="true">
      <svg width="280" height="36" viewBox="0 0 280 36" fill="none">
        {/* Main horizontal vine */}
        <path d="M30 18C50 18 60 14 80 16C100 18 110 18 140 18C170 18 180 18 200 16C220 14 230 18 250 18" stroke="#4A3F4B" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
        {/* Left magnolia */}
        <path d="M60 16C56 10 60 6 64 10C60 14 56 14 60 16Z" stroke="#4A3F4B" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        <path d="M64 10C68 6 72 8 68 14C64 12 62 14 64 10Z" stroke="#4A3F4B" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
        <circle cx="63" cy="12" r="1.5" fill="#C4887A" opacity="0.4" />
        {/* Left leaf pair */}
        <path d="M85 16C82 10 86 7 90 12" stroke="#4A3F4B" strokeWidth="1.1" strokeLinecap="round" opacity="0.35" />
        <path d="M90 12C92 16 88 18 85 16" stroke="#4A3F4B" strokeWidth="1.1" strokeLinecap="round" opacity="0.35" />
        <path d="M92 17C88 22 84 24 86 18" stroke="#4A3F4B" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
        {/* Small inner leaf */}
        <path d="M108 17C106 12 110 10 112 14" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
        <path d="M112 14C113 18 109 19 108 17" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
        {/* Center flower */}
        <path d="M140 18C137 12 140 6 143 12C140 14 137 14 140 18Z" stroke="#C4887A" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
        <path d="M140 18C146 16 150 12 146 18C144 20 142 20 140 18Z" stroke="#C4887A" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        <path d="M140 18C143 24 140 28 137 22C138 20 140 18 140 18Z" stroke="#C4887A" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        <path d="M140 18C134 16 130 12 136 18C138 20 140 18 140 18Z" stroke="#C4887A" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        <circle cx="140" cy="17" r="2" fill="#C4887A" opacity="0.35" />
        {/* Right inner leaf */}
        <path d="M168 17C170 12 166 10 164 14" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
        <path d="M164 14C163 18 167 19 168 17" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
        {/* Right leaf pair */}
        <path d="M195 16C198 10 194 7 190 12" stroke="#4A3F4B" strokeWidth="1.1" strokeLinecap="round" opacity="0.35" />
        <path d="M190 12C188 16 192 18 195 16" stroke="#4A3F4B" strokeWidth="1.1" strokeLinecap="round" opacity="0.35" />
        <path d="M188 17C192 22 196 24 194 18" stroke="#4A3F4B" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
        {/* Right magnolia */}
        <path d="M220 16C224 10 220 6 216 10C220 14 224 14 220 16Z" stroke="#4A3F4B" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        <path d="M216 10C212 6 208 8 212 14C216 12 218 14 216 10Z" stroke="#4A3F4B" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
        <circle cx="217" cy="12" r="1.5" fill="#C4887A" opacity="0.4" />
      </svg>
    </div>
  );
}

export function FloralDividerSmall({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center py-3 ${className}`} aria-hidden="true">
      <svg width="120" height="24" viewBox="0 0 120 24" fill="none">
        <path d="M10 12C20 12 30 10 40 11C50 12 55 12 60 12C65 12 70 12 80 11C90 10 100 12 110 12" stroke="#4A3F4B" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
        {/* Small center leaf cluster */}
        <path d="M55 12C53 7 57 5 59 9" stroke="#8BA888" strokeWidth="1.1" strokeLinecap="round" opacity="0.4" />
        <path d="M59 9C61 13 57 14 55 12" stroke="#8BA888" strokeWidth="1.1" strokeLinecap="round" opacity="0.4" />
        <path d="M61 12C63 7 67 5 65 10" stroke="#8BA888" strokeWidth="1.1" strokeLinecap="round" opacity="0.4" />
        <path d="M65 10C64 14 60 14 61 12" stroke="#8BA888" strokeWidth="1.1" strokeLinecap="round" opacity="0.4" />
        <circle cx="60" cy="11" r="1" fill="#C4887A" opacity="0.4" />
      </svg>
    </div>
  );
}

// ─── CORNER & FRAME ELEMENTS ─────────────────────────────────────

export function FloralCorner({ className = "", position = "top-right" }: { className?: string; position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" }) {
  const posClasses: Record<string, string> = {
    "top-right": "top-1 right-1",
    "top-left": "top-1 left-1",
    "bottom-right": "bottom-1 right-1",
    "bottom-left": "bottom-1 left-1",
  };
  const flipX = position === "top-left" || position === "bottom-left";
  const flipY = position === "bottom-right" || position === "bottom-left";
  const scaleX = flipX ? -1 : 1;
  const scaleY = flipY ? -1 : 1;

  return (
    <svg
      className={`absolute ${posClasses[position]} ${className}`}
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      aria-hidden="true"
      style={{ transform: `scale(${scaleX}, ${scaleY})` }}
    >
      {/* Main curved branch */}
      <path d="M52 4C48 6 38 10 30 18C22 26 18 36 16 42" stroke="#4A3F4B" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      {/* Flower at corner */}
      <path d="M48 6C44 2 48 -2 52 2C50 6 46 6 48 6Z" stroke="#C4887A" strokeWidth="1.1" strokeLinecap="round" opacity="0.4" />
      <path d="M52 2C56 -2 58 2 54 6C52 4 50 4 52 2Z" stroke="#C4887A" strokeWidth="1.1" strokeLinecap="round" opacity="0.35" />
      <circle cx="51" cy="4" r="1.5" fill="#C4887A" opacity="0.3" />
      {/* Leaves along branch */}
      <path d="M38 12C35 8 39 5 41 9" stroke="#4A3F4B" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M41 9C43 13 39 14 38 12" stroke="#4A3F4B" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M28 22C24 18 28 15 30 19" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M30 19C32 23 28 24 28 22" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      {/* Tiny bud */}
      <path d="M20 32C18 28 22 27 22 31" stroke="#4A3F4B" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
    </svg>
  );
}

// ─── BACKGROUND ELEMENTS ─────────────────────────────────────────

export function BlobShape({ className = "", color = "#8BA888" }: { className?: string; color?: string }) {
  return (
    <svg className={`absolute ${className}`} width="300" height="300" viewBox="0 0 300 300" fill="none" aria-hidden="true">
      <path d="M150 30C200 30 260 60 270 120C280 180 240 220 200 250C160 280 100 280 60 250C20 220 10 170 30 120C50 70 100 30 150 30Z" fill={color} opacity="0.06" />
    </svg>
  );
}

// ─── SCENE ILLUSTRATIONS ─────────────────────────────────────────

export function FloralWreathSmall({ className = "", size = 100, color = "#4A3F4B" }: { className?: string; size?: number; color?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      {/* Circular wreath */}
      <path d="M50 15C65 15 78 22 85 35" stroke={color} strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M85 35C92 48 92 62 85 75" stroke={color} strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M85 75C78 88 65 92 50 92" stroke={color} strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M50 92C35 92 22 88 15 75" stroke={color} strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M15 75C8 62 8 48 15 35" stroke={color} strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M15 35C22 22 35 15 50 15" stroke={color} strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      {/* Leaves around wreath */}
      <path d="M60 16C62 10 68 10 66 16" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <path d="M80 28C84 24 88 26 84 32" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
      <path d="M90 52C94 50 96 54 92 56" stroke={color} strokeWidth="0.9" strokeLinecap="round" opacity="0.3" />
      <path d="M84 72C88 74 86 78 82 76" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
      <path d="M66 88C68 92 64 94 62 90" stroke={color} strokeWidth="0.9" strokeLinecap="round" opacity="0.3" />
      <path d="M38 88C36 92 32 90 34 86" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
      <path d="M18 72C14 74 12 70 16 68" stroke={color} strokeWidth="0.9" strokeLinecap="round" opacity="0.3" />
      <path d="M10 52C6 50 8 46 12 48" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
      <path d="M18 32C14 28 18 26 20 30" stroke={color} strokeWidth="0.9" strokeLinecap="round" opacity="0.3" />
      <path d="M38 16C36 10 40 10 40 16" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      {/* Small flowers */}
      <circle cx="72" cy="18" r="2" stroke="#C4887A" strokeWidth="0.8" opacity="0.35" />
      <circle cx="28" cy="86" r="2" stroke="#C4887A" strokeWidth="0.8" opacity="0.35" />
      <circle cx="88" cy="62" r="1.5" stroke="#C4887A" strokeWidth="0.8" opacity="0.3" />
      <circle cx="12" cy="42" r="1.5" stroke="#C4887A" strokeWidth="0.8" opacity="0.3" />
    </svg>
  );
}

export function HeartFloral({ className = "", size = 50, color = "#C4887A" }: { className?: string; size?: number; color?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 50 50" fill="none" aria-hidden="true">
      {/* Heart outline */}
      <path d="M25 44C25 44 6 32 6 18C6 12 10 8 16 8C20 8 23 10 25 14C27 10 30 8 34 8C40 8 44 12 44 18C44 32 25 44 25 44Z" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
      {/* Small leaves coming off heart */}
      <path d="M10 14C7 10 10 8 12 11" stroke="#8BA888" strokeWidth="0.9" strokeLinecap="round" opacity="0.35" />
      <path d="M40 14C43 10 40 8 38 11" stroke="#8BA888" strokeWidth="0.9" strokeLinecap="round" opacity="0.35" />
      {/* Tiny center flower */}
      <circle cx="25" cy="24" r="2" stroke={color} strokeWidth="0.8" opacity="0.3" />
      <path d="M25 22C25 20 24 18 25 17" stroke={color} strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />
      <path d="M27 23C29 22 30 21 31 21" stroke={color} strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />
    </svg>
  );
}

export function BreathingFlower({ className = "", size = 40, color = "#8BA888" }: { className?: string; size?: number; color?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M20 16C18 10 20 4 22 10C20 12 18 12 20 16Z" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <path d="M24 18C28 14 34 14 28 20C26 20 24 18 24 18Z" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.35" />
      <path d="M22 24C24 28 22 34 20 28C20 26 22 24 22 24Z" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.35" />
      <path d="M16 20C12 16 6 16 12 22C14 22 16 20 16 20Z" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <circle cx="20" cy="20" r="2.5" stroke={color} strokeWidth="0.8" opacity="0.35" />
    </svg>
  );
}

// ─── SECTION HEADER ILLUSTRATIONS ────────────────────────────────

export function CalmHeaderIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="100%" height="40" viewBox="0 0 320 40" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      {/* Flowing wave with leaves */}
      <path d="M0 20C40 14 80 26 120 20C160 14 200 26 240 20C280 14 320 20 320 20" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
      <path d="M0 22C40 28 80 16 120 22C160 28 200 16 240 22C280 28 320 22 320 22" stroke="#8BA888" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" />
      {/* Scattered leaves */}
      <path d="M60 16C58 12 62 10 64 14" stroke="#8BA888" strokeWidth="0.9" strokeLinecap="round" opacity="0.3" />
      <path d="M150 24C148 20 152 18 154 22" stroke="#C4887A" strokeWidth="0.9" strokeLinecap="round" opacity="0.25" />
      <path d="M240 16C238 12 242 10 244 14" stroke="#8BA888" strokeWidth="0.9" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}

export function HomeHeaderIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute top-0 right-0 opacity-[0.12] pointer-events-none ${className}`} aria-hidden="true">
      <svg width="180" height="200" viewBox="0 0 180 200" fill="none">
        {/* Large magnolia bloom */}
        <path d="M130 60C126 44 132 28 140 32C148 36 142 52 138 60Z" stroke="#4A3F4B" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M138 60C150 52 164 48 162 58C160 68 148 66 138 60Z" stroke="#4A3F4B" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M138 60C148 68 154 82 146 84C138 86 134 72 138 60Z" stroke="#4A3F4B" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M130 60C118 66 106 72 110 62C114 52 126 54 130 60Z" stroke="#4A3F4B" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="135" cy="60" r="4" stroke="#4A3F4B" strokeWidth="1.2" />
        <circle cx="135" cy="60" r="1.5" fill="#4A3F4B" opacity="0.5" />
        {/* Stem and leaves */}
        <path d="M134 64C128 80 120 100 112 120C108 130 104 140 100 160" stroke="#4A3F4B" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M124 88C118 80 120 72 126 78" stroke="#4A3F4B" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M126 78C130 84 126 90 124 88" stroke="#4A3F4B" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M118 108C124 100 130 98 128 106" stroke="#4A3F4B" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M128 106C126 112 120 112 118 108" stroke="#4A3F4B" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M108 132C102 126 104 118 110 124" stroke="#4A3F4B" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M110 124C114 130 110 134 108 132" stroke="#4A3F4B" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    </div>
  );
}
