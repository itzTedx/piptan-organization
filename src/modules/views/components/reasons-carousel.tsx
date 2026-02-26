"use client";

import Autoplay from "embla-carousel-autoplay";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";

import { IconSpiral } from "@/assets/icon/spiral";

const REASONS = [
	{
		id: "01",
		title: "Outcome-driven advisory",
		description:
			"We connect every recommendation to measurable growth, resilience, and long value.",
	},
	{
		id: "02",
		title: "Transparent, research-led",
		description:
			"Our consultants combine deep sector expertise with data-backed insights you can trust.",
	},
	{
		id: "03",
		title: "Dedicated partnership",
		description:
			"We stay close to your team from strategy through execution, not just the boardroom.",
	},
	{
		id: "04",
		title: "Investment Consulting",
		description:
			"We provide comprehensive investment consulting services to institutional clients.",
	},
	{
		id: "05",
		title: "Strategy Development",
		description:
			"We develop and implement investment strategies that are aligned with our clients.",
	},
	{
		id: "06",
		title: "Risk Management",
		description:
			"We manage and mitigate investment risks to ensure the safety and sustainability of our clients.",
	},
];
export function ReasonsCarousel() {
	return (
		<Carousel
			className="w-full"
			opts={{
				align: "start",
			}}
			plugins={[
				Autoplay({
					delay: 3000,
				}),
			]}
		>
			<CarouselContent>
				{REASONS.map((reason) => (
					<CarouselItem
						className="group basis-1/2 lg:basis-1/4"
						key={reason.id}
					>
						<div className="h-full p-1">
							<div className="flex h-full flex-col">
								<div className="flex">
									<div className="flex w-full items-end rounded-t-3xl bg-gray-700/80 px-6">
										<IconSpiral className="text-accent" />
									</div>
									<div className="rounded-tr-3xl bg-gray-700/80 p-3">
										<span className="flex size-14 items-center justify-center rounded-full rounded-br-none bg-gray-800 text-card text-xl transition-colors group-hover:bg-accent">
											{reason.id}
										</span>
									</div>
								</div>
								<div className="h-full flex-1 rounded-bl-3xl bg-gray-700/80 p-6">
									<h3 className="font-normal text-2xl text-card">
										{reason.title}
									</h3>
									<p className="mt-6 font-light text-lg text-muted/60">
										{reason.description}
									</p>
								</div>
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
}
