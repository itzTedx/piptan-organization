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
			<CarouselContent className="-ml-6">
				{SOLUTIONS.map((solution) => (
					<CarouselItem
						className="group basis-full pl-6 sm:basis-1/2 md:basis-1/4"
						key={solution.id}
					>
						<div className="relative z-10 flex h-full flex-col items-center gap-3 rounded-3xl rounded-br-none border-t bg-background p-6 sm:gap-4 sm:p-8 md:p-10">
							<h3 className="relative z-10 max-w-xs font-medium text-xl transition-colors hover:text-primary hover:underline sm:text-3xl">
								{solution.title}
							</h3>
							<Image
								alt={solution.title}
								className="relative z-10 rounded-full"
								height={256}
								src={solution.image}
								width={256}
							/>
							<div className="absolute right-4 bottom-4 flex size-12 items-center justify-center rounded-full rounded-br-none bg-primary-dark/10">
								<IconArrowRightDown />
							</div>

							<IconTrendUp className="absolute top-6 right-0 h-auto w-full -translate-y-1/4 stroke-2 text-card" />
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselNext />
			<CarouselPrevious />
		</Carousel>
	);
};
