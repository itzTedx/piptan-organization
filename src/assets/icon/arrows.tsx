export const IconArrowRightUp = (props: SVGProps) => {
	return (
		<svg
			{...props}
			aria-hidden="true"
			height="20"
			viewBox="0 0 20 20"
			width="20"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g fill="currentColor">
				<line
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					x1="4"
					x2="16"
					y1="16"
					y2="4"
				/>
				<polyline
					fill="none"
					points="16 11 16 4 9 4"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
		</svg>
	);
};
