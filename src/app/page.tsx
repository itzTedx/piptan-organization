import { EmblaOptionsType } from "embla-carousel";

import { MotionCarousel } from "@/components/ui/motion-carousel";

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
		</main>
	);
}
