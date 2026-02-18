import { Route } from "next";

export type NavLink = {
	id: number;
	label: string;
	href: Route;
};

export const NAV_LINKS: NavLink[] = [
	{
		id: 1,
		label: "Home",
		href: "/",
	},
	{
		id: 2,
		label: "Services",
		href: "/services",
	},
	{
		id: 3,
		label: "About",
		href: "/about",
	},
	{
		id: 4,
		label: "Blog",
		href: "/blog",
	},
	{
		id: 5,
		label: "Our Team",
		href: "/",
	},
	{
		id: 6,
		label: "Contact",
		href: "/contact",
	},
];
