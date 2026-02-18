import Image from "next/image";

import { Badge } from "@/components/ui/badge";

import { IconFacebook, IconLinkedin, IconX } from "@/assets/icon/socials";
import { IconSupport } from "@/assets/icon/support";

import { EnquiryForm } from "../forms/enquiry-form";

export function Cta() {
	return (
		<section className="bg-card px-4 py-8 sm:px-6 sm:py-12">
			<div className="container relative mx-auto grid grid-cols-1 items-center gap-8 overflow-hidden rounded-xl bg-gray-800 p-6 text-background sm:rounded-2xl sm:p-8 md:grid-cols-2 md:gap-12 md:p-12 lg:p-24 lg:px-32">
				<div className="relative z-10 min-w-0">
					<Badge className="text-accent">Appointment</Badge>
					<h2 className="mt-3 mb-4 font-semibold text-xl sm:mb-6 sm:text-2xl md:text-4xl">
						Send your proposal to us
					</h2>
					<EnquiryForm />
				</div>
				<div className="relative z-30 min-w-0">
					<IconSupport />
					<ul className="mt-12 space-y-9 text-sm sm:text-base">
						<li>
							<h3 className="font-medium">Office Hours</h3>
							<p className="mt-1 font-semibold text-muted">
								<span>Monday</span>
								<span> 9:00 AM - 5:00 PM</span>
							</p>
						</li>
						<li>
							<h3 className="font-medium">Phone</h3>
							<p className="mt-1 font-semibold text-muted">+971 54 321 9876</p>
						</li>
						<li>
							<h3 className="font-medium">Email</h3>
							<p className="mt-1 font-semibold text-muted">+971 54 321 9876</p>
						</li>
						<li>
							<ul className="flex items-center gap-6">
								<li>
									<IconFacebook className="size-5" />
								</li>
								<li>
									<IconX className="size-5" />
								</li>
								<li>
									<IconLinkedin className="size-5" />
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<Image
					alt="Growth"
					className="absolute -right-24 bottom-0 z-20"
					height={1080}
					src="/images/growth.svg"
					width={720}
				/>
				<div className="absolute bottom-0 left-1/2 size-32 -translate-x-1/4 translate-y-8 rounded-full bg-primary sm:size-48 md:size-96 lg:size-156 lg:translate-y-12" />
			</div>
		</section>
	);
}
