"use client";

import Autoplay from "embla-carousel-autoplay";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import { IconBuilding } from "@/assets/icon/buildings";

import { ABOUT } from "@/data/about";

export const AboutCarousel = () => {
	return (
		<Carousel
			className="mt-8 sm:mt-12"
			opts={{ loop: true }}
			plugins={[Autoplay({ delay: 5000 }), WheelGesturesPlugin()]}
		>
			<CarouselContent>
				{ABOUT.map((about) => (
					<CarouselItem key={about.id}>
						<div className="max-w-sm px-4 sm:px-8 md:px-14">
							<IconBuilding className="size-10 stroke-1 text-primary sm:size-12" />
							<div className="-mt-6 mb-3 flex w-3/4 justify-end overflow-hidden border-b pr-2 sm:-mt-8 sm:mb-4">
								<span className="block translate-y-4 font-medium text-3xl text-primary/20 leading-none sm:translate-y-5 sm:text-6xl md:text-7xl">
									{about.id}
								</span>
							</div>
							<h3 className="font-medium text-xl sm:text-2xl">{about.title}</h3>
							<p className="mt-2 text-base text-muted-foreground leading-relaxed sm:mt-3 sm:text-lg">
								{about.description}
							</p>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<div className="mt-4 flex items-center gap-4 px-4 sm:gap-6 sm:px-8 md:px-14">
				<CarouselPrevious className="relative translate-y-0 md:left-0" />
				<CarouselNext className="relative translate-y-0 md:right-0" />
			</div>
		</Carousel>
	);
};
