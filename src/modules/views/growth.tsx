import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Tape } from "@/assets/corners";
import { IconBuilding } from "@/assets/icon/buildings";
import { IconChevronLeft, IconChevronRight } from "@/assets/icon/chevrons";

import { ClientsCarousel } from "./components/clients-carousel";

const GROWTHS = [
	{
		id: 1,
		title: "Global Impact",
		description: "Ever undertakes labor physic exercise except some advantage",
		icon: IconBuilding,
	},
	{
		id: 2,
		title: "Corporate Sustainability",
		description:
			"Take a trivial example, which of ever laborious too obtain some.",
		icon: IconBuilding,
	},
];

export function Growth() {
	return (
		<section className="relative py-10 sm:py-12 md:py-16">
			<div className="container mx-auto max-w-7xl space-y-10 px-4 sm:space-y-12 sm:px-6 md:space-y-16">
				<div className="grid grid-cols-1 gap-0 rounded-xl bg-gray-800 text-background sm:rounded-2xl md:grid-cols-2 md:rounded-3xl lg:grid-cols-[1.2fr_1fr_1fr] lg:rounded-4xl">
					<div className="p-5 sm:p-8 md:p-10 lg:p-12">
						<Badge className="relative text-accent">
							<div>
								<Tape className="absolute -top-1.5 -left-1.5 size-4! text-muted/10" />
							</div>
							Our Growth
						</Badge>
						<h3 className="mt-3 text-balance font-semibold text-2xl leading-snug sm:text-3xl md:text-4xl lg:text-5xl">
							Thinking <br />
							Beyond Ordinary Strategies
						</h3>
						<p className="my-4 text-base text-muted/60 sm:my-6 sm:text-lg">
							The wise man therefore always holds in these matters to this
							principle of selection.
						</p>
						<Button>Annual Report</Button>
					</div>
					<div className="relative flex min-h-[200px] items-end justify-end p-4 sm:min-h-[280px] sm:p-6 md:min-h-0 md:p-10">
						<div className="relative z-10 h-fit w-full max-w-56 space-y-3 rounded-xl rounded-br-none bg-gray-900 p-4 sm:rounded-2xl sm:rounded-br-none sm:p-6">
							<h4 className="font-semibold text-lg sm:text-xl md:text-2xl">
								Monthly Growth
							</h4>
							<div className="flex items-center justify-between text-xs sm:text-sm md:text-base">
								<p>$48,560,25</p>
								<p className="font-semibold text-accent">+18%</p>
							</div>
							<div className="relative h-1.5 w-full rounded-full bg-muted-foreground/30">
								<div className="absolute top-0 left-0 h-full w-1/2 rounded-full bg-accent" />
							</div>
						</div>
						<Image
							alt="Happy Man"
							className="absolute bottom-0 left-0 translate-x-0 object-contain object-left-bottom md:translate-x-4 md:object-cover"
							height={920}
							src="/images/happy-man.webp"
							width={780}
						/>
					</div>
					<div className="relative z-10 -mr-px grid grid-cols-1 grid-rows-2 divide-y divide-border md:grid-cols-1">
						{GROWTHS.map(({ icon: Icon, ...growth }) => (
							<div
								className="flex flex-col justify-between overflow-hidden rounded-b-xl rounded-t-none bg-card p-4 text-foreground sm:p-6 md:rounded-r-3xl md:rounded-br-none md:rounded-t-xl"
								key={growth.id}
							>
								<div>
									<h4 className="mb-2 font-medium text-xl sm:mb-3 sm:text-2xl">
										{growth.title}
									</h4>
									<p className="text-base text-muted-foreground sm:text-lg">
										{growth.description}
									</p>
								</div>
								<div className="flex items-center justify-between">
									<Icon className="size-8 stroke-1 text-primary sm:size-10" />
									<Button className="text-sm sm:text-base" variant="link">
										Read More <IconChevronLeft />
									</Button>
								</div>
							</div>
						))}
					</div>
				</div>
				<div>
					<ClientsCarousel />
					<p className="mt-4 flex w-full flex-wrap justify-center gap-2 px-2 text-center font-medium text-muted text-sm tracking-wide sm:mt-6 sm:gap-3 sm:text-lg">
						2.6k Companies & Individuals Trusted Us.{" "}
						<Link
							className="group inline-flex items-center gap-2 transition-colors hover:text-accent"
							href="/"
						>
							<IconChevronRight className="size-3 transition-transform duration-300 ease-out group-hover:translate-x-1" />
							View All Clients
						</Link>
					</p>
				</div>
			</div>
			<div className="absolute inset-0 -z-1 bg-linear-to-t from-80% from-gray-900 to-80%" />
		</section>
	);
}
