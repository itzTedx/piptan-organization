import { Header } from "@/components/layout/header";

import { Clients } from "@/modules/views/clients";
import { Plans } from "@/modules/views/plans";
import { ServicesAboutSection } from "@/modules/views/services-about-section";
import { ServicesConsultingSection } from "@/modules/views/services-consulting-section";
import { Solutions } from "@/modules/views/solutions";

export default function ServicesPage() {
	return (
		<main>
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
