"use client";

import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import { SOLUTIONS } from "@/data/solutions";

export const SolutionsCarousel = () => {
	return (
		<Carousel
			opts={{ loop: true }}
			plugins={[Autoplay({ delay: 5000 }), WheelGesturesPlugin()]}
		>
			<CarouselContent>
				{SOLUTIONS.map((solution) => (
					<CarouselItem
						className="group basis-full sm:basis-1/2 md:basis-1/3"
						key={solution.id}
					>
						<div className="h-full space-y-3 rounded-t-3xl border-t bg-card p-6 sm:space-y-4 sm:p-8 md:rounded-t-4xl md:p-9">
							<h3 className="font-medium text-xl transition-colors hover:text-primary hover:underline sm:text-2xl md:text-3xl">
								{solution.title}
							</h3>
							<Image
								alt={solution.title}
								className="rounded-full"
								height={256}
								src={solution.image}
								width={256}
							/>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselNext />
			<CarouselPrevious />
		</Carousel>
	);
};
