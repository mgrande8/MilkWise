"use client";

// Lightweight decorative SVG components using the app color palette
// sage: #8BA888, terracotta: #C4887A, blush: #F5E6DC

export function LeafAccent({ className = "", color = "#8BA888" }: { className?: string; color?: string }) {
  return (
    <svg
      className={`inline-block ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 20C7 20 7.5 14 12 9C16.5 4 22 3 22 3C22 3 22.5 9 18 14C13.5 19 7 20 7 20Z"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 20C7 20 9.5 15 14.5 10.5"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M2 21L7 20"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}

export function BranchDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center py-4 ${className}`} aria-hidden="true">
      <svg
        width="200"
        height="20"
        viewBox="0 0 200 20"
        fill="none"
      >
        {/* Left branch */}
        <path
          d="M20 10C40 10 50 6 70 8C80 9 85 10 100 10"
          stroke="#8BA888"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.5"
        />
        {/* Right branch */}
        <path
          d="M100 10C115 10 120 9 130 8C150 6 160 10 180 10"
          stroke="#8BA888"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.5"
        />
        {/* Left leaves */}
        <path
          d="M45 8C42 4 46 2 48 5"
          stroke="#8BA888"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M60 7C58 3 62 1.5 63 4.5"
          stroke="#B8D4B5"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M75 8.5C73 5 77 3.5 78 6"
          stroke="#8BA888"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.35"
        />
        {/* Center dot */}
        <circle cx="100" cy="10" r="2" fill="#C4887A" opacity="0.4" />
        {/* Right leaves */}
        <path
          d="M125 8.5C127 5 123 3.5 122 6"
          stroke="#8BA888"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.35"
        />
        <path
          d="M140 7C142 3 138 1.5 137 4.5"
          stroke="#B8D4B5"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M155 8C158 4 154 2 152 5"
          stroke="#8BA888"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>
    </div>
  );
}

export function FloralCorner({ className = "", position = "top-right" }: { className?: string; position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" }) {
  const transforms: Record<string, string> = {
    "top-right": "",
    "top-left": "scale(-1, 1)",
    "bottom-right": "scale(1, -1)",
    "bottom-left": "scale(-1, -1)",
  };

  return (
    <svg
      className={`absolute ${
        position === "top-right" ? "top-2 right-2" :
        position === "top-left" ? "top-2 left-2" :
        position === "bottom-right" ? "bottom-2 right-2" :
        "bottom-2 left-2"
      } ${className}`}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      style={{ transform: transforms[position] }}
    >
      {/* Main curve */}
      <path
        d="M38 2C38 2 30 4 24 10C18 16 16 24 16 24"
        stroke="#C4887A"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.3"
      />
      {/* Small leaf 1 */}
      <path
        d="M30 7C28 4 32 2 33 5"
        stroke="#C4887A"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.35"
      />
      {/* Small leaf 2 */}
      <path
        d="M24 13C21 11 24 8 26 10.5"
        stroke="#8BA888"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.3"
      />
      {/* Small dot */}
      <circle cx="20" cy="18" r="1" fill="#C4887A" opacity="0.25" />
    </svg>
  );
}

export function BlobShape({ className = "", color = "#8BA888" }: { className?: string; color?: string }) {
  return (
    <svg
      className={`absolute ${className}`}
      width="300"
      height="300"
      viewBox="0 0 300 300"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M150 30C200 30 260 60 270 120C280 180 240 220 200 250C160 280 100 280 60 250C20 220 10 170 30 120C50 70 100 30 150 30Z"
        fill={color}
        opacity="0.06"
      />
    </svg>
  );
}
