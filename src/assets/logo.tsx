import Image from "next/image";

interface LogoProps
	extends Omit<
		React.ComponentProps<typeof Image>,
		"src" | "height" | "width" | "alt"
	> {}

export const Logo = ({ className, ...props }: LogoProps) => {
	return (
		<Image
			{...props}
			alt="Piptan Organization"
			className={className}
			height={60}
			src="/piptan-logo.svg"
			width={200}
		/>
	);
};
