import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

import { IconChevronRight } from "@/assets/icon/chevrons";

import { BLOGS } from "@/data/blogs";

export function Blogs() {
	return (
		<section className="bg-card py-10 sm:py-12 md:py-16 lg:py-28">
			<div className="container mx-auto flex max-w-6xl flex-col items-center gap-4">
				<Badge>Blogs</Badge>
				<h2 className="text-center font-semibold text-3xl leading-tight sm:text-4xl md:text-5xl">
					Recent from Piptan Organization
				</h2>

				<div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3">
					{BLOGS.map((blog) => (
						<Card key={blog.id}>
							<CardContent>
								<Badge variant="secondary">
									{blog.category}
								</Badge>
								<div>
									<p>
										On {blog.createdAt}
									</p>
									<p>
										by {blog.author}
									</p>
								</div>


								<CardTitle>{blog.title}</CardTitle>
								<Button variant='ghost'>
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
