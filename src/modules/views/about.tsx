import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { BGCorners, Tape } from "@/assets/corners";
import { IconList } from "@/assets/icon/list";

import CircularText from "./components/circular-text";

export function About() {
	return (
		<section className="container grid max-w-6xl grid-cols-1 gap-8 py-12 sm:gap-10 md:grid-cols-2 md:gap-12 md:py-16 lg:gap-20 lg:py-24 xl:py-32">
			<div className="relative hidden aspect-square max-w-sm items-center justify-center justify-self-center rounded-full bg-muted sm:max-w-none md:flex">
				<CircularText
					className="absolute size-[150%] text-foreground uppercase md:size-[115%]"
					text="Handling tough Financial tasks • Giving Futures to your Investment • Giving wings to financial dreams • Making dreams come true • "
				/>
				<p className="text-center font-medium text-base uppercase tracking-wide sm:text-lg md:text-xl">
					<strong className="font-semibold text-7xl sm:text-8xl md:text-9xl">
						9
					</strong>
					<br />
					years Experience
				</p>
				<BGCorners className="-translate-10 absolute inset-0 -z-10 size-[115%] text-primary" />
			</div>
			<div className="space-y-4 sm:space-y-6">
				<Badge>
					<div>
						<Tape className="absolute -top-1.5 -left-1.5 size-4! text-muted-foreground/20" />
					</div>
					About us
				</Badge>
				<h2 className="font-semibold text-3xl leading-tight sm:text-4xl md:text-5xl">
					Experts in Providing Investment Consulting Services
				</h2>
				<ul className="space-y-4 font-medium text-base sm:text-lg">
					<li>
						<IconList className="mr-3 inline" /> Investment Strategy Development
					</li>
					<li>
						<IconList className="mr-3 inline" /> Risk Management
					</li>
				</ul>
				<p className="text-base text-muted-foreground leading-relaxed sm:text-lg">
					Every pleasure is to be welcomed and every pain avoided. But in
					certain circumstances and owing to the claims of duty obligations of
					business it will frequently occur that.
				</p>
				<Button size="lg">
					<span className="relative z-10">More about us</span>

					<div className="translate-full group-hover/button:translate-0 absolute inset-0 rounded-full bg-accent transition-transform duration-300 ease-out" />
				</Button>
			</div>
		</section>
	);
}
