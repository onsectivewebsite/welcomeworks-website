import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  ratio?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  overlay?: boolean;
  minHeight?: number;
};

export default function Photo({
  src,
  alt,
  ratio = "4 / 3",
  priority = false,
  sizes = "(max-width: 900px) 100vw, 50vw",
  className = "",
  overlay = false,
  minHeight,
}: Props) {
  return (
    <div
      className={`photo${overlay ? " photo-overlay" : ""} ${className}`.trim()}
      style={{ aspectRatio: ratio, minHeight }}
    >
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={{ objectFit: "cover" }} />
    </div>
  );
}
