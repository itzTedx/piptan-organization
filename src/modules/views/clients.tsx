import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";

import { Tape } from "@/assets/corners";
import { IconChevronRight } from "@/assets/icon/chevrons";

import { CLIENTS } from "@/data/clients";

export function Clients() {
	return (
		<section className="bg-primary">
			<div className="container mx-auto flex max-w-7xl flex-col items-center justify-center py-20 md:py-24 lg:py-32">
				<Badge className="text-card">
					<div>
						<Tape className="absolute -top-1.5 -left-1.5 size-4! text-muted/20" />
					</div>
					Our Clients
				</Badge>
				<h2 className="font-medium text-5xl text-card">
					People Who Trusted Us
				</h2>

				<div className="mt-12 divide-y divide-muted/10">
					<ul className="grid grid-cols-5">
						{CLIENTS.slice(0, 5).map((client) => (
							<li
								className="relative flex aspect-video items-center justify-center border-muted/10 border-r p-6 last:border-r-0 sm:p-9"
								key={client.id}
							>
								<Image
									alt={`Client ${client.id}`}
									height={100}
									src={client.src}
									width={160}
								/>
							</li>
						))}
					</ul>
					<ul className="grid grid-cols-5">
						{CLIENTS.slice(5, 10).map((client) => (
							<li
								className="relative flex aspect-video items-center justify-center border-muted/10 border-r p-6 last:border-r-0 sm:p-9"
								key={client.id}
							>
								<Image
									alt={`Client ${client.id}`}
									height={100}
									src={client.src}
									width={160}
								/>
							</li>
						))}
					</ul>
				</div>

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
		</section>
	);
}
