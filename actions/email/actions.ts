"use server";

import { z } from "zod";
import sgMail from "@sendgrid/mail";
import { redirect } from "next/navigation";

const userFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  companyName: z.string().min(1, "Company name is required"),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits long"),
  message: z.string(),
});

export async function sendEmail(prevState: any, formData: FormData) {
  const validatedFields = userFormSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    companyName: formData.get("companyName"),
    phoneNumber: formData.get("phoneNumber"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  if (!process.env.SENDGRID_API_KEY) {
    return {
      errors: {
        invalidApiKey: "Something went wrong. Please try again later.",
      },
    };
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { firstName, lastName, email, companyName, phoneNumber, message } =
    validatedFields.data;

  const msg = {
    to: "jae@parcinsights.com",
    from: "jae@parcinsights.com",
    subject: `Parc Insights Message from ${companyName}`,
    text: `
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Company Name: ${companyName}
        Phone Number: ${phoneNumber}
        Message: ${message}
    `,
  };

  const sendSgMail = await sgMail.send(msg);

  if (sendSgMail[0].statusCode === 200 || sendSgMail[0].statusCode === 202) {
    redirect("/message-sent");
  } else {
  }
}
