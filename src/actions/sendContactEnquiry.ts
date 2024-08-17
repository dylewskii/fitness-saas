"use server";

import { z } from "zod";

const FormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  enquiry: z.string().min(10, "Enquiry must be at least 10 characters long"),
});

export default async function sendContactEnquiry(formData: FormData) {
  const appName = "fitnessio";
  const validatedFields = FormSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    enquiry: formData.get("enquiry"),
  });

  if (!validatedFields.success) {
    return { error: "Invalid form data. Please check your inputs." };
  }

  const { firstName, lastName, email, enquiry } = validatedFields.data;

  try {
    console.log("A customer has sent an enquiry:");
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Enquiry: ${enquiry}`);

    // save enquiry to db or send email

    return {
      success:
        "Your enquiry has been received. We'll get back to you within 3 working days. 📧",
    };
  } catch (err) {
    console.error(err);
    return {
      error: `There was an error submitting your enquiry. Please try again later or email us directly: contact@${appName}.com`,
    };
  }
}
