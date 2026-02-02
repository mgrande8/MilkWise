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

// ─── HERO TAB ILLUSTRATIONS ─────────────────────────────────────
// Detailed line-art illustrations inspired by continuous-line nursing mother
// with textured hair, magnolia flowers with layered petals & stamens, leaf sprigs

export function HomeHeroArt({ className = "" }: { className?: string }) {
  const c = "#4A3F4B";
  const t = "#C4887A";
  const s = "#8BA888";
  return (
    <svg className={className} width="240" height="200" viewBox="0 0 240 200" fill="none" aria-hidden="true">
      {/* Hair - multiple flowing texture lines from crown to bun */}
      <path d="M108 32C106 24 110 14 118 9C124 6 132 6 138 10" stroke={c} strokeWidth="1.6" strokeLinecap="round" opacity="0.55" />
      <path d="M110 30C108 22 114 12 120 8C126 5 134 6 140 10" stroke={c} strokeWidth="1.3" strokeLinecap="round" opacity="0.43" />
      <path d="M112 28C112 20 118 12 124 8C130 6 136 8 142 12" stroke={c} strokeWidth="1.1" strokeLinecap="round" opacity="0.35" />
      <path d="M114 28C116 20 122 14 128 10C134 8 140 12 142 16" stroke={c} strokeWidth="0.9" strokeLinecap="round" opacity="0.28" />
      <path d="M116 28C119 22 126 16 132 14C138 12 142 16 144 20" stroke={c} strokeWidth="0.8" strokeLinecap="round" opacity="0.22" />
      {/* Messy bun with overlapping texture */}
      <path d="M138 10C142 4 150 4 152 10C154 16 150 20 144 18C138 16 136 12 138 10Z" stroke={c} strokeWidth="1.4" strokeLinecap="round" opacity="0.48" />
      <path d="M140 8C146 4 150 6 152 10" stroke={c} strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
      <path d="M142 14C146 10 150 12 148 18" stroke={c} strokeWidth="0.7" strokeLinecap="round" opacity="0.22" />
      <path d="M140 16C144 14 148 16 146 20" stroke={c} strokeWidth="0.7" strokeLinecap="round" opacity="0.2" />
      {/* Face profile - forehead, nose bridge, nose, lips, chin */}
      <path d="M108 32C106 36 106 42 108 45" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
      <path d="M108 45C109 47 108 49 107 50" stroke={c} strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
      <path d="M107 50C106 51 107 52 108 52" stroke={c} strokeWidth="1.2" strokeLinecap="round" opacity="0.42" />
      <path d="M108 52C106 54 106 57 108 59" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      {/* Back of jaw flowing from bun */}
      <path d="M144 20C142 28 136 36 130 42C126 48 124 54 124 58" stroke={c} strokeWidth="1.4" strokeLinecap="round" opacity="0.45" />
      {/* Neck and shoulders */}
      <path d="M108 59C104 64 96 70 88 76C82 80 80 88 80 96" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
      <path d="M124 58C128 62 136 68 144 72C150 76 154 84 154 94" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
      {/* Arms cradling baby */}
      <path d="M88 76C84 82 82 92 84 100C86 108 96 112 106 110" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.42" />
      <path d="M144 72C148 80 150 90 146 100C144 108 134 112 124 110" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.42" />
      {/* Baby nursing */}
      <path d="M106 82C108 76 114 72 120 72C126 72 130 76 130 82" stroke={c} strokeWidth="1.4" strokeLinecap="round" opacity="0.45" />
      <path d="M106 82C106 90 112 96 118 96C124 96 130 90 130 82" stroke={c} strokeWidth="1.4" strokeLinecap="round" opacity="0.45" />
      <circle cx="110" cy="76" r="6.5" stroke={c} strokeWidth="1.3" opacity="0.42" />
      {/* Baby tiny hands reaching */}
      <path d="M122 78C124 76 126 77 125 79" stroke={c} strokeWidth="0.9" strokeLinecap="round" opacity="0.35" />
      <path d="M120 80C121 78 123 78 123 80" stroke={c} strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      {/* Flowing dress */}
      <path d="M80 96C78 110 80 124 88 136C94 144 106 148 118 150" stroke={c} strokeWidth="1.3" strokeLinecap="round" opacity="0.32" />
      <path d="M154 94C156 110 152 124 144 136C138 144 126 148 118 150" stroke={c} strokeWidth="1.3" strokeLinecap="round" opacity="0.32" />

      {/* Left magnolia - 5 layered petals with inner fold lines */}
      <path d="M42 92C38 80 40 66 48 62C54 68 52 82 48 90Z" stroke={t} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.45" />
      <path d="M44 88C42 78 44 70 48 64" stroke={t} strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />
      <path d="M48 90C56 84 66 80 70 86C64 94 56 94 48 90Z" stroke={t} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.42" />
      <path d="M50 90C56 86 62 82 68 86" stroke={t} strokeWidth="0.6" strokeLinecap="round" opacity="0.18" />
      <path d="M48 96C54 102 58 112 52 116C46 110 44 102 48 96Z" stroke={t} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
      <path d="M48 98C52 104 54 110 52 114" stroke={t} strokeWidth="0.6" strokeLinecap="round" opacity="0.18" />
      <path d="M42 96C36 100 28 104 26 98C32 92 38 90 42 96Z" stroke={t} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.42" />
      <path d="M40 96C36 98 30 100 28 98" stroke={t} strokeWidth="0.6" strokeLinecap="round" opacity="0.18" />
      <path d="M40 90C34 84 28 74 32 68C38 74 40 84 40 90Z" stroke={t} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.45" />
      <path d="M40 88C36 82 32 74 32 70" stroke={t} strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />
      {/* Center stamens */}
      <circle cx="44" cy="92" r="3.5" stroke={t} strokeWidth="1" opacity="0.35" />
      <circle cx="42" cy="90" r="1" fill={t} opacity="0.3" />
      <circle cx="46" cy="90" r="1" fill={t} opacity="0.3" />
      <circle cx="44" cy="88" r="1" fill={t} opacity="0.25" />
      <circle cx="42" cy="94" r="0.8" fill={t} opacity="0.22" />
      <circle cx="46" cy="94" r="0.8" fill={t} opacity="0.22" />

      {/* Right magnolia - 5 layered petals with inner fold lines */}
      <path d="M196 88C192 76 194 64 200 60C206 66 204 78 200 86Z" stroke={t} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.45" />
      <path d="M198 84C196 74 198 66 200 62" stroke={t} strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />
      <path d="M200 86C208 80 218 78 220 84C214 92 206 92 200 86Z" stroke={t} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.42" />
      <path d="M202 86C208 82 214 80 218 84" stroke={t} strokeWidth="0.6" strokeLinecap="round" opacity="0.18" />
      <path d="M200 92C206 98 210 108 204 112C198 106 196 98 200 92Z" stroke={t} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
      <path d="M200 94C204 100 206 106 204 110" stroke={t} strokeWidth="0.6" strokeLinecap="round" opacity="0.18" />
      <path d="M196 92C190 96 182 98 180 92C186 86 192 86 196 92Z" stroke={t} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.42" />
      <path d="M194 92C190 94 184 96 182 92" stroke={t} strokeWidth="0.6" strokeLinecap="round" opacity="0.18" />
      <path d="M194 86C188 80 184 70 188 66C194 72 194 80 194 86Z" stroke={t} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.45" />
      <path d="M194 84C190 78 186 72 188 68" stroke={t} strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />
      <circle cx="198" cy="90" r="3.5" stroke={t} strokeWidth="1" opacity="0.35" />
      <circle cx="196" cy="88" r="1" fill={t} opacity="0.3" />
      <circle cx="200" cy="88" r="1" fill={t} opacity="0.3" />
      <circle cx="198" cy="86" r="1" fill={t} opacity="0.25" />
      <circle cx="196" cy="92" r="0.8" fill={t} opacity="0.22" />
      <circle cx="200" cy="92" r="0.8" fill={t} opacity="0.22" />

      {/* Left leaf sprig with veins */}
      <path d="M64 114C58 108 52 100 48 92" stroke={s} strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
      <path d="M60 110C56 104 60 100 62 104" stroke={s} strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M62 104C64 108 60 112 60 110" stroke={s} strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M54 104C50 98 54 94 58 98" stroke={s} strokeWidth="1.1" strokeLinecap="round" opacity="0.28" />
      <path d="M58 98C60 104 56 106 54 104" stroke={s} strokeWidth="1.1" strokeLinecap="round" opacity="0.28" />
      <path d="M61 107L59 103" stroke={s} strokeWidth="0.4" strokeLinecap="round" opacity="0.15" />

      {/* Right leaf sprig with veins */}
      <path d="M176 112C182 106 188 100 192 92" stroke={s} strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
      <path d="M180 108C184 102 180 98 178 102" stroke={s} strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M178 102C176 106 180 110 180 108" stroke={s} strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M186 102C190 96 186 92 184 96" stroke={s} strokeWidth="1.1" strokeLinecap="round" opacity="0.28" />
      <path d="M184 96C182 100 186 104 186 102" stroke={s} strokeWidth="1.1" strokeLinecap="round" opacity="0.28" />
      <path d="M179 105L180 102" stroke={s} strokeWidth="0.4" strokeLinecap="round" opacity="0.15" />

      {/* Bottom connecting vine */}
      <path d="M50 160C70 156 100 158 120 156C140 154 170 158 190 160" stroke={c} strokeWidth="0.9" strokeLinecap="round" opacity="0.18" />
      <path d="M80 158C78 152 82 150 84 154" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.22" />
      <path d="M84 154C86 158 82 160 80 158" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.22" />
      <path d="M160 156C158 150 162 148 164 152" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.22" />
      <path d="M164 152C166 156 162 158 160 156" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.22" />
      <circle cx="120" cy="155" r="2" stroke={t} strokeWidth="0.8" opacity="0.25" />
    </svg>
  );
}

