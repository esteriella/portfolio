"use server";

import React from "react";
import { Resend } from "resend";
import { validateString } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

export const sendEmail = async (formData: FormData) => {
  const senderName = formData.get("senderName");
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const website = formData.get("website");

  if (typeof website === "string" && website.trim()) {
    return {
      error: "Unable to submit this message. Please email me directly.",
    };
  }

  if (!validateString(senderName, 100) || !senderName.trim()) {
    return {
      error: "Please enter your name.",
    };
  }

  const trimmedEmail =
    typeof senderEmail === "string" ? senderEmail.trim() : "";
  if (
    !validateString(trimmedEmail, 254) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)
  ) {
    return {
      error: "Please enter a valid email address.",
    };
  }

  if (!validateString(message, 5000) || !message.trim()) {
    return {
      error: "Please enter a message of up to 5,000 characters.",
    };
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("Contact form unavailable: RESEND_API_KEY is not configured.");
    return {
      error: "The contact form is temporarily unavailable. Please email me directly.",
    };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "damamy96@gmail.com",
      subject: "Portfolio contact form message",
      reply_to: trimmedEmail,
      react: React.createElement(ContactFormEmail, {
        message: message.trim(),
        senderEmail: trimmedEmail,
        senderName: senderName.trim(),
      }),
    });

    return {
      data,
    };
  } catch (error: unknown) {
    console.error("Contact form email delivery failed.", error);
    return {
      error: "Your message could not be sent. Please try again or email me directly.",
    };
  }
};
