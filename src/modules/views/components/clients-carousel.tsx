"use client";

import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";

import { CLIENTS } from "@/data/clients";

interface Props {
	className?: string;
}

export const ClientsCarousel = ({ className }: Props) => {
	return (
		<Carousel className={className} plugins={[Autoplay({ delay: 2000 })]}>
			<CarouselContent>
				{CLIENTS.map((client) => (
					<CarouselItem className="basis-1/6" key={client.id}>
						<Image
							alt={`Client ${client.id}`}
							className="opacity-80"
							height={160}
							src={client.src}
							width={160}
						/>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
};
