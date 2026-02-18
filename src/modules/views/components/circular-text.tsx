"use client";

import React from "react";

import { cn } from "@/lib/utils";

interface CircularTextProps {
	text: string;
	className?: string;
}

const CircularText: React.FC<CircularTextProps> = ({
	text,
	className = "",
}) => {
	const letters = Array.from(text);

	return (
		<div
			className={cn(
				"relative m-0 mx-auto h-[200px] w-[200px] origin-center rounded-full text-center",
				className
			)}
		>
			{letters.map((letter, i) => {
				const rotationDeg = (360 / letters.length) * i;
				const factor = Math.PI / letters.length;
				const x = factor * i;
				const y = factor * i;
				const transform = `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`;

				return (
					<span
						className="absolute inset-0 inline-block font-medium text-lg"
						key={`${letter}-${i + 1}`}
						style={{ transform, WebkitTransform: transform }}
					>
						{letter}
					</span>
				);
			})}
		</div>
	);
};

export default CircularText;