export function LearnHeroArt({ className = "" }: { className?: string }) {
  const c = "#4A3F4B";
  const t = "#C4887A";
  const s = "#8BA888";
  return (
    <svg className={className} width="220" height="170" viewBox="0 0 220 170" fill="none" aria-hidden="true">
      {/* Hair - flowing lines gathered into bun */}
      <path d="M96 22C94 14 98 6 106 3C112 1 120 2 126 6" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.52" />
      <path d="M98 20C96 12 102 4 108 2C114 0 122 2 128 6" stroke={c} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M100 18C100 10 106 4 112 2C118 1 124 3 130 8" stroke={c} strokeWidth="1" strokeLinecap="round" opacity="0.32" />
      <path d="M102 18C104 10 110 4 116 3C122 2 128 6 132 10" stroke={c} strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
      {/* Messy bun */}
      <path d="M126 6C130 0 138 0 140 6C142 12 138 16 132 14C126 12 124 8 126 6Z" stroke={c} strokeWidth="1.3" strokeLinecap="round" opacity="0.45" />
      <path d="M128 4C134 0 138 2 140 6" stroke={c} strokeWidth="0.7" strokeLinecap="round" opacity="0.22" />
      <path d="M130 10C134 6 138 8 136 14" stroke={c} strokeWidth="0.7" strokeLinecap="round" opacity="0.2" />
      {/* Face profile */}
      <path d="M96 22C94 26 94 32 96 36C97 38 96 40 95 41" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.52" />
      <path d="M95 41C96 43 96 45 98 47" stroke={c} strokeWidth="1.4" strokeLinecap="round" opacity="0.48" />
      {/* Back of head / jaw */}
      <path d="M132 10C130 18 124 26 120 32C118 36 116 42 116 46" stroke={c} strokeWidth="1.3" strokeLinecap="round" opacity="0.42" />
      {/* Shoulders and body seated */}
      <path d="M98 47C94 52 86 58 80 62C76 66 74 74 76 82" stroke={c} strokeWidth="1.4" strokeLinecap="round" opacity="0.42" />
      <path d="M116 46C120 50 128 56 134 60C140 64 142 72 140 80" stroke={c} strokeWidth="1.4" strokeLinecap="round" opacity="0.42" />
      {/* Arms */}
      <path d="M80 62C78 68 80 74 84 78" stroke={c} strokeWidth="1.3" strokeLinecap="round" opacity="0.4" />
      <path d="M134 60C132 66 128 72 124 74" stroke={c} strokeWidth="1.3" strokeLinecap="round" opacity="0.4" />
      {/* Baby in lap */}
      <ellipse cx="106" cy="74" rx="12" ry="8" stroke={c} strokeWidth="1.3" opacity="0.42" />
      <circle cx="98" cy="68" r="5.5" stroke={c} strokeWidth="1.2" opacity="0.4" />
      <path d="M110 72C112 70 114 71 113 73" stroke={c} strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      {/* Open book */}
      <path d="M120 64C124 62 130 60 134 62" stroke={c} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M120 64C120 68 122 72 126 74" stroke={c} strokeWidth="1.1" strokeLinecap="round" opacity="0.35" />
      <path d="M134 62C134 66 132 70 126 74" stroke={c} strokeWidth="1.1" strokeLinecap="round" opacity="0.35" />
      <path d="M126 64C126 68 126 72 126 74" stroke={c} strokeWidth="0.7" strokeLinecap="round" opacity="0.18" />
      {/* Crossed legs */}
      <path d="M76 82C80 88 88 92 96 94C104 96 112 94 116 90" stroke={c} strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      <path d="M140 80C136 86 128 92 120 94C112 96 104 94 100 90" stroke={c} strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />

      {/* Left magnolia - 5 petals with fold lines */}
      <path d="M36 50C32 40 34 28 40 24C46 30 44 42 42 48Z" stroke={t} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.42" />
      <path d="M38 46C36 38 38 30 40 26" stroke={t} strokeWidth="0.6" strokeLinecap="round" opacity="0.18" />
      <path d="M42 48C48 42 58 40 60 46C56 52 48 52 42 48Z" stroke={t} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
      <path d="M44 48C50 44 56 42 58 46" stroke={t} strokeWidth="0.6" strokeLinecap="round" opacity="0.16" />
      <path d="M42 54C46 60 48 68 44 72C38 66 38 58 42 54Z" stroke={t} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.38" />
      <path d="M36 52C30 54 24 56 22 50C28 46 34 46 36 52Z" stroke={t} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
      <path d="M34 48C28 42 26 32 30 28C36 34 36 44 34 48Z" stroke={t} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.42" />
      <circle cx="38" cy="50" r="3" stroke={t} strokeWidth="0.9" opacity="0.32" />
      <circle cx="36" cy="48" r="0.9" fill={t} opacity="0.28" />
      <circle cx="40" cy="48" r="0.9" fill={t} opacity="0.28" />
      <circle cx="38" cy="46" r="0.9" fill={t} opacity="0.22" />
      <circle cx="36" cy="52" r="0.8" fill={t} opacity="0.2" />
      <circle cx="40" cy="52" r="0.8" fill={t} opacity="0.2" />

      {/* Right magnolia */}
      <path d="M178 46C174 36 176 26 182 22C188 28 186 40 184 46Z" stroke={t} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.42" />
      <path d="M180 44C178 36 180 28 182 24" stroke={t} strokeWidth="0.6" strokeLinecap="round" opacity="0.18" />
      <path d="M184 46C190 40 198 38 200 44C196 50 188 50 184 46Z" stroke={t} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
      <path d="M186 46C190 42 196 40 198 44" stroke={t} strokeWidth="0.6" strokeLinecap="round" opacity="0.16" />
      <path d="M184 52C188 58 190 66 186 68C180 62 180 54 184 52Z" stroke={t} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.38" />
      <path d="M178 48C172 50 166 50 166 44C172 42 178 44 178 48Z" stroke={t} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
      <path d="M176 44C170 38 170 28 174 26C180 32 178 42 176 44Z" stroke={t} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.42" />
      <circle cx="182" cy="48" r="3" stroke={t} strokeWidth="0.9" opacity="0.32" />
      <circle cx="180" cy="46" r="0.9" fill={t} opacity="0.28" />
      <circle cx="184" cy="46" r="0.9" fill={t} opacity="0.28" />
      <circle cx="182" cy="44" r="0.9" fill={t} opacity="0.22" />

      {/* Left leaf sprig */}
      <path d="M56 72C50 66 44 58 40 50" stroke={s} strokeWidth="1.1" strokeLinecap="round" opacity="0.32" />
      <path d="M52 68C48 62 52 58 54 62" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.28" />
      <path d="M54 62C56 66 52 70 52 68" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.28" />
      <path d="M46 60C42 54 46 50 48 54" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M48 54C50 58 46 62 46 60" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.25" />

      {/* Right leaf sprig */}
      <path d="M164 68C170 62 176 56 180 48" stroke={s} strokeWidth="1.1" strokeLinecap="round" opacity="0.32" />
      <path d="M168 64C172 58 168 54 166 58" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.28" />
      <path d="M166 58C164 62 168 66 168 64" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.28" />
      <path d="M174 58C178 52 174 48 172 52" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M172 52C170 56 174 60 174 58" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.25" />

      {/* Bottom vine */}
      <path d="M30 115C60 111 90 113 110 111C130 109 160 113 190 115" stroke={c} strokeWidth="0.9" strokeLinecap="round" opacity="0.15" />
      <path d="M80 113C78 107 82 105 84 109" stroke={s} strokeWidth="0.9" strokeLinecap="round" opacity="0.2" />
      <path d="M84 109C86 113 82 115 80 113" stroke={s} strokeWidth="0.9" strokeLinecap="round" opacity="0.2" />
      <path d="M140 111C138 105 142 103 144 107" stroke={s} strokeWidth="0.9" strokeLinecap="round" opacity="0.2" />
      <path d="M144 107C146 111 142 113 140 111" stroke={s} strokeWidth="0.9" strokeLinecap="round" opacity="0.2" />
      <circle cx="110" cy="110" r="1.5" stroke={t} strokeWidth="0.7" opacity="0.2" />
    </svg>
  );
}

