import { Badge } from "@/components/ui/badge";

import { Tape } from "@/assets/corners";

import { ServicesCarousel } from "./components/services-carousel";

export function ServicesConsultingSection() {
	return (
		<section className="container mx-auto py-12 sm:py-16 md:py-20">
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
	);
}
