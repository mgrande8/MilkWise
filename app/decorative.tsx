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
// Large, prominent mother-and-baby artwork for each screen tab

export function HomeHeroArt({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="220" height="180" viewBox="0 0 220 180" fill="none" aria-hidden="true">
      {/* Mother figure - standing, cradling baby, flowing hair */}
      <path d="M100 18C100 10 106 4 114 4C122 4 126 10 126 18" stroke="#4A3F4B" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
      <path d="M118 4C120 2 124 2 128 6" stroke="#4A3F4B" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      {/* Hair bun */}
      <circle cx="122" cy="6" r="7" stroke="#4A3F4B" strokeWidth="1.3" opacity="0.4" />
      <path d="M116 6C118 3 122 2 126 4" stroke="#4A3F4B" strokeWidth="0.7" strokeLinecap="round" opacity="0.2" />
      {/* Face looking down at baby */}
      <path d="M102 18C102 28 108 34 114 36" stroke="#4A3F4B" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
      <path d="M124 20C124 28 120 34 114 36" stroke="#4A3F4B" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
      {/* Neck + shoulders flowing into body */}
      <path d="M108 36C104 40 96 46 88 52C82 56 78 64 78 74" stroke="#4A3F4B" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
      <path d="M120 36C124 40 132 46 138 52C142 56 144 64 142 76" stroke="#4A3F4B" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
      {/* Arms cradling baby */}
      <path d="M88 52C84 58 80 66 82 74C84 82 92 86 100 84" stroke="#4A3F4B" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
      <path d="M138 52C140 58 142 66 138 76C136 82 128 86 120 84" stroke="#4A3F4B" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
      {/* Baby - curled in arms */}
      <path d="M100 66C102 60 108 56 114 56C120 56 124 60 124 66" stroke="#4A3F4B" strokeWidth="1.4" strokeLinecap="round" opacity="0.45" />
      <path d="M100 66C100 74 106 80 112 80C118 80 124 74 124 66" stroke="#4A3F4B" strokeWidth="1.4" strokeLinecap="round" opacity="0.45" />
      {/* Baby head */}
      <circle cx="104" cy="60" r="6" stroke="#4A3F4B" strokeWidth="1.3" opacity="0.4" />
      {/* Baby tiny hand reaching up */}
      <path d="M116 64C118 62 120 63 119 65" stroke="#4A3F4B" strokeWidth="0.9" strokeLinecap="round" opacity="0.35" />
      {/* Flowing dress/body */}
      <path d="M78 74C76 90 80 106 86 118C90 126 96 130 110 132" stroke="#4A3F4B" strokeWidth="1.3" strokeLinecap="round" opacity="0.35" />
      <path d="M142 76C144 90 140 106 134 118C130 126 124 130 110 132" stroke="#4A3F4B" strokeWidth="1.3" strokeLinecap="round" opacity="0.35" />
      {/* Left magnolia cluster */}
      <path d="M32 100C28 92 34 86 38 92C34 96 30 96 32 100Z" stroke="#C4887A" strokeWidth="1.3" strokeLinecap="round" opacity="0.4" />
      <path d="M38 92C42 86 48 86 46 92C42 96 38 94 38 92Z" stroke="#C4887A" strokeWidth="1.3" strokeLinecap="round" opacity="0.35" />
      <path d="M34 104C30 98 34 94 38 98C36 102 32 102 34 104Z" stroke="#C4887A" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      <circle cx="37" cy="95" r="2" fill="#C4887A" opacity="0.3" />
      {/* Left vine */}
      <path d="M44 96C54 100 64 96 74 94" stroke="#4A3F4B" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
      <path d="M54 98C52 92 56 90 58 94" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M58 94C60 98 56 100 54 98" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      {/* Right magnolia cluster */}
      <path d="M178 96C182 88 188 86 190 92C186 96 180 96 178 96Z" stroke="#C4887A" strokeWidth="1.3" strokeLinecap="round" opacity="0.4" />
      <path d="M190 92C194 86 198 88 196 94C192 96 188 94 190 92Z" stroke="#C4887A" strokeWidth="1.3" strokeLinecap="round" opacity="0.35" />
      <circle cx="189" cy="93" r="2" fill="#C4887A" opacity="0.3" />
      {/* Right vine */}
      <path d="M178 96C168 100 158 96 148 94" stroke="#4A3F4B" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
      <path d="M164 98C166 92 162 90 160 94" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M160 94C158 98 162 100 164 98" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      {/* Bottom connecting vine with leaves */}
      <path d="M50 140C70 136 90 138 110 136C130 134 150 136 170 140" stroke="#4A3F4B" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
      <path d="M72 138C70 132 74 130 76 134" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M76 134C78 138 74 140 72 138" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M148 136C146 130 150 128 152 132" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M152 132C154 136 150 138 148 136" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <circle cx="110" cy="135" r="2" stroke="#C4887A" strokeWidth="0.8" opacity="0.3" />
    </svg>
  );
}

