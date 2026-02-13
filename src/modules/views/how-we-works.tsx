import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";

import { IconChevronRight } from "@/assets/icon/chevrons";
import { Path } from "@/assets/path";

import { HOW_WE_WORKS } from "@/data/how-we-works";

export function HowWeWorks() {
	return (
		<section className="bg-card py-10 sm:py-12 md:py-16 lg:py-28">
			<div className="container mx-auto flex max-w-6xl flex-col items-center gap-4">
				<Badge>How we works?</Badge>
				<h2 className="text-center font-semibold text-3xl leading-tight sm:text-4xl md:text-5xl">
					We Plan for your Growth
				</h2>

				<ul className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{HOW_WE_WORKS.map((item) => (
						<li className="group relative z-10 p-6 odd:mt-12" key={item.id}>
							<div className="relative aspect-square size-52">
								<Image
									alt={item.title}
									className="z-10 rounded-4xl rounded-br-none object-cover shadow-xl"
									fill
									src={item.image}
								/>
								<div className="absolute inset-0 -z-1 rotate-12 rounded-4xl rounded-br-none border border-primary/50 bg-primary/5" />
							</div>
							<h3 className="mt-9 font-semibold text-2xl">{item.title}</h3>
							<p className="mt-3 text-lg text-muted-foreground">
								{item.description}
							</p>

							<div className="mt-9 flex h-14 w-full items-end gap-2 overflow-hidden border-b">
								<p className="translate-y-6 font-semibold text-6xl text-primary-dark/10 transition-all ease-out group-hover:translate-y-0 group-hover:text-primary">
									{item.id}
								</p>
								<p className="inline text-primary text-xl">st step</p>
							</div>
						</li>
					))}
					<Path className="-translate-1/2 absolute top-1/3 left-1/2 text-muted-foreground/30" />
				</ul>
				<p className="mt-4 flex w-full flex-wrap justify-center gap-2 px-2 text-center font-medium text-sm tracking-wide sm:mt-6 sm:gap-3 sm:text-lg">
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
