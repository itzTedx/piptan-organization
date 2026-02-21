"use client";

import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupTextarea } from "@/components/ui/input-group";

const formSchema = z.object({
	name: z
		.string()
		.min(5, "Bug name must be at least 5 characters.")
		.max(32, "Bug name must be at most 32 characters."),
	email: z.email(),
	phone: z.string().max(15, "Phone number must be at most 15 characters."),
	subject: z.string().max(100, "Subject must be at most 100 characters."),
	message: z
		.string()
		.min(1, "Message is required.")
		.max(1000, "Message must be at most 1000 characters."),
});

export function EnquiryForm() {
	const form = useForm({
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			subject: "",
			message: "",
		},
		validators: {
			onSubmit: formSchema,
		},
		onSubmit: async ({ value }) => {
			toast("You submitted the following values:", {
				description: (
					<pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
						<code>{JSON.stringify(value, null, 2)}</code>
					</pre>
				),
			});
		},
	});

	return (
		<Card className="w-full py-6 shadow-md">
			<CardContent className="px-6">
				<form
					id="bug-report-form"
					onSubmit={(e) => {
						e.preventDefault();
						form.handleSubmit();
					}}
				>
					<FieldGroup>
						<form.Field name="name">
							{(field) => {
								const isInvalid =
									field.state.meta.isTouched && !field.state.meta.isValid;
								return (
									<Field data-invalid={isInvalid}>
										<FieldLabel className="sr-only" htmlFor={field.name}>
											Name
										</FieldLabel>
										<Input
											aria-invalid={isInvalid}
											autoComplete="off"
											id={field.name}
											name={field.name}
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
											placeholder="Name"
											value={field.state.value}
										/>
										{isInvalid && (
											<FieldError errors={field.state.meta.errors} />
										)}
									</Field>
								);
							}}
						</form.Field>
						<FieldGroup className="grid gap-5 md:grid-cols-2">
							<form.Field name="email">
								{(field) => {
									const isInvalid =
										field.state.meta.isTouched && !field.state.meta.isValid;
									return (
										<Field data-invalid={isInvalid}>
											<FieldLabel className="sr-only" htmlFor={field.name}>
												Email
											</FieldLabel>
											<Input
												aria-invalid={isInvalid}
												autoComplete="off"
												id={field.name}
												name={field.name}
												onBlur={field.handleBlur}
												onChange={(e) => field.handleChange(e.target.value)}
												placeholder="Email"
												value={field.state.value}
											/>
											{isInvalid && (
												<FieldError errors={field.state.meta.errors} />
											)}
										</Field>
									);
								}}
							</form.Field>
							<form.Field name="phone">
								{(field) => {
									const isInvalid =
										field.state.meta.isTouched && !field.state.meta.isValid;
									return (
										<Field data-invalid={isInvalid}>
											<FieldLabel className="sr-only" htmlFor={field.name}>
												Phone
											</FieldLabel>
											<Input
												aria-invalid={isInvalid}
												autoComplete="off"
												id={field.name}
												name={field.name}
												onBlur={field.handleBlur}
												onChange={(e) => field.handleChange(e.target.value)}
												placeholder="Phone"
												value={field.state.value}
											/>
											{isInvalid && (
												<FieldError errors={field.state.meta.errors} />
											)}
										</Field>
									);
								}}
							</form.Field>
						</FieldGroup>
						<form.Field name="subject">
							{(field) => {
								const isInvalid =
									field.state.meta.isTouched && !field.state.meta.isValid;
								return (
									<Field data-invalid={isInvalid}>
										<FieldLabel className="sr-only" htmlFor={field.name}>
											Subject
										</FieldLabel>
										<Input
											aria-invalid={isInvalid}
											autoComplete="off"
											id={field.name}
											name={field.name}
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
											placeholder="Subject"
											value={field.state.value}
										/>
										{isInvalid && (
											<FieldError errors={field.state.meta.errors} />
										)}
									</Field>
								);
							}}
						</form.Field>
						<form.Field name="message">
							{(field) => {
								const isInvalid =
									field.state.meta.isTouched && !field.state.meta.isValid;
								return (
									<Field data-invalid={isInvalid}>
										<FieldLabel className="sr-only" htmlFor={field.name}>
											Message
										</FieldLabel>
										<InputGroup>
											<InputGroupTextarea
												aria-invalid={isInvalid}
												id={field.name}
												name={field.name}
												onBlur={field.handleBlur}
												onChange={(e) => field.handleChange(e.target.value)}
												placeholder="Your message"
												rows={6}
												value={field.state.value}
											/>
										</InputGroup>

										{isInvalid && (
											<FieldError errors={field.state.meta.errors} />
										)}
									</Field>
								);
							}}
						</form.Field>
					</FieldGroup>
				</form>
			</CardContent>
			<CardFooter className="px-6">
				<Field orientation="horizontal">
					<Button
						className="w-full"
						form="bug-report-form"
						size="lg"
						type="submit"
					>
						<span className="relative z-10">Send Request</span>

						<div className="translate-full group-hover/button:translate-0 absolute inset-0 rounded-full bg-accent transition-transform duration-300 ease-out" />
					</Button>
				</Field>
			</CardFooter>
		</Card>
	);
}
