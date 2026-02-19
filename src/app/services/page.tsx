import { Header } from "@/components/layout/haeder";
import { Badge } from "@/components/ui/badge";

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
			<section className="container mx-auto grid grid-cols-1 gap-6 py-10 sm:py-12 md:grid-cols-2 md:gap-12 md:py-16 lg:py-24">
				<div>
					<div>{/* <Image /> */}</div>
				</div>
				<div>
					<Badge>About us</Badge>
					<h2>Experts in Providing Investment Consulting</h2>
					<p>
						Perfectly simple & easy to distinguish. In a free hour all, when our
						power of choice is untrammelled & when nothing prevents our being
						able to what we like best, every pleasure is to be welcomed & every
						pain avoided but in certain have to repudiated all annoyances
						accepted.
					</p>
				</div>
			</section>
		</main>
	);
}
