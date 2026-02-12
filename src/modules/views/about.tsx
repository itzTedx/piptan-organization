import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function About() {
	return (
		<section className="container mx-auto grid max-w-6xl grid-cols-1 gap-12 py-12 md:grid-cols-2 md:py-16 lg:py-24 xl:py-32">
			<div className="flex aspect-square items-center justify-center rounded-full bg-muted">
				<p className="text-center font-medium text-xl uppercase tracking-wide">
					<strong className="font-semibold text-9xl">9</strong>
					<br />
					years Experience
				</p>
			</div>
			<div className="space-y-6">
				<Badge>About us</Badge>
				<h2 className="font-semibold text-5xl">
					Experts in Providing Investment Consulting Services
				</h2>
				<ul className="space-y-3 font-medium text-lg">
					<li>Investment Strategy Development</li>
					<li>Risk Management</li>
				</ul>
				<p className="text-lg text-muted-foreground leading-relaxed">
					Every pleasure is to be welcomed and every pain avoided. But in
					certain circumstances and owing to the claims of duty obligations of
					business it will frequently occur that.
				</p>
				<Button>More about us</Button>
			</div>
		</section>
	);
}
