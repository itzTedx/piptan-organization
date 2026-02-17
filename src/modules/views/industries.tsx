"use client";

import { useCallback, useEffect, useState } from "react";

import { AnimatePresence, motion } from "motion/react";

import { Badge } from "@/components/ui/badge";

const INDUSTRIES = [
	{
		id: "01",
		title: "Technology & Life Sciences",
		description:
			"Pleasure is to be welcomed & every pain avoided in certain circumstances claims of duty obligations.",
		list: [
			{
				id: "01",
				item: "Denounce with righteous indignation.",
			},
			{
				id: "01",
				item: "Belongs to those who fail.",
			},
		],
	},
	{
		id: "02",
		title: "Banking & Financial",
		description:
			"Pleasure is to be welcomed & every pain avoided in certain circumstances claims of duty obligations.",
		list: [
			{
				id: "01",
				item: "Denounce with righteous indignation.",
			},
			{
				id: "01",
				item: "Belongs to those who fail.",
			},
		],
	},
	{
		id: "03",
		title: "Commercial Real Estate",
		description:
			"Pleasure is to be welcomed & every pain avoided in certain circumstances claims of duty obligations.",
		list: [
			{
				id: "01",
				item: "Denounce with righteous indignation.",
			},
			{
				id: "01",
				item: "Belongs to those who fail.",
			},
		],
	},
	{
		id: "04",
		title: "Manufacturing",
		description:
			"Pleasure is to be welcomed & every pain avoided in certain circumstances claims of duty obligations.",
		list: [
			{
				id: "01",
				item: "Denounce with righteous indignation.",
			},
			{
				id: "01",
				item: "Belongs to those who fail.",
			},
		],
	},
];

const AUTO_PLAY_DURATION = 5000;

