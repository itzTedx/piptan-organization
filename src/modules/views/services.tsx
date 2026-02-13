import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import { IconChevronRight } from "@/assets/icon/chevrons";

import { SERVICES } from "@/data/services";

export function Services() {
	return (
		<section className="container mx-auto max-w-7xl py-12 md:py-16">
			<div className="mb-12 flex flex-col items-center gap-4">
				<Badge>Our Services</Badge>
				<h2 className="font-semibold text-5xl">
					Phenomenal Consulting Solutions
				</h2>
			</div>
			<Carousel>
				<CarouselContent>
					{SERVICES.map((service) => (
						<CarouselItem
							className="h-full basis-1/2 md:basis-1/3"
							key={service.id}
						>
							<div className="overflow-hidden rounded-2xl border bg-primary pt-3">
								<div className="h-full space-y-4 rounded-t-3xl border-t bg-card p-12">
									<div className="relative w-fit">
										<service.icon className="relative z-10 size-12 text-primary" />
										<div className="absolute bottom-0 left-6 size-16 rounded-full rounded-br-none bg-primary/5" />
									</div>
									<h3 className="font-medium text-3xl">{service.title}</h3>
									<Button variant="secondary">
										Explore More <IconChevronRight />
									</Button>
									<p className="text-muted-foreground">{service.description}</p>
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
