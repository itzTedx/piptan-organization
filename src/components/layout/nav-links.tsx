"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_LINKS } from "@/data/navbar";

export function NavLinks() {
	const pathname = usePathname();

	return (
		<ul className="container mx-auto flex items-center gap-4">
			{NAV_LINKS.map((link) => {
				const isActive =
					link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

				return (
					<li key={link.href}>
						<Link
							className={`p-3 font-semibold transition-colors ${
								isActive
									? "text-primary"
									: "text-muted-foreground hover:text-foreground"
							}`}
							href={link.href}
						>
							{link.label}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
