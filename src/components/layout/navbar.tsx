import Image from "next/image";
import Link from "next/link";

import { Corner } from "@/assets/corners";
import { IconPhone } from "@/assets/icon/phone";
import { Logo } from "@/assets/logo";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { NavLinks } from "./nav-links";

export function Navbar() {
	return (
		<header className="relative border-b">
			<div className="container mx-auto flex items-center justify-between gap-4 border-b py-4">
				<div className="flex items-center gap-6">
					<Logo />
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
				<div className="flex items-center gap-4">
					<div className="flex items-center gap-4">
						<div className="flex size-12 items-center justify-center rounded-full bg-primary text-card">
							<IconPhone className="size-6 text-card/90" />
						</div>
						<div>
							<small className="text-muted-foreground text-sm">
								Have Questions?
							</small>
							<Link
								className="block font-semibold text-primary"
								href="tel:+971564014000"
							>
								+971 56 401 4000
							</Link>
						</div>
					</div>
					<Separator orientation="vertical" />
					<Button size="lg">Start Consultation</Button>
				</div>
			</div>
			<nav className="container mx-auto py-4">
				<NavLinks />
			</nav>
			<Corner className="absolute top-0 left-0 z-10 size-6 text-secondary-foreground" />
			<Corner className="absolute top-0 right-0 z-10 size-6 -scale-x-100 text-secondary-foreground" />
		</header>
	);
}