export function SearchHeroArt({ className = "" }: { className?: string }) {
  const c = "#4A3F4B";
  const t = "#C4887A";
  const s = "#8BA888";
  return (
    <svg className={className} width="200" height="170" viewBox="0 0 200 170" fill="none" aria-hidden="true">
      {/* Hair - flowing texture lines */}
      <path d="M82 24C80 16 84 8 92 4C98 2 106 2 112 6" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.52" />
      <path d="M84 22C82 14 88 6 94 3C100 1 108 2 114 6" stroke={c} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M86 20C86 12 92 6 98 3C104 1 110 4 116 8" stroke={c} strokeWidth="1" strokeLinecap="round" opacity="0.32" />
      <path d="M88 20C90 12 96 6 102 4C108 3 114 6 118 10" stroke={c} strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
      {/* Loose strand at front */}
      <path d="M82 24C78 20 76 24 76 30C76 34 80 36 84 34" stroke={c} strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      {/* Messy bun */}
      <path d="M112 6C116 0 124 0 126 6C128 12 124 16 118 14C112 12 110 8 112 6Z" stroke={c} strokeWidth="1.3" strokeLinecap="round" opacity="0.45" />
      <path d="M114 4C120 0 124 2 126 6" stroke={c} strokeWidth="0.7" strokeLinecap="round" opacity="0.22" />
      <path d="M116 10C120 6 124 8 122 14" stroke={c} strokeWidth="0.7" strokeLinecap="round" opacity="0.2" />
      {/* Face profile */}
      <path d="M82 24C80 28 80 34 82 38C83 40 82 42 81 43" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.52" />
      <path d="M81 43C82 45 82 47 84 48" stroke={c} strokeWidth="1.4" strokeLinecap="round" opacity="0.48" />
      {/* Jaw from bun */}
      <path d="M118 10C116 18 110 26 106 32C104 36 102 42 102 46" stroke={c} strokeWidth="1.3" strokeLinecap="round" opacity="0.42" />
      {/* Shoulders */}
      <path d="M84 48C80 52 72 58 66 62" stroke={c} strokeWidth="1.4" strokeLinecap="round" opacity="0.45" />
      <path d="M102 46C106 50 114 56 120 60" stroke={c} strokeWidth="1.4" strokeLinecap="round" opacity="0.45" />
      {/* Arms wrapping protectively */}
      <path d="M66 62C62 68 60 78 64 86C68 92 76 94 84 92" stroke={c} strokeWidth="1.4" strokeLinecap="round" opacity="0.42" />
      <path d="M120 60C124 66 126 76 122 84C118 90 110 94 102 92" stroke={c} strokeWidth="1.4" strokeLinecap="round" opacity="0.42" />
      {/* Baby curled close */}
      <path d="M82 70C84 64 90 60 96 62C102 64 104 70 102 76" stroke={c} strokeWidth="1.3" strokeLinecap="round" opacity="0.42" />
      <path d="M82 70C80 76 82 82 88 84C94 86 100 82 102 76" stroke={c} strokeWidth="1.3" strokeLinecap="round" opacity="0.42" />
      <circle cx="86" cy="66" r="5.5" stroke={c} strokeWidth="1.2" opacity="0.4" />
      {/* Baby tiny hands */}
      <path d="M96 68C98 66 100 67 99 69" stroke={c} strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      {/* Heart in space above */}
      <path d="M90 52C88 48 84 46 82 48C80 50 82 54 90 58" stroke={t} strokeWidth="1" strokeLinecap="round" opacity="0.22" />
      <path d="M90 52C92 48 96 46 98 48C100 50 98 54 90 58" stroke={t} strokeWidth="1" strokeLinecap="round" opacity="0.22" />

      {/* Left botanical frame - leaf sprig */}
      <path d="M28 30C22 50 20 70 24 86" stroke={s} strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M26 38C22 32 26 28 28 32" stroke={s} strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M28 32C30 36 26 40 26 38" stroke={s} strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M24 50C20 44 24 40 26 44" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.28" />
      <path d="M26 44C28 48 24 52 24 50" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.28" />
      <path d="M22 62C18 56 22 52 24 56" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M24 56C26 60 22 64 22 62" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M24 74C20 68 24 64 26 68" stroke={s} strokeWidth="0.9" strokeLinecap="round" opacity="0.22" />
      <path d="M26 68C28 72 24 76 24 74" stroke={s} strokeWidth="0.9" strokeLinecap="round" opacity="0.22" />

      {/* Right botanical frame - leaf sprig */}
      <path d="M172 28C178 48 180 68 176 84" stroke={s} strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M174 36C178 30 174 26 172 30" stroke={s} strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M172 30C170 34 174 38 174 36" stroke={s} strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M176 48C180 42 176 38 174 42" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.28" />
      <path d="M174 42C172 46 176 50 176 48" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.28" />
      <path d="M178 60C182 54 178 50 176 54" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M176 54C174 58 178 62 178 60" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.25" />

      {/* Left magnolia - layered petals */}
      <path d="M28 92C24 82 26 72 32 68C38 74 36 86 34 90Z" stroke={t} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
      <path d="M30 88C28 80 30 74 32 70" stroke={t} strokeWidth="0.5" strokeLinecap="round" opacity="0.16" />
      <path d="M34 90C40 86 48 84 50 88C46 94 40 94 34 90Z" stroke={t} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.38" />
      <path d="M36 90C40 88 46 86 48 88" stroke={t} strokeWidth="0.5" strokeLinecap="round" opacity="0.14" />
      <path d="M32 96C36 100 38 108 34 110C28 106 28 98 32 96Z" stroke={t} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.36" />
      <path d="M26 92C20 94 16 96 16 90C22 86 26 88 26 92Z" stroke={t} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.38" />
      <circle cx="30" cy="92" r="3" stroke={t} strokeWidth="0.9" opacity="0.3" />
      <circle cx="28" cy="90" r="0.9" fill={t} opacity="0.25" />
      <circle cx="32" cy="90" r="0.9" fill={t} opacity="0.25" />
      <circle cx="30" cy="88" r="0.9" fill={t} opacity="0.2" />
      <circle cx="30" cy="94" r="0.8" fill={t} opacity="0.18" />

      {/* Right magnolia */}
      <path d="M168 90C172 80 170 70 164 66C158 72 160 84 162 88Z" stroke={t} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
      <path d="M166 86C168 78 166 72 164 68" stroke={t} strokeWidth="0.5" strokeLinecap="round" opacity="0.16" />
      <path d="M162 88C156 84 148 82 148 86C152 92 158 92 162 88Z" stroke={t} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.38" />
      <path d="M164 94C168 98 170 106 166 108C160 104 160 96 164 94Z" stroke={t} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.36" />
      <path d="M170 90C176 92 180 94 178 88C174 84 170 86 170 90Z" stroke={t} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.38" />
      <circle cx="166" cy="90" r="3" stroke={t} strokeWidth="0.9" opacity="0.3" />
      <circle cx="164" cy="88" r="0.9" fill={t} opacity="0.25" />
      <circle cx="168" cy="88" r="0.9" fill={t} opacity="0.25" />
      <circle cx="166" cy="86" r="0.9" fill={t} opacity="0.2" />

      {/* Connecting vine */}
      <path d="M38 106C58 102 78 106 100 104C122 102 142 106 162 102" stroke={c} strokeWidth="0.8" strokeLinecap="round" opacity="0.12" />
    </svg>
  );
}

