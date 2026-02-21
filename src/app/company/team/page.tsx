import type { Metadata } from "next";

import { SITE } from "@/config/site";

export const metadata: Metadata = {
	title: "Our Team",
	description:
		"Meet the Piptan Organization team – experienced investment advisors and consultants dedicated to your financial success.",
	openGraph: {
		title: "Our Team | Piptan Organization",
		description: "Meet our investment advisory and consulting team.",
		url: `${SITE.url}/company/team`,
	},
	alternates: { canonical: `${SITE.url}/company/team` },
};

export default function TeamPage() {
	return (
		<main id="main-content" role="main">
			<h1 className="sr-only">Our Team – Piptan Organization</h1>
			<div aria-hidden>TeamPage</div>
		</main>
	);
}
