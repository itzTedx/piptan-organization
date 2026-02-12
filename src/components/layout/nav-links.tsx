import Link from "next/link";

import { NAV_LINKS } from "@/data/navbar";

export function NavLinks() {
	return (
		<ul className="flex items-center gap-4">
			{NAV_LINKS.map((link) => (
				<li key={link.href}>
					<Link className="p-3 font-medium" href={link.href}>
						{link.label}
					</Link>
				</li>
			))}
		</ul>
	);
}
