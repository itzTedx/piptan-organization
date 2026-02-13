import Link from "next/link";

import { FOOTER_SITE_MAP } from "@/data/footer";

export function Footer() {
	return (
		<footer>
			<section className="bg-gray-900 py-4">
				<div className="container mx-auto flex items-center justify-between">
					<p className="font-light text-muted/60 text-sm tracking-wide">
						&copy; {new Date().getFullYear()} Smart Ideas. All rights reserved.
					</p>
					<ul className="flex items-center gap-4">
						{FOOTER_SITE_MAP.map((site) => (
							<li key={site.id}>
								<Link
									className="text-muted/60 text-sm tracking-wide hover:text-primary"
									href={site.href}
								>
									{site.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</section>
		</footer>
	);
}
