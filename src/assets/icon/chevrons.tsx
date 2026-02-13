export const IconChevronRight = (props: SVGProps) => {
	return (
		<svg
			{...props}
			aria-hidden="true"
			height="18"
			viewBox="0 0 18 18"
			width="18"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g fill="currentColor">
				<polyline
					fill="none"
					points="6.5 2.75 12.75 9 6.5 15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</g>
		</svg>
	);
};

export const IconChevronLeft = (props: SVGProps) => {
	return (
		<svg
			{...props}
			aria-hidden="true"
			height="18"
			viewBox="0 0 18 18"
			width="18"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g fill="currentColor">
				<polyline
					fill="none"
					points="11.5 15.25 5.25 9 11.5 2.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</g>
		</svg>
	);
};