export function LearnHeroArt({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="220" height="170" viewBox="0 0 220 170" fill="none" aria-hidden="true">
      {/* Mother seated cross-legged, reading to baby */}
      {/* Head with bun */}
      <path d="M102 22C102 14 108 8 116 8C124 8 128 14 128 22" stroke="#4A3F4B" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <circle cx="124" cy="10" r="6" stroke="#4A3F4B" strokeWidth="1.2" opacity="0.4" />
      {/* Face looking down at book */}
      <path d="M104 22C104 30 110 36 116 38" stroke="#4A3F4B" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M126 24C126 30 122 36 116 38" stroke="#4A3F4B" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      {/* Shoulders and body - seated */}
      <path d="M110 38C104 42 96 48 88 54C82 60 80 68 82 76" stroke="#4A3F4B" strokeWidth="1.4" strokeLinecap="round" opacity="0.4" />
      <path d="M122 38C128 42 134 48 140 54C144 60 146 68 142 76" stroke="#4A3F4B" strokeWidth="1.4" strokeLinecap="round" opacity="0.4" />
      {/* Arms - one holding book, one holding baby */}
      <path d="M88 54C86 60 88 66 92 70" stroke="#4A3F4B" strokeWidth="1.3" strokeLinecap="round" opacity="0.4" />
      <path d="M140 54C138 60 134 66 130 68" stroke="#4A3F4B" strokeWidth="1.3" strokeLinecap="round" opacity="0.4" />
      {/* Baby in lap */}
      <ellipse cx="112" cy="68" rx="12" ry="8" stroke="#4A3F4B" strokeWidth="1.3" opacity="0.4" />
      <circle cx="104" cy="62" r="5" stroke="#4A3F4B" strokeWidth="1.2" opacity="0.4" />
      {/* Open book */}
      <path d="M126 58C130 56 136 54 140 56" stroke="#4A3F4B" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M126 58C126 62 128 66 132 68" stroke="#4A3F4B" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
      <path d="M140 56C140 60 138 64 132 68" stroke="#4A3F4B" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
      {/* Book pages */}
      <path d="M132 58C132 62 132 66 132 68" stroke="#4A3F4B" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
      <path d="M128 60L130 60" stroke="#4A3F4B" strokeWidth="0.5" opacity="0.15" />
      <path d="M128 63L131 63" stroke="#4A3F4B" strokeWidth="0.5" opacity="0.15" />
      <path d="M134 60L137 60" stroke="#4A3F4B" strokeWidth="0.5" opacity="0.15" />
      <path d="M134 63L136 63" stroke="#4A3F4B" strokeWidth="0.5" opacity="0.15" />
      {/* Crossed legs */}
      <path d="M82 76C86 82 92 86 100 88C108 90 116 88 120 84" stroke="#4A3F4B" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      <path d="M142 76C138 82 132 86 124 88C116 90 108 88 104 84" stroke="#4A3F4B" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      {/* Decorative leaves around */}
      <path d="M46 36C42 28 48 24 52 30" stroke="#8BA888" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
      <path d="M52 30C56 36 50 40 46 36" stroke="#8BA888" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
      <path d="M56 44C52 38 56 34 60 38" stroke="#8BA888" strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M60 38C64 42 58 46 56 44" stroke="#8BA888" strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M168 32C172 24 178 24 176 32" stroke="#8BA888" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
      <path d="M176 32C174 38 168 38 168 32" stroke="#8BA888" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
      <path d="M162 42C166 36 172 36 170 42" stroke="#8BA888" strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M170 42C168 48 162 46 162 42" stroke="#8BA888" strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      {/* Small magnolia flowers */}
      <path d="M42 52C38 46 42 42 46 46C44 50 40 50 42 52Z" stroke="#C4887A" strokeWidth="1.1" strokeLinecap="round" opacity="0.35" />
      <circle cx="43" cy="48" r="1.5" fill="#C4887A" opacity="0.25" />
      <path d="M174 50C178 44 182 44 180 50C176 52 172 50 174 50Z" stroke="#C4887A" strokeWidth="1.1" strokeLinecap="round" opacity="0.35" />
      <circle cx="177" cy="48" r="1.5" fill="#C4887A" opacity="0.25" />
      {/* Bottom vine */}
      <path d="M30 110C60 106 90 108 110 106C130 104 160 108 190 110" stroke="#4A3F4B" strokeWidth="0.9" strokeLinecap="round" opacity="0.15" />
      <path d="M80 108C78 102 82 100 84 104" stroke="#8BA888" strokeWidth="0.9" strokeLinecap="round" opacity="0.2" />
      <path d="M140 106C138 100 142 98 144 102" stroke="#8BA888" strokeWidth="0.9" strokeLinecap="round" opacity="0.2" />
      <circle cx="110" cy="105" r="1.5" stroke="#C4887A" strokeWidth="0.7" opacity="0.2" />
    </svg>
  );
}

