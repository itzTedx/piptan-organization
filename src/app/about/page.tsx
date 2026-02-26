import type { Metadata, Route } from "next";
import Image from "next/image";

import { Header } from "@/components/layout/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Tape } from "@/assets/corners";
import { IconCheckmark } from "@/assets/icon/checkmark";
import { IconList2 } from "@/assets/icon/list";

import { SITE } from "@/config/site";
import { AboutWhyChooseUs } from "@/modules/views/about-why-choose-us";
import { Cta } from "@/modules/views/cta";

export const metadata: Metadata = {
	title: "About Us",
	description:
		"Learn about Piptan Organization - experts in investment consulting, strategy development, and risk management with years of experience.",
	openGraph: {
		title: "About Us | Investment Advisory",
		description:
			"Experts in investment consulting, strategy development, and risk management.",
		url: `${SITE.url}/about`,
	},
	alternates: { canonical: `${SITE.url}/about` },
};

const TEAM = [
	{
		id: 1,
		name: "Amira Khalid",
		role: "Managing Partner",
		initials: "AK",
	},
	{
		id: 2,
		name: "Daniel Ortiz",
		role: "Head of Investment Strategy",
		initials: "DO",
	},
	{
		id: 3,
		name: "Noura Al Mansoori",
		role: "Client Relationship Director",
		initials: "NM",
	},
];

export default function AboutPage() {
	const breadcrumb: { label: string; href: Route }[] = [
		{ label: "Home", href: "/" },
		{ label: "About Us", href: "/about" },
	];

	return (
		<main className="min-w-0" id="main-content" role="main">
			<h1 className="sr-only">About Piptan Organization</h1>

			<Header
				breadcrumb={breadcrumb}
				image="/images/advisor.webp"
				imageAlt="Investment advisors collaborating in an office"
				title="About Us"
			/>

			{/* About overview + contact card */}
			<section className="bg-card py-10 sm:py-12 md:py-16 lg:py-24">
				<div className="container mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 md:gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-20">
					<div className="relative max-w-lg">
						<div className="relative z-1 max-w-lg space-y-5 bg-card sm:space-y-6">
							<Badge>
								<div>
									<Tape className="absolute -top-1.5 -left-1.5 size-4! text-muted-foreground/20" />
								</div>
								About us
							</Badge>
							<h2 className="font-semibold text-2xl leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
								Experts in Powerful Investment Consulting Services
							</h2>
							<h3 className="font-semibold text-xl leading-tight md:text-2xl">
								Service Since 2015
							</h3>
							<p className="text-muted-foreground text-sm leading-relaxed sm:text-base md:text-lg">
								Piptan Organization partners with investors, family offices, and
								enterprises to design resilient portfolios and actionable
								strategies. From capital allocation to risk governance, we help
								you move confidently from ideas to execution.
							</p>
							<Button size="lg">
								<span className="relative z-10">Our History</span>

								<div className="translate-full group-hover/button:translate-0 absolute inset-0 rounded-full bg-accent transition-transform duration-300 ease-out" />
							</Button>
						</div>
						<div className="absolute -top-16 -right-12 z-0 aspect-4/6 w-28 overflow-hidden rounded-t-full">
							<Image
								alt="Business man"
								className="object-cover"
								fill
								src="/images/business-man.webp"
							/>
						</div>
					</div>
					<div className="max-w-md">
						<p className="text-muted-foreground text-xl leading-relaxed">
							Blinded by desire, that they cannot foresee the pain and trouble
							that are bounds to ensure and blame belongs to those who fail.
						</p>
						<div className="mt-6 flex gap-6">
							<div className="flex size-14 shrink-0 items-center justify-center rounded-full rounded-br-none bg-primary/10">
								<IconCheckmark className="size-5 text-primary" />
							</div>
							<div className="space-y-3">
								<h3 className="font-medium text-2xl">Our Mission</h3>
								<p className="text-balance text-lg text-muted-foreground leading-relaxed tracking-wide">
									It is a long established fact that a reader will distracted by
									the content of a page when looking.
								</p>
							</div>
						</div>
						<div className="mt-6 flex gap-6">
							<div className="flex size-14 shrink-0 items-center justify-center rounded-full rounded-br-none bg-primary/10">
								<IconCheckmark className="size-5 text-primary" />
							</div>
							<div className="space-y-3">
								<h3 className="font-medium text-2xl">Our Vision</h3>
								<p className="text-balance text-lg text-muted-foreground leading-relaxed tracking-wide">
									There are many variations passages of lorem ipsum available,
									but the majority have suffered.
								</p>
								<ul className="mt-6 space-y-4 text-muted-foreground tracking-wide">
									<li className="flex items-center gap-4">
										<IconList2 className="size-4 shrink-0 text-primary" />
										<p>Tend to repeat predefined</p>
									</li>
									<li className="flex items-center gap-4">
										<IconList2 className="size-4 shrink-0 text-primary" />
										<p>First true generator the Internet</p>
									</li>
									<li className="flex items-center gap-4">
										<IconList2 className="size-4 shrink-0 text-primary" />
										<p>Combined with a handful</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			<AboutWhyChooseUs />

			{/* Contact / appointment call-to-action */}
			<Cta />
		</main>
	);
}
