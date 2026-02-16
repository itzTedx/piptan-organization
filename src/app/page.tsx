import { EmblaOptionsType } from "embla-carousel";

import { MotionCarousel } from "@/components/ui/motion-carousel";

import { About } from "@/modules/views/about";
import { Blogs } from "@/modules/views/blogs";
import { CaseStudies } from "@/modules/views/case-studies";
import { Feature } from "@/modules/views/feature";
import { Growth } from "@/modules/views/growth";
import { HowWeWorks } from "@/modules/views/how-we-works";
import { Industries } from "@/modules/views/industries";
import { Services } from "@/modules/views/services";
import { WhyChooseUs } from "@/modules/views/why-choose-us";

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
			<WhyChooseUs />
			<Industries />
			<HowWeWorks />
			<CaseStudies />
			<Blogs />
		</main>
	);
}
