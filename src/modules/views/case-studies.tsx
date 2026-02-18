import { Route } from "next";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import { CornerRight } from "@/assets/corners";

import { CASE_STUDIES } from "@/data/resources";

export function CaseStudies() {
	return (
		<section className="relative py-10 sm:py-12 md:py-16 lg:py-24 xl:py-32">
			<div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
				<div className="mb-6">
					<Badge>Case Studies</Badge>
					<h2 className="mt-3 font-semibold text-2xl leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
						Thinking Forward for your Results
					</h2>
				</div>
				<Carousel className="z-50">
					<CarouselContent>
						{CASE_STUDIES.map((study) => (
							<CarouselItem
								className="relative h-full basis-full sm:basis-1/2 md:basis-1/3"
								key={study.id}
							>
								<div className="group p-1">
									<div className="relative flex aspect-4/5 items-end overflow-hidden rounded-lg p-3 sm:rounded-xl sm:p-4">
										<div className="relative z-10 translate-y-8 space-y-2 rounded-xl bg-card p-3 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 sm:translate-y-12 sm:space-y-3 sm:rounded-2xl sm:p-4">
											<Badge className="text-xs sm:text-sm">{study.category}</Badge>
											<h3 className="font-medium text-base sm:text-xl">{study.title}</h3>
										</div>
										<Image
											alt={study.title}
											className="object-cover"
											fill
											src={study.image}
										/>
										<Link
											className="absolute inset-0"
											href={`/case-studies/${study.id}` as Route}
										/>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselNext />
					<CarouselPrevious />
				</Carousel>
				<CornerRight className="absolute -bottom-20 -left-4 z-10 hidden -scale-y-100 text-muted-foreground/20 sm:-bottom-32 sm:-left-8 md:block lg:-left-12" />
			</div>
			<div className="absolute inset-0 bg-linear-to-t from-50% from-card to-50%" />
		</section>
	);
}
