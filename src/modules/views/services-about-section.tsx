import Image from "next/image";

import { Badge } from "@/components/ui/badge";

import { CornerTopLeft } from "@/assets/corners";
import { IconArrowRightUp } from "@/assets/icon/arrows";

import { AboutCarousel } from "./components/about-carousel";

export function ServicesAboutSection() {
	return (
		<section className="container grid max-w-7xl grid-cols-1 gap-6 overflow-hidden py-10 sm:py-12 md:grid-cols-2 md:gap-24 md:py-16 lg:py-24">
			<div className="relative aspect-square min-h-[280px] sm:min-h-0">
				<Image
					alt="Investment consulting team at work"
					className="z-20 object-cover"
					fill
					src="/images/service-about.webp"
				/>
				<CornerTopLeft className="absolute top-0 -left-24 size-1/2 -translate-x-4 text-primary sm:-left-10 sm:-translate-x-10 md:-left-20 md:-translate-x-20" />
				<div className="absolute right-24 bottom-4 z-30 translate-x-1/2 rounded-2xl rounded-br-none bg-primary p-3 text-card sm:right-4 sm:bottom-8 sm:rounded-3xl sm:rounded-br-none sm:p-4 md:right-2 md:bottom-12 md:p-6">
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
					power of choice is untrammelled & when nothing prevents our being able
					to what we like best, every pleasure is to be welcomed & every pain
					avoided but in certain have to repudiated all annoyances accepted.
				</p>
				<AboutCarousel />
			</div>
		</section>
	);
}
