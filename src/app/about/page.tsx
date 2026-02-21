import type { Metadata } from "next";

import { SITE } from "@/config/site";

export const metadata: Metadata = {
	title: "About Us",
	description:
		"Learn about Piptan Organization – experts in investment consulting, strategy development, and risk management with years of experience.",
	openGraph: {
		title: "About Us | Investment Advisory",
		description:
			"Experts in investment consulting, strategy development, and risk management.",
		url: `${SITE.url}/about`,
	},
	alternates: { canonical: `${SITE.url}/about` },
};

export default function AboutPage() {
	return (
		<main id="main-content" role="main">
			<h1 className="sr-only">About Piptan Organization</h1>
			<div aria-hidden>AboutPage</div>
		</main>
	);
}
