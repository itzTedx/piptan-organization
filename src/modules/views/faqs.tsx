import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

import { FAQS } from "@/data/faqs";

export function Faqs() {
	return (
		<section className="py-10 sm:py-12 md:py-16 lg:py-28">
			<div className="container mx-auto flex max-w-7xl flex-col items-center gap-4">
				<Badge>FAQs</Badge>
				<h2 className="text-center font-semibold text-3xl leading-tight sm:text-4xl md:text-5xl">
					Get the Answers to Common Questions
				</h2>
				<Accordion className="max-w-lg" defaultValue={["01"]}>
					{FAQS.map((faq) => (
						<AccordionItem key={faq.id} value={faq.id}>
							<AccordionTrigger>{faq.question}</AccordionTrigger>
							<AccordionContent>{faq.content}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}
