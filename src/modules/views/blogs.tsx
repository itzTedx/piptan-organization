import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

import { IconChevronRight } from "@/assets/icon/chevrons";

import { BLOGS } from "@/data/resources";

export function Blogs() {
	return (
		<section className="bg-card py-10 sm:py-12 md:py-16 lg:py-28">
			<div className="container mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 sm:px-6">
				<Badge>Blogs</Badge>
				<h2 className="text-center font-semibold text-2xl leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
					Recent from Piptan Organization
				</h2>

				<div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
					{BLOGS.map((blog) => (
						<Card className="py-4 sm:py-6" key={blog.id}>
							<CardContent className="space-y-3 px-4 sm:px-6">
								<Badge className="text-xs sm:text-sm" variant="secondary">
									{blog.category}
								</Badge>
								<div className="flex flex-wrap items-center gap-2 text-muted-foreground text-xs sm:text-sm">
									<p>On {blog.createdAt}</p>
									<div className="size-1 rounded-full bg-muted-foreground" />
									<p>by {blog.author}</p>
								</div>
								<div className="relative aspect-4/3 overflow-hidden rounded-xl sm:rounded-2xl">
									<Image
										alt={blog.title}
										className="object-cover"
										fill
										src={blog.image}
									/>
								</div>

								<CardTitle className="font-medium text-lg sm:text-xl md:text-2xl">
									{blog.title}
								</CardTitle>
								<Button className="text-sm sm:text-base" variant="ghost">
									Explore more <IconChevronRight />
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
