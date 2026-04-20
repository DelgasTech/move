import Image from "next/image";

interface LogoProps {
  height?: number;
  className?: string;
}

export default function Logo({ height = 40, className = "" }: LogoProps) {
  return (
    <Image
      src="/images/Academia-move.svg"
      alt="Move Academia"
      height={height}
      width={Math.round(height * 3.4)}
      className={className}
      priority
    />
  );
}