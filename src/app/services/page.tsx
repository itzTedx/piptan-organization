import Image from "next/image";

import { Header } from "@/components/layout/haeder";
import { Badge } from "@/components/ui/badge";

import { CornerTopLeft, Tape } from "@/assets/corners";
import { IconArrowRightUp } from "@/assets/icon/arrows";

import { Clients } from "@/modules/views/clients";
import { AboutCarousel } from "@/modules/views/components/about-carousel";
import { ServicesCarousel } from "@/modules/views/components/services-carousel";
import { Plans } from "@/modules/views/plans";
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
			<section className="container mx-auto grid max-w-7xl grid-cols-1 gap-6 py-10 sm:py-12 md:grid-cols-2 md:gap-24 md:py-16 lg:py-24">
				<div className="relative aspect-square">
					<Image
						alt="Service 1"
						className="z-20 object-cover"
						fill
						src="/images/service-about.webp"
					/>
					<CornerTopLeft className="absolute top-0 -left-20 size-1/2 -translate-x-20 text-primary" />
					<div className="absolute right-0 bottom-12 z-30 translate-x-1/2 rounded-3xl rounded-br-none bg-primary p-4 text-card sm:p-6">
						<div className="mb-4 flex items-center justify-between gap-4">
							<IconArrowRightUp className="size-9" />
							Feb 2026
						</div>
						<span className="font-medium text-5xl">6.5</span>
						<span className="text-lg"> Million</span>
						<p className="mt-2 mr-6 tracking-wide">Customers Benefits</p>
					</div>
				</div>

				<div>
					<Badge>About us</Badge>
					<h2 className="mt-3 font-medium text-4xl leading-snug md:text-5xl">
						Experts in Providing Investment Consulting
					</h2>
					<p className="mt-6 text-lg text-muted-foreground leading-relaxed">
						Perfectly simple & easy to distinguish. In a free hour all, when our
						power of choice is untrammelled & when nothing prevents our being
						able to what we like best, every pleasure is to be welcomed & every
						pain avoided but in certain have to repudiated all annoyances
						accepted.
					</p>
					<AboutCarousel />
				</div>
			</section>
			<section className="container mx-auto py-12 sm:py-16 md:py-20">
				<div className="flex flex-col items-center justify-center gap-6 rounded-3xl bg-gray-900 p-9 sm:p-12 md:p-16 lg:p-20 xl:p-24">
					<Badge variant="accent">
						<div>
							<Tape className="absolute -top-1.5 -left-1.5 size-4! text-muted-foreground/20" />
						</div>
						Our Services
					</Badge>
					<h2 className="font-medium text-5xl text-card">
						Phenomenal Consulting Solutions
					</h2>
					<ServicesCarousel />
				</div>
			</section>
			<Solutions />
			<Clients />
			<Plans />
		</main>
	);
}
