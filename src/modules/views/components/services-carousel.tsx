"use client";

import Autoplay from "embla-carousel-autoplay";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";

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

export const ServicesCarousel = () => {
	return (
		<Carousel
			opts={{ loop: true }}
			plugins={[Autoplay({ delay: 5000 }), WheelGesturesPlugin()]}
		>
			<CarouselContent>
				{SERVICES.map((service) => (
					<CarouselItem
						className="group basis-full sm:basis-1/2 md:basis-1/3"
						key={service.id}
					>
						<div className="mx-1 h-full overflow-hidden rounded-xl rounded-br-none border border-border/20 bg-primary pt-3 group-even:bg-accent sm:mx-0 sm:rounded-3xl sm:rounded-br-none">
							<div className="h-full space-y-2 rounded-t-2xl border-t bg-card p-4 sm:space-y-4 sm:rounded-t-3xl sm:p-6 md:rounded-t-4xl md:p-12">
								<div className="relative w-fit">
									<service.icon className="relative z-10 size-9 text-primary sm:size-12" />
									<div className="absolute bottom-0 left-3 size-10 rounded-full rounded-br-none bg-primary/5 sm:left-6 sm:size-16" />
								</div>
								<h3 className="mt-4 font-medium text-lg transition-colors hover:text-primary hover:underline sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
									{service.title}
								</h3>
								<Button
									className="relative text-sm hover:text-accent sm:text-base"
									variant="link"
								>
									Explore More{" "}
									<div className="absolute left-[90%] h-px w-7 origin-left -translate-x-6 scale-x-0 bg-accent transition-transform duration-300 ease-in group-hover/button:translate-x-0 group-hover/button:scale-x-100" />
									<IconChevronRight className="text-accent transition-transform duration-300 ease-in group-hover/button:translate-x-6" />
								</Button>
								<p className="text-muted-foreground text-sm leading-relaxed sm:text-base md:text-lg">
									{service.description}
								</p>
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselNext className="top-1/2 right-0 sm:right-2 md:right-4" />
			<CarouselPrevious className="top-1/2 left-0 sm:left-2 md:left-4" />
		</Carousel>
	);
};
