"use client";

import * as React from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu } from "lucide-react";

import { Corner } from "@/assets/corners";
import { IconPhone } from "@/assets/icon/phone";
import { Logo } from "@/assets/logo";

import { NAV_LINKS } from "@/data/navbar";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet";

export function Navbar() {
	const [open, setOpen] = React.useState(false);
	const pathname = usePathname();

	// Close sheet on route change (e.g. after clicking a link)
	React.useEffect(() => {
		setOpen(false);
	}, [pathname]);

	return (
		<>
			<header className="relative bg-card">
				<div className="container mx-auto flex items-center justify-between gap-2 border-b px-4 py-3 sm:gap-4 sm:py-4 md:px-6">
					{/* Left: Logo + award block (desktop only) */}
					<div className="flex min-w-0 flex-1 items-center gap-4 md:gap-6">
						<Link className="shrink-0" href="/">
							<Logo className="h-9 w-auto sm:h-10 md:h-[60px] md:w-[200px]" />
						</Link>
						<Separator
							className="hidden h-10 md:block"
							orientation="vertical"
						/>
						<div className="hidden items-center gap-3 md:flex">
							<Image
								alt="Best Investment Advisory Firm"
								className="shrink-0"
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

					{/* Right: Desktop = phone + CTA | Mobile = menu trigger */}
					<div className="flex shrink-0 items-center gap-2 sm:gap-4">
						{/* Desktop: phone + CTA */}
						<div className="hidden items-center gap-4 md:flex">
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
						<Separator
							className="hidden h-10 md:block"
							orientation="vertical"
						/>
						<div className="hidden md:block">
							<Button size="lg">Start Consultation</Button>
						</div>

						{/* Mobile: sheet trigger */}
						<Sheet onOpenChange={setOpen} open={open}>
							<SheetTrigger
								className="md:hidden"
								render={
									<Button aria-label="Open menu" size="icon" variant="ghost" />
								}
							>
								<Menu className="size-6" />
							</SheetTrigger>
							<SheetContent
								className="flex w-full flex-col border-l bg-background p-0 sm:max-w-xs"
								side="right"
							>
								<SheetHeader className="border-b px-4 py-4 text-left">
									<SheetTitle className="sr-only">Menu</SheetTitle>
									<Link
										className="rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
										href="/"
										onClick={() => setOpen(false)}
									>
										<Logo className="h-9 w-auto" />
									</Link>
								</SheetHeader>
								<nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-4">
									{NAV_LINKS.map((link) => {
										const isActive =
											link.href === "/"
												? pathname === "/"
												: pathname.startsWith(link.href);
										return (
											<Link
												className={`rounded-lg px-3 py-2.5 font-semibold transition-colors ${
													isActive
														? "bg-primary/10 text-primary"
														: "text-muted-foreground hover:bg-muted hover:text-foreground"
												}`}
												href={link.href}
												key={link.href}
												onClick={() => setOpen(false)}
											>
												{link.label}
											</Link>
										);
									})}
								</nav>
								<div className="border-t p-4">
									<div className="mb-4 flex items-center gap-3 rounded-lg bg-muted/50 p-3">
										<div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-card">
											<IconPhone className="size-5 text-card/90" />
										</div>
										<div className="min-w-0">
											<small className="text-muted-foreground text-xs">
												Have Questions?
											</small>
											<Link
												className="block truncate font-semibold text-primary"
												href="tel:+971564014000"
												onClick={() => setOpen(false)}
											>
												+971 56 401 4000
											</Link>
										</div>
									</div>
									<Button
										className="w-full"
										onClick={() => setOpen(false)}
										size="lg"
									>
										Start Consultation
									</Button>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>

				<Corner className="absolute top-0 left-0 z-10 size-6 text-secondary-foreground" />
				<Corner className="absolute top-0 right-0 z-10 size-6 -scale-x-100 text-secondary-foreground" />
			</header>

			{/* Desktop nav bar */}
			<nav className="sticky top-0 z-10 hidden border-b bg-card py-4 md:block">
				<ul className="container mx-auto flex items-center gap-4">
					{NAV_LINKS.map((link) => {
						const isActive =
							link.href === "/"
								? pathname === "/"
								: pathname.startsWith(link.href);

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
			</nav>
		</>
	);
}
