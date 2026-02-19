import Image from "next/image";

import { Badge } from "@/components/ui/badge";

import { Tape } from "@/assets/corners";
import { Logo } from "@/assets/logo";

import { WHY_US } from "@/data/why-us";
import { cn } from "@/lib/utils";

export function WhyChooseUs() {
	return (
		<section className="container mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-10 sm:px-6 sm:py-12 md:py-16 lg:py-28">
			<Badge>
				<div>
					<Tape className="absolute -top-1.5 -left-1.5 size-4! text-muted-foreground/20" />
				</div>
				Why Choose Us?
			</Badge>
			<h2 className="text-center font-semibold text-2xl leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
				Reason for Choosing Piptan
			</h2>
			<div className="mt-6 grid w-full grid-cols-1 gap-6 md:mt-9 md:grid-cols-3 md:gap-0 md:space-y-0 lg:items-center">
				{WHY_US.map((item) => (
					<div
						className={cn(
							"space-y-4 md:space-y-9",
							item.lists && "md:space-y-9"
						)}
						key={item.id}
					>
						{item.lists
							? item.lists.map(({ icon: Icon, ...list }) => (
									<div
										className={cn(
											"group relative z-10 w-full sm:max-w-sm md:max-w-sm lg:mx-auto",
											item.id === "left"
												? "md:even:-translate-x-3 md:odd:translate-x-4 lg:even:-translate-x-6 lg:odd:translate-x-9"
												: "md:even:translate-x-4 md:odd:-translate-x-3 lg:even:translate-x-9 lg:odd:-translate-x-4"
										)}
										key={list.id}
									>
										<div className="absolute -top-4 -right-6 z-10 flex h-16 w-12 translate-y-px items-center justify-center rounded-tr-2xl rounded-bl-2xl bg-primary backdrop-blur-lg transition-colors before:absolute before:top-0 before:right-full before:size-4 before:rounded-tl-2xl before:bg-primary-dark before:transition-colors group-hover:bg-accent/80 group-hover:before:bg-accent-dark sm:h-18 sm:w-14 sm:rounded-tr-3xl sm:rounded-bl-3xl lg:before:rounded-tl-3xl">
											<Icon className="size-5 text-primary-foreground sm:size-6" />
										</div>
										<div className="relative overflow-hidden rounded-2xl rounded-br-none border bg-card p-5 sm:p-6 md:p-8">
											<h3 className="mb-2 font-semibold text-lg sm:mb-3 sm:text-xl">
												{list.title}
											</h3>
											<p className="line-clamp-2 text-muted-foreground text-sm sm:text-base">
												{list.description}
											</p>
											<div className="absolute inset-0 translate-y-full bg-gray-800/95 p-5 text-card opacity-0 blur-lg backdrop-blur-xl transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none sm:p-6 md:p-8">
												<p>{list.description}</p>
											</div>
										</div>
									</div>
								))
							: item.image && (
									<div
										className="relative mx-auto flex aspect-square max-w-xs items-center justify-center overflow-hidden rounded-full md:max-w-sm"
										key={item.id}
									>
										<Logo className="relative z-20 scale-150 opacity-50 sm:scale-175" />
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
