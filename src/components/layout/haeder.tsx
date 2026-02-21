import { Fragment } from "react";

import { Route } from "next";
import Image from "next/image";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface Props {
	title: string;
	breadcrumb: { label: string; href: Route }[];
	image: string;
}

export function Header({ title, breadcrumb, image }: Props) {
	return (
		<section className="relative flex min-h-[24svh] items-center justify-center sm:min-h-[20svh]">
			<div className="container relative z-10 mx-auto mt-24 px-4 sm:mt-32 sm:px-6 md:mt-40 md:px-8">
				<h1 className="text-center font-bold text-3xl text-card sm:text-5xl md:text-6xl lg:text-7xl">
					{title}
				</h1>
				<Breadcrumb className="mt-8 mb-8 sm:mt-12 sm:mb-10 md:mt-40 md:mb-12">
					<BreadcrumbList className="flex-wrap justify-center text-card text-sm sm:text-base md:text-lg">
						{breadcrumb.map((item, index) => (
							<Fragment key={item.label}>
								<BreadcrumbItem>
									<BreadcrumbLink
										className="hover:text-accent"
										href={item.href}
									>
										{item.label}
									</BreadcrumbLink>
								</BreadcrumbItem>
								{index < breadcrumb.length - 1 && <BreadcrumbSeparator />}
							</Fragment>
						))}
					</BreadcrumbList>
				</Breadcrumb>
			</div>
			<div className="absolute inset-0 z-1 bg-gray-700/50 mix-blend-multiply" />
			<Image
				alt="Services"
				className="object-cover saturate-0"
				fill
				src={image}
			/>
		</section>
	);
}
