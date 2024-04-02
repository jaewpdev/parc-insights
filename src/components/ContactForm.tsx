"use client";

import { sendEmail } from "@/actions/email/actions";
import Input from "./Input";
import Button from "./Button";
import Textarea from "./Textarea";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";

export default function ContactForm({ className }: { className?: string }) {
  const [state, formAction] = useFormState(sendEmail, {} as any);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <form action={formAction} className={`flex flex-col gap-4 ${className}`}>
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <Input
          className="w-full"
          label="First name"
          name="firstName"
          type="text"
          errors={state?.errors?.firstName}
          required
        />
        <Input
          className="w-full"
          label="Last name"
          name="lastName"
          type="text"
          errors={state?.errors?.lastName}
          required
        />
      </div>

      <Input
        label="Phone number"
        name="phoneNumber"
        type="phone"
        errors={state?.errors?.phoneNumber}
        required
      />

      <Input
        label="Company Name"
        name="companyName"
        type="text"
        errors={state?.errors?.companyName}
        required
      />

      <Input
        label="Email"
        name="email"
        type="email"
        errors={state?.errors?.email}
        required
      />

      <Textarea label="Message" name="message" className="mb-4" />
      <Button type="submit">Send Message</Button>
    </form>
  );
}