export function SearchHeroArt({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="200" height="170" viewBox="0 0 200 170" fill="none" aria-hidden="true">
      {/* Mother holding baby close - protective embrace */}
      {/* Hair flowing */}
      <path d="M88 24C88 14 96 6 106 6C116 6 120 12 120 20" stroke="#4A3F4B" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M88 24C84 20 80 22 78 28C76 34 80 36 84 34" stroke="#4A3F4B" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
      <circle cx="116" cy="10" r="6" stroke="#4A3F4B" strokeWidth="1.2" opacity="0.4" />
      {/* Face - looking down gently */}
      <path d="M90 24C90 32 96 38 104 40" stroke="#4A3F4B" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M118 22C118 30 114 38 104 40" stroke="#4A3F4B" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      {/* Shoulders */}
      <path d="M96 40C92 44 84 50 76 56" stroke="#4A3F4B" strokeWidth="1.4" strokeLinecap="round" opacity="0.45" />
      <path d="M112 40C116 44 124 50 130 56" stroke="#4A3F4B" strokeWidth="1.4" strokeLinecap="round" opacity="0.45" />
      {/* Arms wrapping baby */}
      <path d="M76 56C72 62 70 72 74 80C78 86 86 88 94 86" stroke="#4A3F4B" strokeWidth="1.4" strokeLinecap="round" opacity="0.45" />
      <path d="M130 56C132 62 134 72 130 80C126 86 118 88 110 86" stroke="#4A3F4B" strokeWidth="1.4" strokeLinecap="round" opacity="0.45" />
      {/* Baby curled close to chest */}
      <path d="M92 64C94 58 100 54 106 56C112 58 114 64 112 70" stroke="#4A3F4B" strokeWidth="1.3" strokeLinecap="round" opacity="0.4" />
      <path d="M92 64C90 70 92 76 98 78C104 80 110 76 112 70" stroke="#4A3F4B" strokeWidth="1.3" strokeLinecap="round" opacity="0.4" />
      {/* Baby head */}
      <circle cx="96" cy="60" r="5.5" stroke="#4A3F4B" strokeWidth="1.2" opacity="0.4" />
      {/* Heart shape in negative space above */}
      <path d="M100 46C98 42 94 40 92 42C90 44 92 48 100 52" stroke="#C4887A" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M100 46C102 42 106 40 108 42C110 44 108 48 100 52" stroke="#C4887A" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      {/* Botanical frame - left */}
      <path d="M28 40C24 32 30 26 34 32" stroke="#8BA888" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
      <path d="M34 32C38 38 32 42 28 40" stroke="#8BA888" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
      <path d="M32 50C28 44 32 40 36 44" stroke="#8BA888" strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M36 44C40 48 36 52 32 50" stroke="#8BA888" strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M36 58C32 52 36 48 40 52" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M40 52C44 56 40 60 36 58" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      {/* Botanical frame - right */}
      <path d="M170 38C174 30 180 30 178 38" stroke="#8BA888" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
      <path d="M178 38C176 44 170 42 170 38" stroke="#8BA888" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
      <path d="M166 48C170 42 176 42 174 48" stroke="#8BA888" strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M174 48C172 54 166 52 166 48" stroke="#8BA888" strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M162 58C166 52 172 52 168 58" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M168 58C166 62 162 60 162 58" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      {/* Magnolia flowers */}
      <path d="M30 66C26 60 30 56 34 60C32 64 28 64 30 66Z" stroke="#C4887A" strokeWidth="1.1" strokeLinecap="round" opacity="0.35" />
      <circle cx="31" cy="62" r="1.5" fill="#C4887A" opacity="0.25" />
      <path d="M168 66C172 60 168 56 164 60C166 64 170 64 168 66Z" stroke="#C4887A" strokeWidth="1.1" strokeLinecap="round" opacity="0.35" />
      <circle cx="167" cy="62" r="1.5" fill="#C4887A" opacity="0.25" />
      {/* Gentle vine connecting sides */}
      <path d="M38 80C58 76 78 80 100 78C122 76 142 80 162 76" stroke="#4A3F4B" strokeWidth="0.8" strokeLinecap="round" opacity="0.12" />
    </svg>
  );
}

