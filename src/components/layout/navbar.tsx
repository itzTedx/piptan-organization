import Image from "next/image";

import { Separator } from "../ui/separator";

export function Navbar() {
	return (
		<header>
			<div className="container mx-auto flex items-center justify-between gap-4">
				<div className="flex items-center gap-6">
					<p>Piptan Organization</p>
					<Separator orientation="vertical" />
					<div className="flex items-center gap-3">
						<Image
							alt="Best Investment Advisory Firm"
							height={50}
							src="/icons/award-1.png"
							width={50}
						/>
						<p className="text-muted-foreground text-sm">
							Leading providers of investment
							<br />
							advisory solutions.
						</p>
					</div>
				</div>
				<div>Have Questions?</div>
			</div>
		</header>
	);
}
