import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Tape } from "@/assets/corners";
import { IconLightbulb } from "@/assets/icon/bulb";
import { IconList2 } from "@/assets/icon/list";
import { IconSocialWhatsapp } from "@/assets/icon/socials";

export const PRICING_PLANS_FEATURES = [
	"Traditional Consulting",
	"Investment Management",
	"Data Aggregation",
	"Tax Planning & Preparation",
];

export function Plans() {
	return (
		<section className="container mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-3 md:px-8 md:py-20">
			<div>
				<Badge>
					<div>
						<Tape className="absolute -top-1.5 -left-1.5 size-4! text-muted-foreground/20" />
					</div>
					Plan & Pricing
				</Badge>
				<h2 className="mt-3 mb-4 text-balance font-medium text-3xl sm:mb-6 sm:text-4xl md:text-5xl">
					Effective & Flexible Pricing
				</h2>
				<p className="text-base text-muted-foreground sm:text-lg">
					Welcomed and every pain avoided but in certain circumstances.
				</p>
				<ul className="mt-4 space-y-3 text-base text-muted-foreground sm:mt-6 sm:space-y-4 sm:text-lg">
					<li>
						<IconList2 className="mr-3 inline-block text-primary sm:mr-4" />{" "}
						Investment Strategy
					</li>
					<li>
						<IconList2 className="mr-3 inline-block text-primary sm:mr-4" />{" "}
						Investment Manager Selection
					</li>
				</ul>
				<h3 className="mt-4 font-medium text-xl sm:mt-6 sm:text-2xl">
					Get help to Choose Right Plan
				</h3>
				<div className="mt-3 flex items-center gap-3 sm:gap-4">
					<div className="flex size-16 shrink-0 items-center justify-center rounded-full rounded-br-none bg-primary-dark/10 sm:size-20">
						<div className="relative size-12 overflow-hidden rounded-full border-2 border-card sm:size-16">
							<Image
								alt="Roman Harry, investment advisor"
								className="object-cover"
								fill
								src="/images/advisor.webp"
							/>
						</div>
					</div>
					<div className="min-w-0">
						<h4 className="font-medium text-lg sm:text-xl">Roman Harry</h4>
						<p className="mb-1 text-muted-foreground/80 text-xs sm:text-sm">
							Advisor
						</p>
						<Link
							className="break-all font-medium text-base text-muted-foreground sm:text-xl"
							href="tel:+1-(555)-789.0123"
						>
							<IconSocialWhatsapp className="mr-2 inline size-4 text-primary sm:size-5" />
							+1-(555)-789.0123
						</Link>
					</div>
				</div>
			</div>
			<div className="rounded-3xl rounded-br-none bg-card p-6 sm:rounded-4xl sm:p-9">
				<div className="flex items-center justify-between">
					<h3 className="text-xl sm:text-2xl">Basic Package</h3>
					<div>
						<IconLightbulb className="inline-block size-5 text-primary" />
					</div>
				</div>
				<p className="mb-3 text-base text-muted-foreground sm:mb-4 sm:text-lg">
					Pricing plan for small business
				</p>
				<Separator />
				<ul>
					{PRICING_PLANS_FEATURES.map((feature) => (
						<li
							className="p-3 text-base text-muted-foreground sm:p-4 sm:text-lg"
							key={feature}
						>
							{feature}
						</li>
					))}
				</ul>
				<div className="mb-4 flex items-start">
					<span className="h-full font-medium text-primary-dark text-xl sm:text-2xl">
						$
					</span>
					<div className="flex items-center gap-2">
						<h4 className="font-medium text-5xl text-primary-dark tracking-wide sm:text-6xl">
							49
						</h4>
						<div>
							<span className="font-medium text-lg text-primary-dark tracking-wide sm:text-xl">
								.99
							</span>
							<p className="font-medium text-foreground/60 text-xs uppercase tracking-wide sm:text-sm">
								Billed Monthly
							</p>
						</div>
					</div>
				</div>
				<Button className="relative w-full overflow-hidden sm:w-auto" size="lg">
					<span className="relative z-10">Get Started</span>

					<div className="translate-full group-hover/button:translate-0 absolute inset-0 rounded-full bg-accent transition-transform duration-300" />
				</Button>
			</div>
		</section>
	);
}
