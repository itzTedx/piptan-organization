import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";

import { Tape } from "@/assets/corners";
import { IconChevronRight } from "@/assets/icon/chevrons";
import { Path } from "@/assets/path";

import { HOW_WE_WORKS } from "@/data/how-we-works";

export function HowWeWorks() {
	return (
		<section className="bg-card py-10 sm:py-12 md:py-16 lg:py-28">
			<div className="container mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:px-6">
				<Badge>
					<div>
						<Tape className="absolute -top-1.5 -left-1.5 size-4! text-muted-foreground/20" />
					</div>
					How we works?
				</Badge>
				<h2 className="text-center font-semibold text-2xl leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
					We Plan for your Growth
				</h2>

				<ul className="relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-6">
					{HOW_WE_WORKS.map((item) => (
						<li
							className="group relative z-10 flex flex-col items-center p-4 sm:p-6 md:items-start md:odd:mt-0 lg:odd:mt-12"
							key={item.id}
						>
							<div className="relative aspect-square w-full max-w-52 sm:size-44 md:size-52">
								<Image
									alt={item.title}
									className="z-10 rounded-2xl rounded-br-none object-cover shadow-xl sm:rounded-3xl md:rounded-4xl"
									fill
									src={item.image}
								/>
								<div className="absolute inset-0 -z-1 rotate-12 rounded-2xl rounded-br-none border border-primary/50 bg-primary/5 sm:rounded-3xl md:rounded-4xl" />
							</div>
							<h3 className="mt-6 font-semibold text-xl sm:mt-9 sm:text-2xl">
								{item.title}
							</h3>
							<p className="mt-2 text-center text-base text-muted-foreground sm:mt-3 sm:text-lg md:text-start">
								{item.description}
							</p>

							<div className="mt-6 flex h-12 w-full items-end gap-2 overflow-hidden border-b sm:mt-9 sm:h-14">
								<p className="translate-y-4 font-semibold text-4xl text-primary-dark/10 transition-all ease-out group-hover:translate-y-0 group-hover:text-primary sm:text-5xl md:text-6xl">
									{item.id}
								</p>
								<p className="inline text-base text-primary sm:text-xl">
									st step
								</p>
							</div>
						</li>
					))}
					<Path className="-translate-1/2 absolute top-1/3 left-1/2 hidden text-muted-foreground/30 md:block" />
				</ul>
				<p className="mt-4 flex w-full flex-wrap justify-center gap-2 px-2 text-center font-medium tracking-wide sm:mt-6 sm:gap-3 md:text-lg">
					Start Investing with Smart Ideas{" "}
					<Link
						className="group inline-flex items-center gap-2 transition-colors hover:text-accent"
						href="/"
					>
						<IconChevronRight className="size-3 transition-transform duration-300 ease-out group-hover:translate-x-1" />
						Appointment
					</Link>
				</p>
			</div>
		</section>
	);
}
