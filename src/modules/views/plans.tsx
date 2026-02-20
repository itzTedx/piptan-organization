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
		<section className="container mx-auto grid max-w-7xl grid-cols-1 gap-6 py-12 sm:py-16 md:grid-cols-3 md:py-20">
			<div>
				<Badge>
					<div>
						<Tape className="absolute -top-1.5 -left-1.5 size-4! text-muted-foreground/20" />
					</div>
					Plan & Pricing
				</Badge>
				<h2 className="mb-6 text-balance font-medium text-5xl">
					Effective & Flexible Pricing
				</h2>
				<p className="text-lg text-muted-foreground">
					Welcomed and every pain avoided but in certain circumstances.
				</p>
				<ul className="mt-6 space-y-4 text-lg text-muted-foreground">
					<li>
						<IconList2 className="mr-4 inline-block text-primary" /> Investment
						Strategy
					</li>
					<li>
						<IconList2 className="mr-4 inline-block text-primary" /> Investment
						Manager Selection
					</li>
				</ul>
				<h3 className="mt-6 font-medium text-2xl">
					Get help to Choose Right Plan
				</h3>
				<div className="mt-3 flex items-center gap-4">
					<div className="flex size-20 items-center justify-center rounded-full rounded-br-none bg-primary-dark/10">
						<div className="relative size-16 overflow-hidden rounded-full border-2 border-card">
							<Image
								alt="Shashi"
								className="object-cover"
								fill
								src="/images/advisor.webp"
							/>
						</div>
					</div>
					<div>
						<h4 className="font-medium text-xl">Roman Harry</h4>
						<p className="mb-1 text-muted-foreground/80 text-sm">Advisor</p>
						<Link
							className="font-medium text-muted-foreground text-xl"
							href="tel:+1-(555)-789.0123"
						>
							<IconSocialWhatsapp className="mr-2 inline size-5 text-primary" />
							+1-(555)-789.0123
						</Link>
					</div>
				</div>
			</div>
			<div className="rounded-4xl rounded-br-none bg-card p-9">
				<div className="flex items-center justify-between">
					<h3 className="text-2xl">Basic Package</h3>
					<div>
						<IconLightbulb className="inline-block size-5 text-primary" />
					</div>
				</div>
				<p className="mb-4 text-lg text-muted-foreground">
					Pricing plan for small business
				</p>
				<Separator />
				<ul>
					{PRICING_PLANS_FEATURES.map((feature) => (
						<li className="p-4 text-lg text-muted-foreground" key={feature}>
							{feature}
						</li>
					))}
				</ul>
				<div className="mb-4 flex items-start">
					<span className="h-full font-medium text-2xl text-primary-dark">
						$
					</span>
					<div className="flex items-center gap-2">
						<h4 className="font-medium text-6xl text-primary-dark tracking-wide">
							49
						</h4>
						<div>
							<span className="font-medium text-primary-dark text-xl tracking-wide">
								.99
							</span>
							<p className="font-medium text-foreground/60 text-sm uppercase tracking-wide">
								Billed Monthly
							</p>
						</div>
					</div>
				</div>
				<Button>Get Started</Button>
			</div>
		</section>
	);
}
