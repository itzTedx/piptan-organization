import { Badge } from "@/components/ui/badge";

import { Tape } from "@/assets/corners";

import { SolutionsCarousel } from "./components/solutions-carousel";

export function Solutions() {
	return (
		<section className="bg-card py-12 sm:py-16 md:py-24 lg:py-32">
			<div className="container mx-auto max-w-7xl">
				<Badge>
					<div>
						<Tape className="absolute -top-1.5 -left-1.5 size-4! text-muted-foreground/20" />
					</div>
					Our Clients
				</Badge>
				<h2 className="mt-2 mb-4 font-medium text-3xl sm:text-4xl md:text-5xl">
					Growing with Smart Ideas
				</h2>
				<SolutionsCarousel />
			</div>
		</section>
	);
}
