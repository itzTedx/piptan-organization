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

import { IconArrowRightDown, IconTrendUp } from "@/assets/icon/arrows";

import { SOLUTIONS } from "@/data/solutions";

export const SolutionsCarousel = () => {
	return (
		<Carousel
			opts={{ loop: true, align: "start" }}
			plugins={[Autoplay({ delay: 5000 }), WheelGesturesPlugin()]}
		>
			<CarouselContent className="-ml-3 sm:-ml-6">
				{SOLUTIONS.map((solution) => (
					<CarouselItem
						className="group basis-full pl-3 sm:basis-1/2 sm:pl-6 md:basis-1/4"
						key={solution.id}
					>
						<div className="relative z-10 flex h-full flex-col items-center gap-2 rounded-2xl rounded-br-none border-t bg-background p-4 sm:gap-4 sm:rounded-3xl sm:p-6 md:p-10">
							<h3 className="relative z-10 max-w-xs text-center font-medium text-lg transition-colors hover:text-primary hover:underline sm:text-left sm:text-2xl md:text-3xl">
								{solution.title}
							</h3>
							<Image
								alt={solution.title}
								className="relative z-10 size-40 rounded-full sm:size-48"
								height={256}
								src={solution.image}
								width={256}
							/>
							<div className="absolute right-3 bottom-3 flex size-10 items-center justify-center rounded-full rounded-br-none bg-primary-dark/10 sm:right-4 sm:bottom-4 sm:size-12">
								<IconArrowRightDown />
							</div>

							<IconTrendUp className="absolute top-4 right-0 h-auto w-full -translate-y-1/4 stroke-2 text-card sm:top-6" />
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselNext />
			<CarouselPrevious />
		</Carousel>
	);
};
