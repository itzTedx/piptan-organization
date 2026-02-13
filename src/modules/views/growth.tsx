import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
			<div className="container mx-auto max-w-7xl space-y-10 sm:space-y-12 md:space-y-16">
				<div className="grid grid-cols-1 gap-0 overflow-hidden rounded-xl bg-gray-800 text-background outline outline-gray-400/20 sm:rounded-2xl md:grid-cols-2 lg:grid-cols-3">
					<div className="p-6 sm:p-10 md:p-16">
						<Badge>Our Growth</Badge>
						<h3 className="mt-3 text-balance font-semibold text-2xl sm:text-3xl md:text-4xl">
							Thinking Beyond Ordinary Strategies
						</h3>
						<p className="my-4 text-base text-muted/60 sm:my-6 sm:text-lg">
							The wise man therefore always holds in these matters to this
							principle of selection.
						</p>
						<Button>Annual Report</Button>
					</div>
					<div className="p-6 sm:p-10 md:p-16">
						<div className="h-fit max-w-56 space-y-3 rounded-xl rounded-br-none bg-gray-900 p-4 sm:rounded-2xl sm:p-6">
							<h4 className="font-semibold text-xl sm:text-2xl">
								Monthly Growth
							</h4>
							<div className="flex items-center justify-between text-sm sm:text-base">
								<p>$48,560,25</p>
								<p className="text-accent">+18%</p>
							</div>
						</div>
					</div>
					<div className="grid grid-rows-2 divide-y divide-border">
						{GROWTHS.map(({ icon: Icon, ...growth }) => (
							<div
								className="flex flex-col justify-between bg-card p-4 text-foreground sm:p-6"
								key={growth.id}
							>
								<div>
									<h4 className="mb-2 font-semibold text-xl sm:mb-3 sm:text-2xl">
										{growth.title}
									</h4>
									<p className="text-base text-muted-foreground sm:text-lg">
										{growth.description}
									</p>
								</div>
								<div className="flex items-center justify-between">
									<Icon className="size-8 sm:size-10" />
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
