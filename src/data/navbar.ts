import { Route } from "next";

export type NavLink = {
	label: string;
	href: Route;
};

export const NAV_LINKS: NavLink[] = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "Services",
		href: "/services",
	},
	{
		label: "About",
		href: "/about",
	},
	{
		label: "Blog",
		href: "/blog",
	},
	{
		label: "Contact",
		href: "/contact",
	},
];