export function CalmHeroArt({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="220" height="170" viewBox="0 0 220 170" fill="none" aria-hidden="true">
      {/* Mother in serene seated pose with sleeping baby */}
      {/* Head with flowing hair */}
      <path d="M102 24C102 14 108 6 118 6C126 6 130 12 130 20" stroke="#4A3F4B" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M102 24C98 22 94 24 92 30C90 36 94 38 98 36" stroke="#4A3F4B" strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <circle cx="126" cy="8" r="6" stroke="#4A3F4B" strokeWidth="1.2" opacity="0.4" />
      {/* Peaceful face - eyes gently closed */}
      <path d="M104 24C104 32 110 38 118 40" stroke="#4A3F4B" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M128 22C128 30 124 38 118 40" stroke="#4A3F4B" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      {/* Closed eyes - peaceful */}
      <path d="M108 28C110 26 112 28" stroke="#4A3F4B" strokeWidth="0.7" strokeLinecap="round" opacity="0.25" />
      <path d="M120 28C122 26 124 28" stroke="#4A3F4B" strokeWidth="0.7" strokeLinecap="round" opacity="0.25" />
      {/* Body - relaxed seated */}
      <path d="M112 40C106 44 96 50 88 56C82 62 80 72 82 80" stroke="#4A3F4B" strokeWidth="1.4" strokeLinecap="round" opacity="0.4" />
      <path d="M124 40C130 44 138 50 144 56C148 62 150 72 146 80" stroke="#4A3F4B" strokeWidth="1.4" strokeLinecap="round" opacity="0.4" />
      {/* Arms gently holding sleeping baby */}
      <path d="M88 56C86 62 86 68 90 74" stroke="#4A3F4B" strokeWidth="1.3" strokeLinecap="round" opacity="0.4" />
      <path d="M144 56C142 62 140 68 136 72" stroke="#4A3F4B" strokeWidth="1.3" strokeLinecap="round" opacity="0.4" />
      {/* Sleeping baby */}
      <ellipse cx="114" cy="66" rx="14" ry="9" stroke="#4A3F4B" strokeWidth="1.3" opacity="0.4" />
      <circle cx="104" cy="60" r="5" stroke="#4A3F4B" strokeWidth="1.2" opacity="0.4" />
      {/* Baby sleeping expression (tiny curved line) */}
      <path d="M102 61C103 62 105 62" stroke="#4A3F4B" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />
      {/* Gentle aura/circle behind */}
      <circle cx="114" cy="48" r="36" stroke="#8BA888" strokeWidth="0.8" opacity="0.12" strokeDasharray="4 6" />
      <circle cx="114" cy="48" r="48" stroke="#8BA888" strokeWidth="0.6" opacity="0.08" strokeDasharray="3 8" />
      {/* Floating leaves around - calm atmosphere */}
      <path d="M46 30C42 24 46 20 50 24" stroke="#8BA888" strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M50 24C54 28 50 32 46 30" stroke="#8BA888" strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M40 44C36 38 40 34 44 38" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M44 38C48 42 44 46 40 44" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M172 28C176 22 180 22 178 28" stroke="#8BA888" strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M178 28C176 34 172 32 172 28" stroke="#8BA888" strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M178 42C182 36 186 38 184 44" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M184 44C180 48 176 44 178 42" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      {/* Small magnolia accents */}
      <path d="M50 56C46 50 50 46 54 50C52 54 48 54 50 56Z" stroke="#C4887A" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <circle cx="51" cy="52" r="1.5" fill="#C4887A" opacity="0.2" />
      <path d="M170 54C174 48 170 44 166 48C168 52 172 52 170 54Z" stroke="#C4887A" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <circle cx="169" cy="50" r="1.5" fill="#C4887A" opacity="0.2" />
      {/* Ground line with gentle curve */}
      <path d="M60 100C80 96 100 98 114 96C128 94 148 96 160 100" stroke="#4A3F4B" strokeWidth="0.8" strokeLinecap="round" opacity="0.12" />
    </svg>
  );
}

