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
			className="mt-12"
			opts={{ loop: true }}
			plugins={[Autoplay({ delay: 5000 }), WheelGesturesPlugin()]}
		>
			<CarouselContent>
				{ABOUT.map((about) => (
					<CarouselItem key={about.id}>
						<div className="max-w-sm px-14">
							<IconBuilding className="size-12 stroke-1 text-primary" />
							<div className="-mt-8 mb-4 flex w-3/4 justify-end overflow-hidden border-b pr-2">
								<span className="block translate-y-5 font-medium text-4xl text-primary/20 leading-none sm:text-6xl md:text-7xl">
									{about.id}
								</span>
							</div>
							<h3 className="font-medium text-2xl">{about.title}</h3>
							<p className="mt-3 text-lg text-muted-foreground leading-relaxed">
								{about.description}
							</p>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<div className="mt-4 flex items-center gap-6 px-14">
				<CarouselPrevious className="relative translate-y-0 md:left-0" />
				<CarouselNext className="relative translate-y-0 md:right-0" />
			</div>
		</Carousel>
	);
};
