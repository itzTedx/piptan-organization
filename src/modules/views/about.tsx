import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function About() {
	return (
		<section className="container mx-auto grid max-w-6xl grid-cols-1 gap-8 px-0 py-10 sm:gap-10 sm:py-12 md:grid-cols-2 md:gap-12 md:py-16 lg:py-24 xl:py-32">
			<div className="flex aspect-square max-w-sm items-center justify-center justify-self-center rounded-full bg-muted sm:max-w-none">
				<p className="text-center font-medium text-base uppercase tracking-wide sm:text-lg md:text-xl">
					<strong className="font-semibold text-7xl sm:text-8xl md:text-9xl">9</strong>
					<br />
					years Experience
				</p>
			</div>
			<div className="space-y-4 sm:space-y-6">
				<Badge>About us</Badge>
				<h2 className="font-semibold text-3xl leading-tight sm:text-4xl md:text-5xl">
					Experts in Providing Investment Consulting Services
				</h2>
				<ul className="space-y-2 font-medium text-base sm:text-lg">
					<li>Investment Strategy Development</li>
					<li>Risk Management</li>
				</ul>
				<p className="text-base text-muted-foreground leading-relaxed sm:text-lg">
					Every pleasure is to be welcomed and every pain avoided. But in
					certain circumstances and owing to the claims of duty obligations of
					business it will frequently occur that.
				</p>
				<Button>More about us</Button>
			</div>
		</section>
	);
}
