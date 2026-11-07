"use client";

import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const inquiry = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      business: String(formData.get("business") || ""),
      service: String(formData.get("service") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inquiry),
      });

      if (!response.ok) {
        throw new Error("Unable to send inquiry.");
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#D9AFA0]/8 px-8 py-16 md:px-12 md:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-cover bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/images/palm-shadow.png')",
            backgroundPosition: "85% center",
            transform: "scaleX(-1)",
          }}
        />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: Introduction */}
          <div className="relative flex flex-col justify-center">
            <p className="font-sans text-xs tracking-[0.22em] text-[#8C5042]">
              GET IN TOUCH
            </p>

            <h1 className="mt-7 max-w-xl font-serif text-5xl leading-[1.1] text-black md:text-5xl lg:text-[3.25rem]">
              Let&apos;s bring your ideas to life.
            </h1>

            <p className="mt-7 max-w-lg font-sans text-base leading-8 text-black/75">
              Every project starts with a conversation. Share a few details
              about your business and what you&apos;re looking to create, and
              we&apos;ll be in touch soon.
            </p>
          </div>

          {/* Right: Contact Form */}
          <div className="relative bg-white p-7 md:p-10">
            {submitted ? (
              <div
                role="status"
                className="flex min-h-[420px] flex-col justify-center"
              >
                <p className="font-sans text-xs tracking-[0.22em] text-[#8C5042]">
                  INQUIRY SENT
                </p>

                <h2 className="mt-5 font-serif text-4xl">
                  Thank you for reaching out!
                </h2>

                <p className="mt-5 font-sans text-base leading-7 text-black/70">
                  Your inquiry has been successfully submitted. We will review
                  your project details and get back to you as soon as possible.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 self-start border-b border-[#8C5042] pb-1 font-sans text-sm text-[#8C5042]"
                >
                  Back to form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-sans text-xs tracking-[0.15em] text-black"
                    >
                      NAME *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className="mt-3 w-full rounded-none border border-black/20 bg-transparent px-4 py-4 font-sans text-sm outline-none transition-colors focus:border-[#8C5042]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-sans text-xs tracking-[0.15em] text-black"
                    >
                      EMAIL ADDRESS *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="mt-3 w-full rounded-none border border-black/20 bg-transparent px-4 py-4 font-sans text-sm outline-none transition-colors focus:border-[#8C5042]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="business"
                      className="block font-sans text-xs tracking-[0.15em] text-black"
                    >
                      BUSINESS NAME
                    </label>
                    <input
                      id="business"
                      name="business"
                      type="text"
                      autoComplete="organization"
                      placeholder="Your business name (optional)"
                      className="mt-3 w-full rounded-none border border-black/20 bg-transparent px-4 py-4 font-sans text-sm outline-none transition-colors focus:border-[#8C5042]"
                    />
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="service"
                      className="block font-sans text-xs tracking-[0.15em] text-black"
                    >
                      SERVICE NEEDED
                    </label>
                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      className="mt-3 w-full rounded-none border border-black/20 bg-white pl-4 pr-10 py-4 font-sans text-sm outline-none transition-colors focus:border-[#8C5042] appearance-none"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option value="branding">Branding & Identity</option>
                      <option value="web">Website Design & Development</option>
                      <option value="ux">UX/UI Design</option>
                      <option value="marketing">Marketing & Creative</option>
                      <option value="strategy">Creative Strategy</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="pointer-events-none absolute right-2 bottom-4 h-5 w-5 text-black"
                    >
                      <path
                        d="m6 9 6 6 6-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-sans text-xs tracking-[0.15em] text-black"
                  >
                    TELL US ABOUT YOUR PROJECT *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Share a few details about your goals, timeline, and anything else that would be helpful to know."
                    className="mt-3 w-full resize-y rounded-none border border-black/20 bg-transparent px-4 py-4 font-sans text-sm leading-7 outline-none transition-colors focus:border-[#8C5042]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#8C5042] px-6 py-5 font-sans text-xs tracking-[0.22em] text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "SENDING..." : "SUBMIT INQUIRY"}
                </button>

                {error && (
                  <p
                    role="alert"
                    className="text-center font-sans text-sm text-red-600"
                  >
                    {error}
                  </p>
                )}

                <p className="text-center font-sans text-xs text-black/50">
                  We&apos;ll be in touch as soon as possible.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
