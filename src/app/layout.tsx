import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "@/styles/globals.css";

import Link from "next/link";
import Script from "next/script";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Toaster } from "@/components/ui/sonner";

import { SITE } from "@/config/site";
import { cn } from "@/lib/utils";

const inter = Inter_Tight({ subsets: ["latin"], variable: "--font-sans" });

const baseUrl = SITE.url;

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	title: {
		default: `${SITE.name} | Investment Advisory & Consulting`,
		template: `%s | ${SITE.name}`,
	},
	description: SITE.description,
	keywords: [
		"investment advisory",
		"investment consulting",
		"portfolio management",
		"risk management",
		"financial advisory",
		"Piptan",
	],
	authors: [{ name: SITE.name, url: baseUrl }],
	creator: SITE.name,
	openGraph: {
		type: "website",
		locale: "en_US",
		url: baseUrl,
		siteName: SITE.name,
		title: `${SITE.name} | Investment Advisory & Consulting`,
		description: SITE.description,
		images: [
			{
				url: SITE.ogImagePath.startsWith("http")
					? SITE.ogImagePath
					: `${baseUrl}${SITE.ogImageFallback}`,
				width: 1200,
				height: 630,
				alt: SITE.name,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: `${SITE.name} | Investment Advisory & Consulting`,
		description: SITE.description,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
	alternates: {
		canonical: baseUrl,
	},
	verification: {
		// Add when you have them: google: "google-site-verification-code", yandex: "yandex-verification-code",
	},
};

const organizationJsonLd = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: SITE.name,
	description: SITE.description,
	url: baseUrl,
	telephone: "+971-56-401-4000",
	address: {
		"@type": "PostalAddress",
		streetAddress: "280 Granite Run Drive Suite Hobert",
		addressLocality: "LA",
		postalCode: "90010",
		addressCountry: "US",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn(inter.className, "min-h-screen antialiased")}>
				{/* JSON-LD for Organization - required pattern for structured data */}
				<Script type="application/ld+json">
					{JSON.stringify(organizationJsonLd)}
				</Script>
				<Link
					className="sr-only focus:not-sr-only focus:absolute focus:z-100 focus:bg-primary focus:p-4 focus:text-primary-foreground"
					href="#main-content"
				>
					Skip to main content
				</Link>
				<Navbar />
				{children}
				<Footer />
				<Toaster position="bottom-right" richColors />
			</body>
		</html>
	);
}
