import Image from "next/image";

import { Button } from "@/components/ui/button";

import { IconArrowRightUp } from "@/assets/icon/arrows";
import { IconBuilding } from "@/assets/icon/buildings";
import { IconChevronRight } from "@/assets/icon/chevrons";
import { IconMagnifierGrowth } from "@/assets/icon/magnifier";
import { IconYoutube } from "@/assets/icon/socials";

export function Feature() {
	return (
		<section className="container mx-auto px-4 py-10 sm:px-6 sm:py-12 md:py-16">
			<div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
				<div className="relative flex gap-4 rounded-tl-2xl bg-primary p-4 text-primary-foreground sm:gap-6 sm:p-6 md:rounded-tl-3xl md:p-9">
					<div className="flex size-14 shrink-0 items-center justify-center gap-4 rounded-full rounded-br-none bg-card sm:size-16 md:size-18">
						<IconBuilding className="size-6 text-primary sm:size-8" />
					</div>
					<div className="min-w-0">
						<div className="mb-4 size-2.5 bg-card sm:mb-6" />
						<h3 className="font-semibold text-2xl sm:text-3xl md:text-4xl">
							840 Billion
						</h3>
						<p className="mt-1 text-card/80 text-sm sm:mt-2 sm:text-base">
							Client assets under advisement.
						</p>
					</div>
					<IconArrowRightUp className="absolute right-0 bottom-0 h-full w-auto opacity-10" />
				</div>
				<div className="flex gap-4 bg-card p-4 sm:gap-6 sm:p-6 md:p-9">
					<div className="flex size-14 shrink-0 items-center justify-center gap-4 rounded-full rounded-br-none bg-primary/10 sm:size-16 md:size-18">
						<IconMagnifierGrowth className="size-6 text-primary sm:size-8" />
					</div>
					<div className="min-w-0">
						<h3 className="font-semibold text-2xl sm:text-3xl md:text-4xl">
							Start Your Project
						</h3>
						<p className="mt-1 text-foreground/60 text-sm sm:mt-2 sm:text-base">
							The claims of duty obligations business frequently occur.
						</p>
						<Button className="p-0 text-sm sm:text-base" variant="link">
							Free Consultation <IconChevronRight />
						</Button>
					</div>
				</div>
			</div>
			<div className="md:mask-[url('/masks/mask-1.svg')] mask-no-repeat mask-cover relative aspect-video overflow-hidden rounded-xl sm:-mt-12 sm:rounded-2xl md:-mt-20 lg:-mt-34">
				<Image
					alt="Business"
					className="object-cover"
					fill
					src="/images/business.webp"
				/>
				<IconYoutube className="absolute right-3 bottom-3 size-8 text-white sm:right-4 sm:bottom-4 sm:size-10" />
			</div>
		</section>
	);
}
