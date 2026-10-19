type Props = {
  /** Rendered logo height in px — width follows the 923×312 intrinsic ratio. */
  height?: number;
  className?: string;
  /** Header instance is the LCP candidate — keep priority there. */
  priority?: boolean;
};

/**
 * Site logo — the owner's ORIGINAL artwork. public/logosvg.svg (923×312, two
 * embedded 2258×2258 rasters, 509 KB) is kept unchanged; since 2026-10-19,
 * with the owner's OK, the header serves copies rendered from it by Chrome at
 * the displayed size (public/logo-38/76/114.webp = 1×/2×/3× of 38 px, 5-20 KB)
 * instead of the 372 KB SVG on every page. Regenerate them if the SVG changes
 * (scratchpad recipe: headless Chrome screenshot at 923×312, then resize).
 * Must not be replaced with a coded mark.
 */
export function BrandMark({ height = 38, className, priority = true }: Props) {
  const width = Math.round((height * 923) / 312);
  return (
    // Plain <img>: three pre-sized static files, no optimizer round trip.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo-76.webp"
      srcSet="/logo-38.webp 1x, /logo-76.webp 2x, /logo-114.webp 3x"
      alt="أسعار الذهب العربية · Gold Prices Arabia"
      width={width}
      height={height}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className={className}
    />
  );
}
