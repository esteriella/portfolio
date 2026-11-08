"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  return (
    <section
      id="contact"
      ref={ref}
      className="w-full max-w-[48rem] scroll-mt-28"
    >
      <SectionHeading align="left">Get in touch</SectionHeading>
      <p className="text-muted">
        I welcome conversations about software engineering opportunities,
        collaboration, and projects. Email me at{" "}
        <a className="underline" href="mailto:agbajeopeyemiesther@gmail.com">
          agbajeopeyemiesther@gmail.com
        </a>{" "}
        or use the form below.
      </p>

      <form
        ref={formRef}
        className="mt-8 flex flex-col gap-4"
        action={async (formData) => {
          setFeedback(null);
          try {
            const result = await sendEmail(formData);
            if (result.error) {
              setFeedback({ type: "error", message: result.error });
              return;
            }

            formRef.current?.reset();
            setFeedback({
              type: "success",
              message: "Thanks for your message. It has been sent.",
            });
          } catch {
            setFeedback({
              type: "error",
              message:
                "Your message could not be sent. Please try again or email me directly.",
            });
          }
        }}
      >
        <label className="flex flex-col gap-2 font-medium" htmlFor="contact-name">
          Name
          <input
            autoComplete="name"
            className="form-control"
            id="contact-name"
            maxLength={100}
            name="senderName"
            placeholder="Your name"
            required
          />
        </label>
        <label
          className="flex flex-col gap-2 font-medium"
          htmlFor="contact-email"
        >
          Email
          <input
            autoComplete="email"
            className="form-control"
            id="contact-email"
            maxLength={254}
            name="senderEmail"
            placeholder="you@example.com"
            required
            type="email"
          />
        </label>
        <label
          className="flex flex-col gap-2 font-medium"
          htmlFor="contact-message"
        >
          Message
          <textarea
            className="form-control min-h-52 resize-y"
            id="contact-message"
            maxLength={5000}
            name="message"
            placeholder="How can I help?"
            required
          />
        </label>
        <div aria-hidden="true" className="honeypot">
          <label htmlFor="contact-website">Leave this field empty</label>
          <input
            autoComplete="off"
            id="contact-website"
            name="website"
            tabIndex={-1}
          />
        </div>
        <SubmitBtn />
        {feedback && (
          <p
            aria-live={feedback.type === "error" ? "assertive" : "polite"}
            className={feedback.type === "error" ? "text-error" : "text-accent"}
            role={feedback.type === "error" ? "alert" : "status"}
          >
            {feedback.message}
          </p>
        )}
      </form>

      <nav aria-label="Contact and professional links" className="mt-8">
        <ul className="flex flex-wrap gap-x-5 gap-y-3">
          <li>
            <a
              className="font-semibold text-accent underline"
              href="mailto:agbajeopeyemiesther@gmail.com"
            >
              Email
            </a>
          </li>
          <li>
            <a
              aria-label="GitHub profile (opens in a new tab)"
              className="font-semibold text-accent underline"
              href="https://github.com/esteriella"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              aria-label="LinkedIn profile (opens in a new tab)"
              className="font-semibold text-accent underline"
              href="https://www.linkedin.com/in/opeyemi-esther-agbaje-754b9822b"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <Link
              className="font-semibold text-accent underline"
              download
              href="/Opeyemi_E_Agbaje.PDF"
            >
              Download resume
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
