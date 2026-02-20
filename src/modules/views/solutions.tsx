import { Badge } from "@/components/ui/badge";

import { Tape } from "@/assets/corners";

import { SolutionsCarousel } from "./components/solutions-carousel";

export function Solutions() {
	return (
		<section className="container mx-auto max-w-6xl py-20 md:py-24 lg:py-32">
			<div>
				<Badge>
					<div>
						<Tape className="absolute -top-1.5 -left-1.5 size-4! text-muted-foreground/20" />
					</div>
					Our Clients
				</Badge>
				<h2 className="font-medium text-5xl">Growing with Smart Ideas</h2>
				<SolutionsCarousel />
			</div>
		</section>
	);
}