export function ProfileHeroArt({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="200" height="180" viewBox="0 0 200 180" fill="none" aria-hidden="true">
      {/* Circular wreath frame */}
      <circle cx="100" cy="80" r="60" stroke="#8BA888" strokeWidth="1" opacity="0.2" />
      {/* Wreath leaves around the circle */}
      <path d="M60 30C56 24 60 20 64 24" stroke="#8BA888" strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M64 24C68 28 64 32 60 30" stroke="#8BA888" strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M44 46C40 40 44 36 48 40" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M48 40C52 44 48 48 44 46" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M36 68C32 62 36 58 40 62" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M40 62C44 66 40 70 36 68" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M38 92C34 86 38 82 42 86" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M42 86C46 90 42 94 38 92" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M48 112C44 106 48 102 52 106" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M52 106C56 110 52 114 48 112" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M140 28C144 22 148 22 146 28" stroke="#8BA888" strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M146 28C144 34 140 32 140 28" stroke="#8BA888" strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M156 44C160 38 164 38 162 44" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M162 44C160 50 156 48 156 44" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M164 68C168 62 172 64 170 70" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M170 70C166 74 162 70 164 68" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M162 92C166 86 170 88 168 94" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M168 94C164 98 160 94 162 92" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M152 112C156 106 160 108 158 114" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M158 114C154 118 150 114 152 112" stroke="#8BA888" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      {/* Small flowers on wreath */}
      <path d="M72 24C68 18 72 14 76 18C74 22 70 22 72 24Z" stroke="#C4887A" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <circle cx="73" cy="20" r="1.5" fill="#C4887A" opacity="0.2" />
      <path d="M128 22C132 16 136 18 134 24C130 24 126 22 128 22Z" stroke="#C4887A" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <circle cx="131" cy="20" r="1.5" fill="#C4887A" opacity="0.2" />
      <path d="M62 126C58 120 62 118 66 122C64 126 60 126 62 126Z" stroke="#C4887A" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <circle cx="63" cy="122" r="1.5" fill="#C4887A" opacity="0.2" />
      <path d="M138 128C142 122 146 124 144 130C140 130 136 128 138 128Z" stroke="#C4887A" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <circle cx="141" cy="126" r="1.5" fill="#C4887A" opacity="0.2" />
      {/* Mother and baby inside wreath */}
      {/* Mother head */}
      <path d="M92 46C92 38 96 34 102 34C108 34 112 38 112 46" stroke="#4A3F4B" strokeWidth="1.4" strokeLinecap="round" opacity="0.45" />
      <circle cx="108" cy="36" r="5" stroke="#4A3F4B" strokeWidth="1.1" opacity="0.35" />
      {/* Face */}
      <path d="M94 46C94 52 98 56 102 58" stroke="#4A3F4B" strokeWidth="1.4" strokeLinecap="round" opacity="0.45" />
      <path d="M110 48C110 52 108 56 102 58" stroke="#4A3F4B" strokeWidth="1.4" strokeLinecap="round" opacity="0.45" />
      {/* Body */}
      <path d="M96 58C92 62 86 68 84 76C82 84 86 88 92 90" stroke="#4A3F4B" strokeWidth="1.3" strokeLinecap="round" opacity="0.4" />
      <path d="M108 58C112 62 118 68 120 76C122 84 118 88 112 90" stroke="#4A3F4B" strokeWidth="1.3" strokeLinecap="round" opacity="0.4" />
      {/* Arms holding baby */}
      <path d="M86 68C88 72 92 76 96 78" stroke="#4A3F4B" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
      <path d="M118 68C116 72 112 76 108 78" stroke="#4A3F4B" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
      {/* Baby */}
      <ellipse cx="102" cy="76" rx="10" ry="7" stroke="#4A3F4B" strokeWidth="1.2" opacity="0.4" />
      <circle cx="96" cy="72" r="4" stroke="#4A3F4B" strokeWidth="1.1" opacity="0.35" />
    </svg>
  );
}
