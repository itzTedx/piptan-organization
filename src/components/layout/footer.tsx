import { Route } from "next";
import Link from "next/link";

import { IconChevronRight } from "@/assets/icon/chevrons";
import { IconMap } from "@/assets/icon/map";
import { Logo } from "@/assets/logo";

import { FOOTER_SITE_MAP } from "@/data/footer";
import { NAV_LINKS } from "@/data/navbar";
import { BLOGS } from "@/data/resources";
import { NewsletterForm } from "@/modules/forms/newsletter-form";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export const YEAR = new Date().getFullYear();

export function Footer() {
	return (
		<footer className="bg-card">
			<section className="container mx-auto grid max-w-7xl grid-cols-1 gap-9 py-12 md:grid-cols-2 md:py-16 lg:py-24">
				<div>
					<Logo />
					<p className="mt-4 font-medium text-lg tracking-wide">
						&copy; {YEAR}{" "}
						<span className="text-primary">Piptan Organization.</span> All
						Rights Reserved.
					</p>
					<p className="mt-4 text-balance text-lg text-muted-foreground">
						Provides advice & guidance to clients regarding their investments &
						manage their investment portfolios.
					</p>
				</div>
				<div>
					<h3 className="font-semibold text-2xl">Newsletter</h3>
					<p className="text-muted-foreground">
						By submitting this form, you consent to receive marketing updates
						from Piptan Organization.
					</p>
					<NewsletterForm className="mt-4" />
				</div>
			</section>
			<section className="container mx-auto grid max-w-7xl grid-cols-1 gap-9 pb-12 sm:grid-cols-2 md:grid-cols-4 md:pb-16 lg:pb-24">
				<div>
					<h4 className="border-b pb-3 font-semibold text-2xl">
						Office Location
					</h4>
					<ul className="mt-4">
						<li>
							<h5 className="font-semibold text-xl">Head Office</h5>
							<p className="py-3 text-lg text-muted-foreground">
								280 Granite Run Drive Suite Hobert, LA 90010, United States.
							</p>
							<Link className="flex items-center gap-3" href="/">
								<div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
									<IconMap className="size-6 text-primary" />
								</div>
								<span className="font-medium text-lg">Google Maps</span>
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h4 className="border-b pb-3 font-semibold text-2xl">Company</h4>
					<ul className="mt-4 space-y-3">
						{NAV_LINKS.map((nav) => (
							<li key={nav.id}>
								<Link
									className="flex items-center gap-3 font-medium text-muted-foreground hover:text-primary"
									href={nav.href}
								>
									<IconChevronRight className="size-3" />
									{nav.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h4 className="border-b pb-3 font-semibold text-2xl">Essentials</h4>
					<ul className="mt-4 space-y-3">
						{NAV_LINKS.map((nav) => (
							<li key={nav.id}>
								<Link
									className="flex items-center gap-3 font-medium text-muted-foreground hover:text-primary"
									href={nav.href}
								>
									<IconChevronRight className="size-3" />
									{nav.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h4 className="border-b pb-3 font-semibold text-2xl">Popular Post</h4>
					<ul className="mt-4 mb-3 space-y-3">
						{BLOGS.splice(0, 2).map((blog) => (
							<li key={blog.id}>
								<Link
									className="flex flex-col gap-2 font-medium hover:text-primary"
									href={`/blog/${blog.id}` as Route}
								>
									<Badge>{blog.category}</Badge>
									<h5 className="font-medium text-lg">{blog.title}</h5>
								</Link>
							</li>
						))}
					</ul>
					<Button variant="link">View all posts</Button>
				</div>
			</section>
			<section className="bg-gray-900 py-4">
				<div className="container mx-auto flex items-center justify-between">
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
