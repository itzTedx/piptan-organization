import { Badge } from "@/components/ui/badge";

import { HOW_WE_WORKS } from "@/data/how-we-works";

export function HowWeWorks() {
	return (
		<section className="container mx-auto flex flex-col items-center gap-4 py-10 sm:py-12 md:py-16 lg:py-28">
			<Badge>How we works?</Badge>
			<h2 className="text-center font-semibold text-3xl leading-tight sm:text-4xl md:text-5xl">
				We Plan for your Growth
			</h2>

			<ul>
				{HOW_WE_WORKS.map((item) => (
					<li key={item.id}>
						<h3>{item.title}</h3>
						<p>{item.description}</p>
					</li>
				))}
			</ul>
		</section>
	);
}
