import Image from "next/image";

import { EmblaOptionsType } from "embla-carousel";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { MotionCarousel } from "@/components/ui/motion-carousel";

import { IconArrowRightUp } from "@/assets/icon/arrows";
import { IconBuilding } from "@/assets/icon/buildings";
import { IconChevronRight } from "@/assets/icon/chevrons";
import { IconMagnifierGrowth } from "@/assets/icon/magnifier";
import { IconYoutube } from "@/assets/icon/socials";

import { SERVICES } from "@/data/services";
import { About } from "@/modules/views/about";

export default function Page() {
	const OPTIONS: EmblaOptionsType = { loop: true };
	const SLIDE_COUNT = 6;
	const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
	return (
		<main>
			<MotionCarousel hideButtons options={OPTIONS} slides={SLIDES} />; Piptan
			<About />
			<section className="container mx-auto py-12 md:py-16">
				<div className="mx-auto grid max-w-6xl grid-cols-2 gap-4">
					<div className="relative flex gap-6 rounded-tl-3xl bg-primary p-9 text-primary-foreground">
						<div className="flex size-18 items-center justify-center gap-4 rounded-full rounded-br-none bg-card">
							<IconBuilding className="size-8 text-primary" />
						</div>
						<div>
							<div className="mb-6 size-2.5 bg-card" />
							<h3 className="font-semibold text-4xl">840 Billion</h3>
							<p className="mt-2 text-card/80">
								Client assets under advisement.
							</p>
						</div>
						<IconArrowRightUp className="absolute right-0 bottom-0 h-full w-auto opacity-10" />
					</div>
					<div className="flex gap-6 bg-card p-9">
						<div className="flex size-18 shrink-0 items-center justify-center gap-4 rounded-full rounded-br-none bg-primary/10">
							<IconMagnifierGrowth className="size-8 text-primary" />
						</div>
						<div>
							<h3 className="font-semibold text-4xl">Start Your Project</h3>
							<p className="mt-2 text-foreground/60">
								The claims of duty obligations business frequently occur.
							</p>
							<Button variant="link">
								Free Consultation <IconChevronRight />
							</Button>
						</div>
					</div>
				</div>
				<div className="mask-[url('/masks/mask-1.svg')] mask-no-repeat mask-cover relative -mt-34 aspect-video overflow-hidden rounded-xl">
					<Image
						alt="Business"
						className="object-cover"
						fill
						src="/images/business.webp"
					/>
					<IconYoutube className="absolute right-4 bottom-4 size-10 text-white" />
				</div>
			</section>
			<section className="container mx-auto max-w-6xl py-12 md:py-16">
				<div className="mb-12 flex flex-col items-center gap-4">
					<Badge>Our Services</Badge>
					<h2 className="font-semibold text-5xl">
						Phenomenal Consulting Solutions
					</h2>
				</div>
				<Carousel>
					<CarouselContent>
						{SERVICES.map((service) => (
							<CarouselItem
								className="h-full basis-1/2 md:basis-1/3"
								key={service.id}
							>
								<div className="h-full space-y-4 rounded-md border p-6">
									<service.icon className="size-10 text-primary" />
									<h3 className="font-medium text-2xl">{service.title}</h3>
									<Button variant="secondary">
										Explore More <IconChevronRight />
									</Button>
									<p className="text-muted-foreground">{service.description}</p>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselNext />
					<CarouselPrevious />
				</Carousel>
			</section>
		</main>
	);
}
