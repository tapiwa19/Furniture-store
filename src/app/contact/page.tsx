"use client";

import { useState } from "react";
import { contactSchema } from "@/lib/validation";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
    // no real send yet — that's the Resend/API-route phase, once the rest of the site's solid
  }

  if (submitted) {
    return (
      <section className="max-w-2xl mx-auto px-6 py-16">
        <p className="text-stone-700 bg-stone-100 rounded-xl p-6">
          Thanks — your message has been noted. We&apos;ll get back to you soon.
        </p>
      </section>
    );
  }

  return (
    <section className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-medium text-stone-900 mb-2">Contact</h1>
      <p className="text-stone-500 mb-10">
        Questions about an order, a custom piece, or anything else — reach out.
      </p>
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div>
          <label className="block text-sm text-stone-600 mb-1">Name</label>
          <input name="name" type="text" className="w-full border border-stone-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-stone-900" />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm text-stone-600 mb-1">Email</label>
          <input name="email" type="text" className="w-full border border-stone-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-stone-900" />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm text-stone-600 mb-1">Message</label>
          <textarea name="message" rows={5} className="w-full border border-stone-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-stone-900" />
          {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
        </div>
        <button type="submit" className="bg-stone-900 text-stone-50 rounded-full px-8 py-3 text-sm hover:bg-stone-800 transition-colors">
          Send message
        </button>
      </form>
    </section>
  );
}