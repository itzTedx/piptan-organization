import { EmblaOptionsType } from "embla-carousel";

import { MotionCarousel } from "@/components/ui/motion-carousel";

import { About } from "@/modules/views/about";
import { Blogs } from "@/modules/views/blogs";
import { Cta } from "@/modules/views/cta";
import { Faqs } from "@/modules/views/faqs";
import { Feature } from "@/modules/views/feature";
import { Growth } from "@/modules/views/growth";
import { HowWeWorks } from "@/modules/views/how-we-works";
import { Industries } from "@/modules/views/industries";
import { Services } from "@/modules/views/services";
import { WhyChooseUs } from "@/modules/views/why-choose-us";

export default function Page() {
	const OPTIONS: EmblaOptionsType = { loop: true };

	const SLIDES = [
		{
			image: "/images/slides/1.webp",
			title: "Showing you the way of success!",
			description:
				"The moment, so blinded by desire, that they cannot foresee and trouble that are bound to ensue.",
		},
		{
			image: "/images/slides/2.webp",
			title: "Business & Individual Consulting",
			description:
				"The moment, so blinded by desire, that they cannot foresee and trouble that are bound to ensue.",
		},
		{
			image: "/images/slides/3.webp",
			title: "Ideas for your better investment!",
			description:
				"The moment, so blinded by desire, that they cannot foresee and trouble that are bound to ensue.",
		},
	];

	return (
		<main className="min-w-0" id="main-content" role="main">
			<h1 className="sr-only">
				Piptan Organization - Investment Advisory & Consulting
			</h1>
			<MotionCarousel hideButtons options={OPTIONS} slides={SLIDES} />
			<About />
			<Feature />
			<Services />
			<Growth />
			<WhyChooseUs />
			<Industries />
			<HowWeWorks />
			{/* <CaseStudies /> */}
			<Blogs />
			<Faqs />
			<Cta />
		</main>
	);
}
