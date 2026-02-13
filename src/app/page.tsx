import { EmblaOptionsType } from "embla-carousel";

import { Badge } from "@/components/ui/badge";
import { MotionCarousel } from "@/components/ui/motion-carousel";

import { WHY_US } from "@/data/why-us";
import { About } from "@/modules/views/about";
import { Feature } from "@/modules/views/feature";
import { Growth } from "@/modules/views/growth";
import { Services } from "@/modules/views/services";

export default function Page() {
	const OPTIONS: EmblaOptionsType = { loop: true };
	const SLIDE_COUNT = 6;
	const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
	return (
		<main className="min-w-0">
			<MotionCarousel hideButtons options={OPTIONS} slides={SLIDES} />
			<About />
			<Feature />
			<Services />
			<Growth />
			<section className="container mx-auto flex max-w-6xl flex-col items-center gap-4 py-10 sm:py-12 md:py-16 lg:py-28">
				<Badge>Why Choose Us?</Badge>
				<h2 className="text-center font-semibold text-3xl leading-tight sm:text-4xl md:text-5xl">
					Reason for Choosing Piptan
				</h2>
				<div className="grid grid-cols-3">
					{WHY_US.map((item) => (
						<div key={item.id}>
							{item.lists.map((list) => (
								<div key={list.id}>
									<h3>{list.title}</h3>
									<p>{list.description}</p>
								</div>
							))}
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