export function CalmHeroArt({ className = "" }: { className?: string }) {
  const c = "#4A3F4B";
  const t = "#C4887A";
  const s = "#8BA888";
  return (
    <svg className={className} width="220" height="170" viewBox="0 0 220 170" fill="none" aria-hidden="true">
      {/* Hair - flowing texture lines */}
      <path d="M96 24C94 16 98 8 106 4C112 2 120 2 126 6" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.52" />
      <path d="M98 22C96 14 102 6 108 3C114 1 122 2 128 6" stroke={c} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M100 20C100 12 106 6 112 3C118 2 124 4 130 8" stroke={c} strokeWidth="1" strokeLinecap="round" opacity="0.32" />
      <path d="M102 20C104 12 110 6 116 4C122 3 128 6 132 10" stroke={c} strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
      {/* Loose hair strand */}
      <path d="M96 24C92 22 88 24 86 30C84 36 88 38 92 36" stroke={c} strokeWidth="1.1" strokeLinecap="round" opacity="0.28" />
      {/* Bun */}
      <path d="M126 6C130 0 138 0 140 6C142 12 138 16 132 14C126 12 124 8 126 6Z" stroke={c} strokeWidth="1.3" strokeLinecap="round" opacity="0.45" />
      <path d="M128 4C134 0 138 2 140 6" stroke={c} strokeWidth="0.7" strokeLinecap="round" opacity="0.22" />
      <path d="M130 10C134 6 138 8 136 14" stroke={c} strokeWidth="0.7" strokeLinecap="round" opacity="0.2" />
      {/* Face - forehead, nose, lips, chin */}
      <path d="M96 24C94 28 94 34 96 38C97 40 96 42 95 43" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.52" />
      <path d="M95 43C96 45 96 47 98 48" stroke={c} strokeWidth="1.4" strokeLinecap="round" opacity="0.48" />
      {/* Back of jaw */}
      <path d="M132 10C130 18 124 26 120 32C118 36 116 42 116 46" stroke={c} strokeWidth="1.3" strokeLinecap="round" opacity="0.42" />
      {/* Closed eyes - peaceful */}
      <path d="M102 30C104 28 106 30" stroke={c} strokeWidth="0.7" strokeLinecap="round" opacity="0.22" />
      {/* Body seated relaxed */}
      <path d="M98 48C94 52 86 58 80 62C76 68 74 76 76 84" stroke={c} strokeWidth="1.4" strokeLinecap="round" opacity="0.42" />
      <path d="M116 46C120 50 128 56 136 60C140 66 142 76 140 84" stroke={c} strokeWidth="1.4" strokeLinecap="round" opacity="0.42" />
      {/* Arms holding sleeping baby */}
      <path d="M80 62C78 68 78 74 82 80" stroke={c} strokeWidth="1.3" strokeLinecap="round" opacity="0.4" />
      <path d="M136 60C134 66 132 74 130 78" stroke={c} strokeWidth="1.3" strokeLinecap="round" opacity="0.4" />
      {/* Sleeping baby */}
      <ellipse cx="108" cy="72" rx="14" ry="9" stroke={c} strokeWidth="1.3" opacity="0.42" />
      <circle cx="98" cy="66" r="5.5" stroke={c} strokeWidth="1.2" opacity="0.4" />
      <path d="M96 67C97 68 99 68" stroke={c} strokeWidth="0.6" strokeLinecap="round" opacity="0.18" />
      <path d="M112 70C114 68 115 69 114 71" stroke={c} strokeWidth="0.8" strokeLinecap="round" opacity="0.28" />

      {/* Gentle aura circles */}
      <circle cx="108" cy="52" r="38" stroke={s} strokeWidth="0.8" opacity="0.1" strokeDasharray="4 6" />
      <circle cx="108" cy="52" r="52" stroke={s} strokeWidth="0.6" opacity="0.06" strokeDasharray="3 8" />

      {/* Left floating leaves */}
      <path d="M40 28C36 22 40 18 44 22" stroke={s} strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M44 22C48 26 44 30 40 28" stroke={s} strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M36 40C32 34 36 30 40 34" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M40 34C44 38 40 42 36 40" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M44 52C40 46 44 42 48 46" stroke={s} strokeWidth="0.9" strokeLinecap="round" opacity="0.22" />
      <path d="M48 46C52 50 48 54 44 52" stroke={s} strokeWidth="0.9" strokeLinecap="round" opacity="0.22" />
      {/* Right floating leaves */}
      <path d="M176 26C180 20 184 20 182 26" stroke={s} strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M182 26C180 32 176 30 176 26" stroke={s} strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M180 40C184 34 188 36 186 42" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M186 42C182 46 178 42 180 40" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M174 52C178 46 182 48 180 54" stroke={s} strokeWidth="0.9" strokeLinecap="round" opacity="0.22" />
      <path d="M180 54C176 58 172 54 174 52" stroke={s} strokeWidth="0.9" strokeLinecap="round" opacity="0.22" />

      {/* Left magnolia accent with petals */}
      <path d="M48 64C44 56 46 46 52 42C56 48 54 58 52 62Z" stroke={t} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" />
      <path d="M50 60C48 54 50 48 52 44" stroke={t} strokeWidth="0.5" strokeLinecap="round" opacity="0.15" />
      <path d="M52 62C58 58 64 56 66 60C62 66 56 66 52 62Z" stroke={t} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.32" />
      <path d="M46 66C42 68 36 70 36 64C40 60 44 62 46 66Z" stroke={t} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.32" />
      <circle cx="50" cy="62" r="2.5" stroke={t} strokeWidth="0.8" opacity="0.28" />
      <circle cx="48" cy="60" r="0.8" fill={t} opacity="0.22" />
      <circle cx="52" cy="60" r="0.8" fill={t} opacity="0.22" />
      <circle cx="50" cy="58" r="0.8" fill={t} opacity="0.18" />

      {/* Right magnolia accent */}
      <path d="M168 60C172 52 170 42 164 38C158 44 160 56 162 58Z" stroke={t} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" />
      <path d="M166 56C168 50 166 44 164 40" stroke={t} strokeWidth="0.5" strokeLinecap="round" opacity="0.15" />
      <path d="M162 58C156 54 150 54 150 58C154 64 160 62 162 58Z" stroke={t} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.32" />
      <path d="M170 62C174 64 178 66 176 60C172 58 168 60 170 62Z" stroke={t} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.32" />
      <circle cx="166" cy="58" r="2.5" stroke={t} strokeWidth="0.8" opacity="0.28" />
      <circle cx="164" cy="56" r="0.8" fill={t} opacity="0.22" />
      <circle cx="168" cy="56" r="0.8" fill={t} opacity="0.22" />

      {/* Ground line */}
      <path d="M56 104C76 100 96 102 108 100C120 98 140 100 160 104" stroke={c} strokeWidth="0.8" strokeLinecap="round" opacity="0.12" />
    </svg>
  );
}

