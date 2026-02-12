export const Corner = (props: SVGProps) => {
	return (
		<svg
			{...props}
			fill="none"
			height="20"
			viewBox="0 0 20 20"
			width="20"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M20 0C8.95431 0 0 8.95431 0 20V0H20Z" fill="currentColor" />
		</svg>
	);
};

export const Tape = (props: SVGProps) => {
	return (
		<svg
			{...props}
			fill="none"
			height="14"
			viewBox="0 0 14 14"
			width="14"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M14 0H0V14L14 0Z" fill="currentColor" />
		</svg>
	);
};
