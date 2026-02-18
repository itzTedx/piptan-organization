export const IconList = (props: SVGProps) => {
	return (
		<svg
			{...props}
			aria-hidden="true"
			fill="none"
			height="24"
			viewBox="0 0 37 24"
			width="37"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V24H12C5.37258 24 0 18.6274 0 12V12Z"
				fill="#FF6986"
			/>
			<path
				d="M11.5 12L36 12"
				stroke="#262E39"
				strokeLinecap="round"
				strokeWidth="2"
			/>
			<path
				d="M30 6L36 12L30 18"
				stroke="#262E39"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</svg>
	);
};