export function ProfileHeroArt({ className = "" }: { className?: string }) {
  const c = "#4A3F4B";
  const t = "#C4887A";
  const s = "#8BA888";
  return (
    <svg className={className} width="200" height="180" viewBox="0 0 200 180" fill="none" aria-hidden="true">
      {/* Wreath circle */}
      <circle cx="100" cy="82" r="62" stroke={s} strokeWidth="1" opacity="0.18" />

      {/* Wreath leaves - left side */}
      <path d="M58 28C54 22 58 18 62 22" stroke={s} strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M62 22C66 26 62 30 58 28" stroke={s} strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M44 44C40 38 44 34 48 38" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M48 38C52 42 48 46 44 44" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M36 66C32 60 36 56 40 60" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M40 60C44 64 40 68 36 66" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M36 90C32 84 36 80 40 84" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M40 84C44 88 40 92 36 90" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M46 110C42 104 46 100 50 104" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M50 104C54 108 50 112 46 110" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M60 128C56 122 60 118 64 122" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M64 122C68 126 64 130 60 128" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      {/* Wreath leaves - right side */}
      <path d="M142 26C146 20 150 20 148 26" stroke={s} strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M148 26C146 32 142 30 142 26" stroke={s} strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M156 42C160 36 164 36 162 42" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M162 42C160 48 156 46 156 42" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M164 64C168 58 172 60 170 66" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M170 66C166 70 162 66 164 64" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M164 88C168 82 172 84 170 90" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M170 90C166 94 162 90 164 88" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M154 108C158 102 162 104 160 110" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M160 110C156 114 152 110 154 108" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M140 126C144 120 148 122 146 128" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M146 128C142 132 138 128 140 126" stroke={s} strokeWidth="1" strokeLinecap="round" opacity="0.25" />

      {/* Top-left magnolia on wreath - layered petals */}
      <path d="M68 22C64 14 66 4 72 2C76 8 74 18 72 22Z" stroke={t} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.38" />
      <path d="M70 20C68 14 70 8 72 4" stroke={t} strokeWidth="0.5" strokeLinecap="round" opacity="0.15" />
      <path d="M72 22C78 18 84 16 86 20C82 26 76 26 72 22Z" stroke={t} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" />
      <path d="M74 22C78 20 82 18 84 20" stroke={t} strokeWidth="0.5" strokeLinecap="round" opacity="0.14" />
      <path d="M72 26C74 30 76 36 72 38C68 34 68 28 72 26Z" stroke={t} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity="0.32" />
      <path d="M66 24C60 24 56 24 56 20C62 18 66 20 66 24Z" stroke={t} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" />
      <circle cx="70" cy="22" r="2.5" stroke={t} strokeWidth="0.8" opacity="0.3" />
      <circle cx="68" cy="20" r="0.8" fill={t} opacity="0.25" />
      <circle cx="72" cy="20" r="0.8" fill={t} opacity="0.25" />
      <circle cx="70" cy="18" r="0.8" fill={t} opacity="0.2" />
      <circle cx="70" cy="24" r="0.7" fill={t} opacity="0.18" />

      {/* Top-right magnolia */}
      <path d="M128 20C132 12 130 4 124 2C120 8 122 16 124 20Z" stroke={t} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.38" />
      <path d="M126 18C128 12 126 6 124 4" stroke={t} strokeWidth="0.5" strokeLinecap="round" opacity="0.15" />
      <path d="M124 20C118 16 112 16 112 20C116 26 122 24 124 20Z" stroke={t} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" />
      <path d="M130 22C134 24 138 24 136 18C132 16 128 20 130 22Z" stroke={t} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity="0.32" />
      <circle cx="126" cy="20" r="2.5" stroke={t} strokeWidth="0.8" opacity="0.3" />
      <circle cx="124" cy="18" r="0.8" fill={t} opacity="0.25" />
      <circle cx="128" cy="18" r="0.8" fill={t} opacity="0.25" />
      <circle cx="126" cy="16" r="0.8" fill={t} opacity="0.2" />

      {/* Bottom magnolias */}
      <path d="M62 132C58 126 60 118 66 116C70 122 68 130 66 132Z" stroke={t} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity="0.32" />
      <path d="M66 132C72 128 76 128 76 132C72 136 68 136 66 132Z" stroke={t} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
      <circle cx="66" cy="130" r="2" stroke={t} strokeWidth="0.7" opacity="0.25" />
      <circle cx="65" cy="128" r="0.7" fill={t} opacity="0.2" />
      <circle cx="67" cy="128" r="0.7" fill={t} opacity="0.2" />

      <path d="M138 134C142 128 140 120 134 118C130 124 132 132 134 134Z" stroke={t} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity="0.32" />
      <path d="M134 134C128 130 124 130 124 134C128 138 132 138 134 134Z" stroke={t} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
      <circle cx="134" cy="132" r="2" stroke={t} strokeWidth="0.7" opacity="0.25" />
      <circle cx="133" cy="130" r="0.7" fill={t} opacity="0.2" />
      <circle cx="135" cy="130" r="0.7" fill={t} opacity="0.2" />

      {/* Mother inside wreath */}
      {/* Hair flowing lines */}
      <path d="M88 48C86 42 90 34 96 32C100 30 106 30 110 34" stroke={c} strokeWidth="1.4" strokeLinecap="round" opacity="0.48" />
      <path d="M90 46C88 40 92 34 98 32C102 30 108 32 112 36" stroke={c} strokeWidth="1.1" strokeLinecap="round" opacity="0.35" />
      <path d="M92 44C92 38 96 34 100 32C106 30 110 34 114 38" stroke={c} strokeWidth="0.9" strokeLinecap="round" opacity="0.28" />
      {/* Bun */}
      <path d="M110 34C114 28 120 28 122 34C124 40 120 42 114 40C110 38 108 36 110 34Z" stroke={c} strokeWidth="1.2" strokeLinecap="round" opacity="0.42" />
      <path d="M112 32C116 28 120 30 122 34" stroke={c} strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />
      <path d="M114 38C116 34 120 36 118 40" stroke={c} strokeWidth="0.6" strokeLinecap="round" opacity="0.18" />
      {/* Face */}
      <path d="M88 48C86 52 86 56 88 60C89 62 88 63 87 64" stroke={c} strokeWidth="1.4" strokeLinecap="round" opacity="0.48" />
      <path d="M87 64C88 66 88 68 90 70" stroke={c} strokeWidth="1.3" strokeLinecap="round" opacity="0.42" />
      {/* Jaw */}
      <path d="M114 38C112 46 108 52 106 58C104 62 104 66 104 68" stroke={c} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      {/* Body */}
      <path d="M90 70C86 74 80 80 78 88C76 96 80 100 86 102" stroke={c} strokeWidth="1.3" strokeLinecap="round" opacity="0.4" />
      <path d="M104 68C108 72 114 78 116 86C118 94 114 100 108 102" stroke={c} strokeWidth="1.3" strokeLinecap="round" opacity="0.4" />
      {/* Arms */}
      <path d="M80 80C82 84 86 88 90 90" stroke={c} strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
      <path d="M114 78C112 82 108 86 104 88" stroke={c} strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
      {/* Baby */}
      <ellipse cx="97" cy="88" rx="10" ry="7" stroke={c} strokeWidth="1.2" opacity="0.4" />
      <circle cx="91" cy="84" r="4.5" stroke={c} strokeWidth="1.1" opacity="0.38" />
      <path d="M100 86C102 84 103 85 102 87" stroke={c} strokeWidth="0.7" strokeLinecap="round" opacity="0.28" />
    </svg>
  );
}
