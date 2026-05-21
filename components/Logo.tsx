"use client";

interface LogoProps {
  className?: string;
  height?: number;
}

export default function Logo({ className = "", height = 36 }: LogoProps) {
  const w = (height / 70) * 280;
  return (
    <svg
      width={w}
      height={height}
      viewBox="0 0 280 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="SprintPMC"
    >
      {/* Badge parallelogram: indigo background */}
      <path
        d="M8 8 H148 L162 35 L148 62 H8 L22 35 Z"
        fill="#4f46e5"
      />
      {/* Highlight strip top */}
      <path
        d="M8 8 H148 L155 21 H15 Z"
        fill="#6366f1"
        opacity="0.4"
      />
      {/* SPRINT text */}
      <text
        x="85"
        y="41"
        textAnchor="middle"
        fill="white"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="900"
        fontSize="22"
        letterSpacing="3"
      >
        SPRINT
      </text>
      {/* pmc text — cyan accent */}
      <text
        x="215"
        y="56"
        textAnchor="middle"
        fill="#22d3ee"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
        fontStyle="italic"
        fontSize="46"
        letterSpacing="-1"
      >
        pmc
      </text>
    </svg>
  );
}
