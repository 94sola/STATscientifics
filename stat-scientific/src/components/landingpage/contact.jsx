import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock3,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import { useState } from "react";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      organization: formData.get("organization"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    const apiUrl =
      import.meta.env.VITE_API_URL ||
      "http://localhost:5000/api/contact";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to send enquiry."
        );
      }

      setSuccess(
        "Your enquiry has been sent successfully. Our team will get back to you shortly."
      );

      form.reset();

    } catch (err) {
      console.error("Submission error:", err);

      setError(
        err.message ||
          "We could not send your enquiry. Please try again or contact us directly."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-neutral-100 py-20 font-manrope sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-440 px-5 sm:px-8 lg:px-12">

        {/* Heading */}

        <div className="mb-14 max-w-4xl sm:mb-16 lg:mb-20">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#BF5495]">
            Contact STAT Scientific
          </p>

          <h2 className="text-4xl font-light leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Let’s Discuss Your
            <br />

            <span className="font-semibold">
              Scientific Requirements
            </span>
          </h2>

          <div className="mt-7 h-px w-24 bg-neutral-300" />

          <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
            Whether you require analytical testing, laboratory products,
            reference standards, or technical support, our team is available
            to help you identify the right solution for your laboratory.
          </p>

        </div>

        {/* Main Content */}

        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">

          {/* Contact Details */}

          <div className="bg-[#661c48] p-8 text-white sm:p-10 lg:p-12">

            <div className="mb-12">

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                Speak With Our Team
              </p>

              <h3 className="mt-4 text-2xl font-medium leading-tight sm:text-3xl">
                Scientific expertise,
                <br />
                practical solutions.
              </h3>

            </div>

            <div className="space-y-8">

              {/* Email */}

              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20">
                  <Mail
                    className="h-5 w-5 text-white"
                    strokeWidth={1.5}
                  />
                </div>

                <div>

                  <p className="text-xs uppercase tracking-[0.15em] text-white/50">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-medium">
                    info@statscientific.com
                  </p>

                </div>

              </div>

              {/* Phone */}

              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20">
                  <Phone
                    className="h-5 w-5 text-white"
                    strokeWidth={1.5}
                  />
                </div>

                <div>

                  <p className="text-xs uppercase tracking-[0.15em] text-white/50">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-medium">
                    +234 XXX XXX XXXX
                  </p>

                </div>

              </div>

              {/* Location */}

              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20">
                  <MapPin
                    className="h-5 w-5 text-white"
                    strokeWidth={1.5}
                  />
                </div>

                <div>

                  <p className="text-xs uppercase tracking-[0.15em] text-white/50">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-medium leading-6">
                    Lagos, Nigeria
                  </p>

                </div>

              </div>

              {/* Hours */}

              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20">
                  <Clock3
                    className="h-5 w-5 text-white"
                    strokeWidth={1.5}
                  />
                </div>

                <div>

                  <p className="text-xs uppercase tracking-[0.15em] text-white/50">
                    Business Hours
                  </p>

                  <p className="mt-1 text-sm font-medium">
                    Monday – Friday
                  </p>

                  <p className="text-sm text-white/70">
                    8:00 AM – 5:00 PM
                  </p>

                </div>

              </div>

            </div>

            {/* Bottom Statement */}

            <div className="mt-12 border-t border-white/15 pt-7">

              <p className="text-sm leading-7 text-white/70">
                From analytical testing to laboratory solutions, we help
                laboratories make informed scientific decisions.
              </p>

            </div>

          </div>

          {/* Form */}

          <div className="border border-neutral-200 bg-white p-7 sm:p-10 lg:p-12">

            <div className="mb-8">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#BF5495]">
                Send an Enquiry
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-neutral-900">
                How can we assist you?
              </h3>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Name + Email */}

              <div className="grid gap-6 sm:grid-cols-2">

                <div>

                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-neutral-800"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full border border-neutral-300 bg-white px-4 py-3.5 text-sm text-neutral-900 outline-none transition focus:border-[#BF5495]"
                  />

                </div>

                <div>

                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-neutral-800"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full border border-neutral-300 bg-white px-4 py-3.5 text-sm text-neutral-900 outline-none transition focus:border-[#BF5495]"
                  />

                </div>

              </div>

              {/* Organization + Phone */}

              <div className="grid gap-6 sm:grid-cols-2">

                <div>

                  <label
                    htmlFor="organization"
                    className="mb-2 block text-sm font-medium text-neutral-800"
                  >
                    Organization
                  </label>

                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    placeholder="Company / Institution"
                    className="w-full border border-neutral-300 bg-white px-4 py-3.5 text-sm text-neutral-900 outline-none transition focus:border-[#BF5495]"
                  />

                </div>

                <div>

                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-neutral-800"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+234"
                    className="w-full border border-neutral-300 bg-white px-4 py-3.5 text-sm text-neutral-900 outline-none transition focus:border-[#BF5495]"
                  />

                </div>

              </div>

              {/* Area of Interest */}

              <div>

                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-medium text-neutral-800"
                >
                  Area of Interest
                </label>

                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full border border-neutral-300 bg-white px-4 py-3.5 text-sm text-neutral-900 outline-none transition focus:border-[#BF5495]"
                >

                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="Analytical Testing">
                    Analytical Testing
                  </option>

                  <option value="Vitamin Analysis">
                    Vitamin Analysis
                  </option>

                  <option value="Amino Acid Analysis">
                    Amino Acid Analysis
                  </option>

                  <option value="Fatty Acid Analysis">
                    Fatty Acid Analysis
                  </option>

                  <option value="Phenolic Analysis">
                    Phenolic Analysis
                  </option>

                  <option value="Laboratory Products">
                    Laboratory Products
                  </option>

                  <option value="Reference Standards">
                    Reference Standards
                  </option>

                  <option value="Technical Support">
                    Technical Support
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>

              {/* Message */}

              <div>

                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-neutral-800"
                >
                  Your Enquiry
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  placeholder="Tell us about your requirements..."
                  className="w-full resize-none border border-neutral-300 bg-white px-4 py-3.5 text-sm leading-7 text-neutral-900 outline-none transition focus:border-[#BF5495]"
                />

              </div>

              {/* Success Message */}

              {success && (
                <div className="flex gap-3 border border-green-200 bg-green-50 p-4 text-sm text-green-800">

                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0"
                  />

                  <p>{success}</p>

                </div>
              )}

              {/* Error Message */}

              {error && (
                <div className="flex gap-3 border border-red-200 bg-red-50 p-4 text-sm text-red-800">

                  <AlertCircle
                    className="mt-0.5 h-5 w-5 shrink-0"
                  />

                  <p>{error}</p>

                </div>
              )}

              {/* Submit */}

              <button
                type="submit"
                disabled={loading}
                className="group inline-flex items-center gap-4 bg-[#BF5495] px-7 py-4 text-sm font-medium uppercase tracking-wide text-white transition-all duration-300 hover:bg-[#661c48] disabled:cursor-not-allowed disabled:opacity-60"
              >

                {loading ? "Sending..." : "Send Enquiry"}

                {!loading && (
                  <ArrowRight
                    size={19}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                )}

              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}