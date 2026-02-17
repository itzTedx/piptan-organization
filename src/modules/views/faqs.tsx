import Image from "next/image";

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
        <section className="bg-card py-10 sm:py-12md:py-16 lg:py-28">
            <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:gap-6 md:grid-cols-[.9fr_1fr] md:gap-9 lg:gap-12 xl:gap-16">
                <div className="relative aspect-6/8 overflow-hidden rounded-full rounded-br-none">
                    <Image
                        alt="FAQs"
                        className="object-cover"
                        fill
                        src="/images/faq.webp"
                    />

                    <Button className="absolute right-6 bottom-6" variant="secondary">
                        Read More Q&A
                    </Button>
                </div>
                <div className="flex flex-col gap-4">
                    <Badge>FAQs</Badge>
                    <h2 className="font-semibold text-3xl leading-tight sm:text-4xl md:text-5xl">
                        Get the Answers to Common Questions
                    </h2>

                    <div className="rounded-2xl bg-linear-to-b from-primary/10 to-primary/5 p-3">
                        <Accordion className="space-y-4" defaultValue={["01"]}>
                            {FAQS.map((faq) => (
                                <AccordionItem
                                    className="overflow-hidden rounded-xl bg-card"
                                    key={faq.id}
                                    value={faq.id}
                                >
                                    <AccordionTrigger className="p-5 aria-expanded:border-b-border">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="p-5">
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
