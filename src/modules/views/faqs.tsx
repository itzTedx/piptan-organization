import Image from "next/image";
import Link from "next/link";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { FAQS } from "@/data/faqs";

export function Faqs() {
	return (
		<section className="bg-card py-10 sm:py-12 md:py-16 lg:py-28">
			<div className="container mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:gap-6 sm:px-6 md:grid-cols-[.9fr_1fr] md:gap-9 lg:gap-12 xl:gap-16">
				<div className="relative aspect-6/8 max-h-[320px] w-full max-w-sm justify-self-center overflow-hidden rounded-2xl rounded-br-none md:max-h-none md:max-w-none md:rounded-full md:rounded-br-none">
					<Image
						alt="FAQs"
						className="object-cover"
						fill
						src="/images/faq.webp"
					/>

					<Button
						className="absolute right-3 bottom-3 sm:right-6 sm:bottom-6"
						nativeButton={false}
						render={<Link href="/contact" />}
						size="xs"
						variant="secondary"
					>
						Read More Q&A
					</Button>
				</div>
				<div className="flex min-w-0 flex-col gap-4">
					<Badge>FAQs</Badge>
					<h2 className="font-semibold text-2xl leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
						Get the Answers to Common Questions
					</h2>

					<div className="rounded-xl bg-linear-to-b from-primary/10 to-primary/5 p-2 sm:rounded-2xl sm:p-3">
						<Accordion className="space-y-3 sm:space-y-4" defaultValue={["01"]}>
							{FAQS.map((faq) => (
								<AccordionItem
									className="overflow-hidden rounded-lg bg-card sm:rounded-xl"
									key={faq.id}
									value={faq.id}
								>
									<AccordionTrigger className="p-3 text-left text-sm aria-expanded:border-b-border sm:p-5 sm:text-base">
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className="p-3 text-sm sm:p-5 sm:text-base">
										{faq.content}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</div>
		</section>
	);
}
