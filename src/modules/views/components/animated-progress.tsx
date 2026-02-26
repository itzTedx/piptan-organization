"use client";

import React from "react";

import { inView } from "motion";

import { Progress } from "@/components/ui/progress";

export const ProgressBar = ({
	value,
	startValue = 0,
}: {
	value: number;
	startValue?: number;
}) => {
	const [progress, setProgress] = React.useState(startValue);
	const containerRef = React.useRef<HTMLDivElement | null>(null);

	React.useEffect(() => {
		if (!containerRef.current) return;

		const stopInView = inView(containerRef.current, () => {
			setProgress(value);
		});

		return () => {
			stopInView();
		};
	}, [value]);

	return (
		<div ref={containerRef}>
			<Progress value={progress} />
		</div>
	);
};
