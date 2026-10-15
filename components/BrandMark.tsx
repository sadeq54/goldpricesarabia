import Image from "next/image";

type Props = {
  /** Rendered logo height in px — width follows the 923×312 intrinsic ratio. */
  height?: number;
  className?: string;
  /** Header instance is the LCP candidate — keep priority there. */
  priority?: boolean;
};

/**
 * Site logo — the ORIGINAL brand artwork (public/logosvg.svg, 923×312).
 * This asset is the owner's logo and must not be replaced with a coded mark.
 * It embeds two 2258×2258 rasters, stored since 2026-10-15 as lossless WebP
 * (509 KB, was 1.2 MB as PNG; renders pixel-identical in Chrome at 1× and 3×).
 * Do not reference it more than once per page.
 */
export function BrandMark({ height = 38, className, priority = true }: Props) {
  const width = Math.round((height * 923) / 312);
  return (
    <Image
      src="/logosvg.svg"
      alt="أسعار الذهب العربية · Gold Prices Arabia"
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
}
