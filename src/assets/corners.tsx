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

export const BGCorners = (props: SVGProps) => {
	return (
		<svg
			{...props}
			aria-hidden="true"
			fill="none"
			height="654"
			viewBox="0 0 654 654"
			width="654"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M309.607 309.607H0.500977C0.770389 139.012 139.012 0.77039 309.607 0.500977V309.607Z"
				stroke="currentColor"
			/>
			<path
				d="M344.393 0.500977C514.988 0.77062 653.229 139.012 653.498 309.607H344.393V0.500977Z"
				stroke="currentColor"
			/>
			<path
				d="M653.5 344.393V653.499C482.905 653.229 344.663 514.988 344.394 344.393H653.5Z"
				stroke="currentColor"
			/>
		</svg>
	);
};

export const CornerRight = (props: SVGProps) => {
	return (
		<svg
			{...props}
			aria-hidden="true"
			fill="none"
			height="311"
			viewBox="0 0 311 311"
			width="311"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0.5 0.500977C171.095 0.77062 309.336 139.012 309.605 309.607H0.5V0.500977Z"
				stroke="currentColor"
			/>
		</svg>
	);
};

export const CornerTopLeft = (props: SVGProps) => {
	return (
		<svg
			{...props}
			aria-hidden="true"
			fill="none"
			height="311"
			viewBox="0 0 311 311"
			width="311"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M309.607 309.607H0.500977C0.770389 139.012 139.012 0.77039 309.607 0.500977V309.607Z"
				stroke="currentColor"
			/>
		</svg>
	);
};
