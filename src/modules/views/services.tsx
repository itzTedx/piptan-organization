import { Badge } from "@/components/ui/badge";

import { Tape } from "@/assets/corners";

import { ServicesCarousel } from "./components/services-carousel";

export function Services() {
	return (
		<section className="container mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 md:py-16">
			<div className="mb-8 flex flex-col items-center gap-3 text-center sm:mb-10 md:mb-12 md:gap-4">
				<Badge>
					<div>
						<Tape className="absolute -top-1.5 -left-1.5 size-4! text-muted-foreground/20" />
					</div>
					Our Services
				</Badge>
				<h2 className="font-semibold text-3xl leading-tight sm:text-4xl md:text-5xl">
					Phenomenal Consulting Solutions
				</h2>
			</div>
			<ServicesCarousel />
		</section>
	);
}
