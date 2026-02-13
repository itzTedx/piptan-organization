import Image from "next/image";

import { Badge } from "@/components/ui/badge";

import { Logo } from "@/assets/logo";

import { WHY_US } from "@/data/why-us";
import { cn } from "@/lib/utils";

export function WhyChooseUs() {
	return (
		<section className="container mx-auto flex max-w-7xl flex-col items-center gap-4 py-10 sm:py-12 md:py-16 lg:py-28">
			<Badge>Why Choose Us?</Badge>
			<h2 className="text-center font-semibold text-3xl leading-tight sm:text-4xl md:text-5xl">
				Reason for Choosing Piptan
			</h2>
			<div className="mt-9 grid w-full grid-cols-3 items-center">
				{WHY_US.map((item) => (
					<div className={"space-y-9"} key={item.id}>
						{item.lists
							? item.lists.map(({ icon: Icon, ...list }) => (
									<div
										className={cn(
											"relative z-10 max-w-sm rounded-2xl rounded-br-none border bg-card p-8",
											item.id === "left"
												? "odd:translate-x-9 even:-translate-x-6"
												: "odd:-translate-x-4 even:translate-x-9"
										)}
										key={list.id}
									>
										<div className="absolute -top-4 -right-6 flex h-18 w-14 items-center justify-center rounded-tr-3xl rounded-bl-3xl bg-primary before:absolute before:top-0 before:right-full before:size-4 before:rounded-tl-3xl before:bg-primary-dark">
											<Icon className="size-6 text-primary-foreground" />
										</div>
										<h3 className="mb-3 font-semibold text-xl">{list.title}</h3>
										<p className="line-clamp-2 text-muted-foreground">
											{list.description}
										</p>
									</div>
								))
							: item.image && (
									<div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-full">
										<Logo className="relative z-20 scale-175 opacity-50" />
										<div className="absolute inset-0 z-10 bg-primary/10 mix-blend-color" />
										<Image
											alt={item.alt}
											className="object-cover saturate-0"
											fill
											src={item.image}
										/>
									</div>
								)}
					</div>
				))}
			</div>
		</section>
	);
}
