import type { Metadata } from "next";

import { Header } from "@/components/layout/header";

import { SITE } from "@/config/site";
import { Clients } from "@/modules/views/clients";
import { Plans } from "@/modules/views/plans";
import { ServicesAboutSection } from "@/modules/views/services-about-section";
import { ServicesConsultingSection } from "@/modules/views/services-consulting-section";
import { Solutions } from "@/modules/views/solutions";

export const metadata: Metadata = {
	title: "Services",
	description:
		"Investment consulting, portfolio management, risk management, fiduciary consulting, and policy development. Explore our advisory solutions.",
	openGraph: {
		title: "Services | Investment Advisory & Consulting",
		description:
			"Investment consulting, portfolio management, risk management, and fiduciary advisory solutions.",
		url: `${SITE.url}/services`,
	},
	alternates: { canonical: `${SITE.url}/services` },
};

export default function ServicesPage() {
	return (
		<main id="main-content" role="main">
			<Header
				breadcrumb={[
					{ label: "Home", href: "/" },
					{ label: "Services", href: "/services" },
				]}
				image="/images/slides/2.webp"
				title="Services"
			/>
			<ServicesAboutSection />
			<ServicesConsultingSection />
			<Solutions />
			<Clients />
			<Plans />
		</main>
	);
}
