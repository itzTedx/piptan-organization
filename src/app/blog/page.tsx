import type { Metadata } from "next";

import { SITE } from "@/config/site";

export const metadata: Metadata = {
	title: "Blog",
	description:
		"Insights and articles on investment, portfolio management, and financial advisory from Piptan Organization.",
	openGraph: {
		title: "Blog | Investment Insights",
		description: "Insights and articles on investment and financial advisory.",
		url: `${SITE.url}/blog`,
	},
	alternates: { canonical: `${SITE.url}/blog` },
};

export default function BlogPage() {
	return (
		<main id="main-content" role="main">
			<h1 className="sr-only">Blog – Piptan Organization</h1>
			<div aria-hidden>BlogPage</div>
		</main>
	);
}
