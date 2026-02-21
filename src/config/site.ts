/**
 * Site-wide config for SEO, Open Graph, and canonical URLs.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://piptan.com).
 */
export const SITE = {
	name: "Piptan Organization",
	description:
		"Leading providers of investment advisory solutions. We provide advice and guidance to clients regarding their investments and manage their investment portfolios.",
	/** Base URL for canonical and OG; use env in production. */
	url:
		process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL
			? `https://${process.env.VERCEL_URL}`
			: "https://piptan.com",
	/** Default OG image path (absolute URL built in metadata). */
	ogImagePath: "/images/og-default.png",
	/** Fallback if og-default.png is missing: use first hero slide. */
	ogImageFallback: "/images/advisor.webp",
} as const;
