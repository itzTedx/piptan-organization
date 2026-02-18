import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import { Tape } from "@/assets/corners";
import { IconChevronRight } from "@/assets/icon/chevrons";

import { SERVICES } from "@/data/services";

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
			<Carousel>
				<CarouselContent>
					{SERVICES.map((service) => (
						<CarouselItem
							className="h-full basis-full sm:basis-1/2 md:basis-1/3"
							key={service.id}
						>
							<div className="overflow-hidden rounded-xl border bg-primary pt-3 sm:rounded-2xl">
								<div className="h-full space-y-3 rounded-t-2xl border-t bg-card p-6 sm:space-y-4 sm:p-8 md:rounded-t-3xl md:p-12">
									<div className="relative w-fit">
										<service.icon className="relative z-10 size-10 text-primary sm:size-12" />
										<div className="absolute bottom-0 left-4 size-12 rounded-full rounded-br-none bg-primary/5 sm:left-6 sm:size-16" />
									</div>
									<h3 className="font-medium text-xl sm:text-2xl md:text-3xl">
										{service.title}
									</h3>
									<Button className="text-sm sm:text-base" variant="secondary">
										Explore More <IconChevronRight />
									</Button>
									<p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
										{service.description}
									</p>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselNext />
				<CarouselPrevious />
			</Carousel>
		</section>
	);
}
