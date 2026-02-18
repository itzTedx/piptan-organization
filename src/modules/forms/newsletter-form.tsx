"use client";

import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";

const newsletterSchema = z.object({
	email: z.email("Please enter a valid email address."),
});

export function NewsletterForm({ className }: { className?: string }) {
	const form = useForm({
		defaultValues: {
			email: "",
		},
		validators: {
			onSubmit: newsletterSchema,
		},
		onSubmit: async ({ value }) => {
			toast("You subscribed to the newsletter with:", {
				description: (
					<pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
						<code>{JSON.stringify(value, null, 2)}</code>
					</pre>
				),
			});
		},
	});

	return (
		<form
			className={cn("mt-6", className)}
			onSubmit={(event) => {
				event.preventDefault();
				form.handleSubmit();
			}}
		>
			<FieldGroup className="flex flex-col gap-3 sm:flex-row sm:items-center">
				<form.Field name="email">
					{(field) => {
						const isInvalid =
							field.state.meta.isTouched && !field.state.meta.isValid;

						return (
							<Field className="flex-1" data-invalid={isInvalid}>
								<FieldLabel className="sr-only" htmlFor={field.name}>
									Email address
								</FieldLabel>
								<Input
									aria-invalid={isInvalid}
									autoComplete="email"
									id={field.name}
									name={field.name}
									onBlur={field.handleBlur}
									onChange={(event) => field.handleChange(event.target.value)}
									placeholder="you@example.com"
									type="email"
									value={field.state.value}
								/>
								{isInvalid && <FieldError errors={field.state.meta.errors} />}
							</Field>
						);
					}}
				</form.Field>
				<Button className="w-full sm:w-auto" type="submit">
					Subscribe
				</Button>
			</FieldGroup>
		</form>
	);
}
