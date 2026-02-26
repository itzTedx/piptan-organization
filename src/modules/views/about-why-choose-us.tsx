import { Badge } from "@/components/ui/badge";

import { Tape } from "@/assets/corners";

import { ReasonsCarousel } from "./components/reasons-carousel";

export function AboutWhyChooseUs() {
	return (
		<section className="bg-gray-800 py-12 sm:py-16 md:py-20 lg:py-24">
			<div className="container mx-auto flex max-w-7xl flex-col items-center gap-4">
				<Badge className="text-accent">
					<div>
						<Tape className="absolute -top-1.5 -left-1.5 size-4! text-muted-foreground/20" />
					</div>
					Why Choose us
				</Badge>
				<h2 className="font-semibold text-2xl text-card leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
					Reason for Choose Piptan
				</h2>
				<ReasonsCarousel />
			</div>
		</section>
	);
}