export function Industries() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [direction, setDirection] = useState(0);
	const [isPaused, setIsPaused] = useState(false);

	const handleNext = useCallback(() => {
		setDirection(1);
		setActiveIndex((prev) => (prev + 1) % INDUSTRIES.length);
	}, []);

	const handlePrev = useCallback(() => {
		setDirection(-1);
		setActiveIndex(
			(prev) => (prev - 1 + INDUSTRIES.length) % INDUSTRIES.length
		);
	}, []);

	const handleTabClick = (index: number) => {
		if (index === activeIndex) return;
		setDirection(index > activeIndex ? 1 : -1);
		setActiveIndex(index);
		setIsPaused(false);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: No need to re-run when handleNext changes
	useEffect(() => {
		if (isPaused) return;

		const interval = setInterval(() => {
			handleNext();
		}, AUTO_PLAY_DURATION);

		return () => clearInterval(interval);
	}, [activeIndex, isPaused, handleNext]);

	const variants = {
		enter: (direction: number) => ({
			y: direction > 0 ? "-100%" : "100%",
			opacity: 0,
		}),
		center: {
			zIndex: 1,
			y: 0,
			opacity: 1,
		},
		exit: (direction: number) => ({
			zIndex: 0,
			y: direction > 0 ? "100%" : "-100%",
			opacity: 0,
		}),
	};
	return (
		<section className="container mx-auto max-w-7xl px-0 py-10 sm:py-12 md:py-16">
			<div className="mb-8 flex flex-col items-center gap-3 text-center sm:mb-10 md:mb-12 md:gap-4">
				<Badge>We Work For</Badge>
				<h2 className="font-semibold text-3xl leading-tight sm:text-4xl md:text-5xl">
					Industries We Served
				</h2>
			</div>

			<div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12 md:gap-10 lg:gap-16">
				{/* Left: Tabs */}
				<div className="order-2 flex flex-col gap-0 md:order-1 md:col-span-5">
					{INDUSTRIES.map((industry, index) => {
						const isActive = activeIndex === index;

						return (
							<button
								className={`group relative flex cursor-pointer items-start gap-4 border-border/50 border-t py-3 text-left transition-all duration-500 first:border-0 md:py-4 ${
									isActive
										? "text-foreground"
										: "text-muted-foreground/60 hover:text-foreground"
								}`}
								key={industry.id}
								onClick={() => handleTabClick(index)}
								type="button"
							>
								<div className="absolute inset-y-0 left-[-12px] w-[2px] bg-muted md:left-[-20px]">
									{isActive && (
										<motion.div
											animate={isPaused ? { height: "0%" } : { height: "100%" }}
											className="absolute top-0 left-0 w-full origin-top bg-accent"
											initial={{ height: "0%" }}
											key={`progress-${index}-${isPaused}`}
											transition={{
												duration: AUTO_PLAY_DURATION / 1000,
												ease: "linear",
											}}
										/>
									)}
								</div>

								<span className="mt-1 font-medium text-[9px] tabular-nums opacity-50 md:text-[10px]">
									{industry.id}
								</span>

								<div className="flex flex-1 flex-col gap-1">
									<span
										className={`font-medium text-base transition-colors duration-500 sm:text-lg md:text-xl ${
											isActive ? "text-foreground" : ""
										}`}
									>
										{industry.title}
									</span>
									<span className="hidden text-muted-foreground text-sm sm:line-clamp-2 md:block">
										{industry.description}
									</span>
								</div>
							</button>
						);
					})}
				</div>

				{/* Right: Active industry details */}
				<div className="order-1 md:order-2 md:col-span-7">
					<div
						className="relative overflow-hidden rounded-2xl border border-border/40 bg-secondary/60 p-5 shadow-sm sm:p-6 md:p-8"
						onMouseEnter={() => setIsPaused(true)}
						onMouseLeave={() => setIsPaused(false)}
					>
						<AnimatePresence custom={direction} initial={false} mode="wait">
							<motion.div
								animate="center"
								className="space-y-4 sm:space-y-5 md:space-y-6"
								custom={direction}
								exit="exit"
								initial="enter"
								key={activeIndex}
								onClick={handleNext}
								transition={{
									y: { type: "spring", stiffness: 260, damping: 32 },
									opacity: { duration: 0.35 },
								}}
								variants={variants}
							>
								<div className="flex flex-wrap items-center gap-2">
									<Badge className="text-xs uppercase" variant="outline">
										{INDUSTRIES[activeIndex].id.padStart(2, "0")}
									</Badge>
									<h3 className="font-semibold text-xl sm:text-2xl md:text-3xl">
										{INDUSTRIES[activeIndex].title}
									</h3>
								</div>

								<p className="max-w-2xl text-muted-foreground text-sm leading-relaxed sm:text-base md:text-lg">
									{INDUSTRIES[activeIndex].description}
								</p>

								<ul className="grid gap-2 text-sm sm:grid-cols-2 sm:gap-3 sm:text-base">
									{INDUSTRIES[activeIndex].list.map((item) => (
										<li
											className="flex items-start gap-2 text-muted-foreground"
											key={item.item}
										>
											<span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
											<span>{item.item}</span>
										</li>
									))}
								</ul>

								<div className="flex items-center justify-end gap-2 pt-2 sm:pt-4">
									<button
										aria-label="Previous industry"
										className="flex h-9 w-9 items-center justify-center rounded-md border border-border/60 bg-background/80 text-foreground backdrop-blur-sm transition-all hover:bg-background active:scale-95 sm:h-10 sm:w-10"
										onClick={(e) => {
											e.stopPropagation();
											handlePrev();
										}}
										type="button"
									>
										<span className="text-xs sm:text-sm">&larr;</span>
									</button>
									<button
										aria-label="Next industry"
										className="flex h-9 w-9 items-center justify-center rounded-md border border-border/60 bg-background/80 text-foreground backdrop-blur-sm transition-all hover:bg-background active:scale-95 sm:h-10 sm:w-10"
										onClick={(e) => {
											e.stopPropagation();
											handleNext();
										}}
										type="button"
									>
										<span className="text-xs sm:text-sm">&rarr;</span>
									</button>
								</div>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</section>
	);
}
