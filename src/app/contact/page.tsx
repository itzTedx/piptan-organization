import type { Metadata } from "next";

import { SITE } from "@/config/site";

export const metadata: Metadata = {
	title: "Contact",
	description:
		"Get in touch with Piptan Organization. Contact our investment advisory team for consultations and inquiries.",
	openGraph: {
		title: "Contact | Piptan Organization",
		description: "Contact our investment advisory team for consultations.",
		url: `${SITE.url}/contact`,
	},
	alternates: { canonical: `${SITE.url}/contact` },
};

export default function ContactPage() {
	return (
		<main id="main-content" role="main">
			<h1 className="sr-only">Contact Piptan Organization</h1>
			<div aria-hidden>ContactPage</div>
		</main>
	);
}
