import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Tape } from "@/assets/corners";
import { IconCheckmark } from "@/assets/icon/checkmark";

import { ProgressBar } from "./components/animated-progress";

const SKILLS = [
	{
		title: "Personal Consulting Service",
		description: "Complete account of the system all expound the teachings.",
		value: 38.5,
	},
	{
		title: "Corporate Consulting Service",
		description:
			"Right to find fault with a man who chooses to enjoy produces.",
		value: 61.5,
	},
];

export function Skills() {
	return (
		<section className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32">
			<div className="container mx-auto grid max-w-7xl grid-cols-2 gap-6 md:gap-12">
				<div className="relative aspect-3/4 h-full">
					<Image
						alt="Skills"
						className="object-contain"
						fill
						src="/images/skills.webp"
					/>
				</div>
				<div className="space-y-6">
					<Badge>
						<div>
							<Tape className="absolute -top-1.5 -left-1.5 size-4! text-muted-foreground/20" />
						</div>
						Our Skills
					</Badge>
					<h2 className="text-balance font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
						We keep ourselves up to make your Dreams come true
					</h2>
					<p className="text-balance text-lg text-muted-foreground leading-relaxed tracking-wide">
						Ever undertakes labor physical exercise except obtain some advantage
						from it? but who has any rights to find fault with man who pleasure
						that has no annoying consequences.
						<br />
						<br />
						Physical exercise except to obtain some advantage,
					</p>

					<ul className="space-y-6">
						{SKILLS.map((skill) => (
							<li className="grid grid-cols-2 gap-6" key={skill.title}>
								<div className="flex gap-4">
									<IconCheckmark className="mt-2 size-5 shrink-0 text-primary" />
									<div>
										<h3 className="text-balance font-medium text-2xl">
											{skill.title}
										</h3>
										<Button className="text-lg" size="lg" variant="link">
											Explore Services
										</Button>
									</div>
								</div>
								<div>
									<p className="text-lg text-muted-foreground">
										{skill.description}
									</p>
									<h4 className="mt-3 font-semibold text-lg tabular-nums">
										{skill.value}%
									</h4>
									<ProgressBar value={skill.value} />
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
