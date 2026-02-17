import { Badge } from "@/components/ui/badge";

import { EnquiryForm } from "../forms/enquiry-form";

export function Cta() {
	return (
		<section className="bg-card py-12">
			<div className="container relative mx-auto grid grid-cols-1 gap-12 overflow-hidden rounded-2xl bg-gray-800 p-16 text-background md:grid-cols-2 md:p-16 lg:p-24 lg:px-32">
				<div className="relative z-10">
					<Badge>Appointment</Badge>
					<h2 className="mt-3 mb-6 font-semibold text-2xl md:text-4xl">
						Send your proposal to us
					</h2>
					<EnquiryForm />
				</div>
				<div className="relative z-10">
					<ul>
						<li>
							<h3>Office Hours</h3>

							<p>
								<span>Monday</span>
								<span>9:00 AM - 5:00 PM</span>
							</p>
						</li>
					</ul>
				</div>
				<div className="absolute bottom-0 left-1/2 size-156 -translate-x-1/4 translate-y-12 rounded-full bg-primary" />
			</div>
		</section>
	);
}
