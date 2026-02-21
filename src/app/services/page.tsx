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
			<section className="container mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-10 sm:px-6 sm:py-12 md:grid-cols-2 md:gap-24 md:px-8 md:py-16 lg:py-24">
				<div className="relative aspect-square min-h-[280px] sm:min-h-0">
					<Image
						alt="Service 1"
						className="z-20 object-cover"
						fill
						src="/images/service-about.webp"
					/>
					<CornerTopLeft className="absolute top-0 -left-4 size-1/2 -translate-x-4 text-primary sm:-left-10 sm:-translate-x-10 md:-left-20 md:-translate-x-20" />
					<div className="absolute right-2 bottom-4 z-30 translate-x-1/2 rounded-2xl rounded-br-none bg-primary p-3 text-card sm:right-4 sm:bottom-8 sm:rounded-3xl sm:rounded-br-none sm:p-4 md:bottom-12 md:p-6">
						<div className="mb-2 flex items-center justify-between gap-2 sm:mb-4 sm:gap-4">
							<IconArrowRightUp className="size-6 sm:size-9" />
							<span className="text-sm sm:text-base">Feb 2026</span>
						</div>
						<span className="font-medium text-3xl sm:text-5xl">6.5</span>
						<span className="text-base sm:text-lg"> Million</span>
						<p className="mt-1 mr-2 text-sm tracking-wide sm:mt-2 sm:mr-6 sm:text-base">
							Customers Benefits
						</p>
					</div>
				</div>

				<div className="px-0 sm:px-2">
					<Badge>About us</Badge>
					<h2 className="mt-3 font-medium text-2xl leading-snug sm:text-3xl md:text-4xl lg:text-5xl">
						Experts in Providing Investment Consulting
					</h2>
					<p className="mt-4 text-base text-muted-foreground leading-relaxed sm:mt-6 sm:text-lg">
						Perfectly simple & easy to distinguish. In a free hour all, when our
						power of choice is untrammelled & when nothing prevents our being
						able to what we like best, every pleasure is to be welcomed & every
						pain avoided but in certain have to repudiated all annoyances
						accepted.
					</p>
					<AboutCarousel />
				</div>
			</section>
			<section className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
				<div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-gray-900 p-6 text-center sm:gap-6 sm:rounded-3xl sm:p-9 sm:text-left md:p-16 lg:p-20 xl:p-24">
					<Badge variant="accent">
						<div>
							<Tape className="absolute -top-1.5 -left-1.5 size-4! text-muted-foreground/20" />
						</div>
						Our Services
					</Badge>
					<h2 className="font-medium text-3xl text-card sm:text-4xl md:text-5xl">
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
