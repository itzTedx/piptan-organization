"use client";

import * as React from "react";

import Image from "next/image";

import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, type Transition } from "motion/react";

import { IconBuilding } from "@/assets/icon/buildings";

import { Button } from "./button";

type PropType = {
	slides: {
		image: string;
		title: string;
		description: string;
	}[];
	options?: EmblaOptionsType;
	hideButtons?: boolean;
};

type EmblaControls = {
	selectedIndex: number;
	scrollSnaps: number[];
	prevDisabled: boolean;
	nextDisabled: boolean;
	onDotClick: (index: number) => void;
	onPrev: () => void;
	onNext: () => void;
};

type DotButtonProps = {
	selected?: boolean;
	label: string;
	onClick: () => void;
};

const transition: Transition = {
	type: "spring",
	stiffness: 240,
	damping: 24,
	mass: 1,
};

const useEmblaControls = (
	emblaApi: EmblaCarouselType | undefined
): EmblaControls => {
	const [selectedIndex, setSelectedIndex] = React.useState(0);
	const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
	const [prevDisabled, setPrevDisabled] = React.useState(true);
	const [nextDisabled, setNextDisabled] = React.useState(true);

	const onDotClick = React.useCallback(
		(index: number) => emblaApi?.scrollTo(index),
		[emblaApi]
	);

	const onPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
	const onNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

	const updateSelectionState = (api: EmblaCarouselType) => {
		setSelectedIndex(api.selectedScrollSnap());
		setPrevDisabled(!api.canScrollPrev());
		setNextDisabled(!api.canScrollNext());
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: No need to re-run onSelect when the API changes
	const onInit = React.useCallback((api: EmblaCarouselType) => {
		setScrollSnaps(api.scrollSnapList());
		updateSelectionState(api);
	}, []);

	// biome-ignore lint/correctness/useExhaustiveDependencies: No need to re-run onSelect when the API changes
	const onSelect = React.useCallback((api: EmblaCarouselType) => {
		updateSelectionState(api);
	}, []);

	React.useEffect(() => {
		if (!emblaApi) return;

		onInit(emblaApi);
		emblaApi.on("reInit", onInit).on("select", onSelect);

		return () => {
			emblaApi.off("reInit", onInit).off("select", onSelect);
		};
	}, [emblaApi, onInit, onSelect]);

	return {
		selectedIndex,
		scrollSnaps,
		prevDisabled,
		nextDisabled,
		onDotClick,
		onPrev,
		onNext,
	};
};

function MotionCarousel(props: PropType) {
	const { slides, options, hideButtons = false } = props;
	const autoplay = React.useRef(
		Autoplay({
			delay: 5000,
			stopOnInteraction: false,
		})
	);

	const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);
	const {
		selectedIndex,
		scrollSnaps,
		prevDisabled,
		nextDisabled,
		onDotClick,
		onPrev,
		onNext,
	} = useEmblaControls(emblaApi);

	return (
		<div className="w-full space-y-4 [--slide-height:28rem] [--slide-size:100%] [--slide-spacing:1rem] sm:[--slide-height:22rem] sm:[--slide-spacing:1.5rem] md:[--slide-height:calc(100svh-8.75rem)]">
			<div className="overflow-hidden" ref={emblaRef}>
				<div className="flex touch-pan-y touch-pinch-zoom">
					{slides.map((slide, index) => {
						const isActive = index === selectedIndex;

						return (
							<motion.div
								className="mr-(--slide-spacing) flex h-(--slide-height) min-w-0 flex-none basis-(--slide-size)"
								key={slide.title}
							>
								<motion.div
									animate={{
										scale: isActive ? 1.05 : 1,
									}}
									className="relative flex size-full select-none overflow-hidden rounded-none sm:rounded-xl"
									initial={false}
									transition={transition}
								>
									<div className="container relative z-10 mx-auto flex max-w-7xl flex-col justify-center px-6 py-6 sm:py-8 md:space-y-4 md:px-8 lg:py-12">
										<div className="max-w-xl text-balance text-card">
											<h2 className="font-bold text-4xl leading-tight md:text-5xl lg:text-6xl xl:text-8xl">
												{slide.title}
											</h2>
											<div className="mt-3 flex gap-4 sm:mt-4 sm:gap-6">
												<div className="flex size-12 shrink-0 items-center justify-center rounded-full rounded-br-none bg-accent/50 backdrop-blur-lg sm:size-14">
													<IconBuilding className="size-6 sm:size-7" />
												</div>
												<div className="space-y-2 sm:space-y-3">
													<p className="text-balance text-muted/80 text-sm leading-relaxed sm:text-base md:text-xl">
														{slide.description}
													</p>
													<Button
														className="w-fit text-sm sm:text-base"
														size="lg"
													>
														<span className="relative z-10">
															Services & Plan
														</span>
														<div className="translate-full group-hover/button:translate-0 absolute inset-0 rounded-full bg-accent transition-transform duration-300 ease-out" />
													</Button>
												</div>
											</div>
										</div>
									</div>
									<div className="absolute top-0 right-0 bottom-0 left-0 z-1 bg-black/50" />
									<Image
										alt={slide.title}
										className="object-cover"
										fill
										src={slide.image}
									/>
								</motion.div>
							</motion.div>
						);
					})}
				</div>
			</div>

			{!hideButtons && (
				<div
					aria-label="Carousel controls"
					className="flex justify-between"
					role="group"
				>
					<Button
						aria-label="Previous slide"
						disabled={prevDisabled}
						onClick={onPrev}
						size="icon"
					>
						<ChevronLeft className="size-5" />
					</Button>

					<div className="flex flex-wrap items-center justify-end gap-2">
						{scrollSnaps.map((_, index) => (
							<DotButton
								key={`slide-dot-${index + 1}`}
								label={`Slide ${index + 1}`}
								onClick={() => onDotClick(index)}
								selected={index === selectedIndex}
							/>
						))}
					</div>

					<Button
						aria-label="Next slide"
						disabled={nextDisabled}
						onClick={onNext}
						size="icon"
					>
						<ChevronRight className="size-5" />
					</Button>
				</div>
			)}
		</div>
	);
}

function DotButton({ selected = false, label, onClick }: DotButtonProps) {
	return (
		<motion.button
			animate={{
				width: selected ? 68 : 12,
				height: selected ? 28 : 12,
			}}
			aria-label={label}
			className="flex cursor-pointer select-none items-center justify-center rounded-full border-none bg-primary text-primary-foreground text-sm"
			initial={false}
			layout
			onClick={onClick}
			transition={transition}
			type="button"
		>
			<motion.span
				animate={{
					opacity: selected ? 1 : 0,
					scale: selected ? 1 : 0,
					filter: selected ? "blur(0)" : "blur(4px)",
				}}
				className="block whitespace-nowrap px-3 py-1"
				initial={false}
				layout
				transition={transition}
			>
				{label}
			</motion.span>
		</motion.button>
	);
}

export { MotionCarousel };
