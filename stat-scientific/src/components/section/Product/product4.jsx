import { ChevronDown } from "lucide-react";
import { useState } from "react";

const reasons = [
  {
    title: "Genuine Products",
    text: "We source directly from reputable international manufacturers and authorized distributors to minimize the risk of counterfeit or non-conforming products.",
  },
  {
    title: "Hard-to-Find Products",
    text: "Need an obsolete GC inlet, a discontinued standard, or a specialty chromatography column? We specialize in locating difficult-to-source analytical products.",
  },
  {
    title: "Scientific Expertise",
    text: "Unlike general procurement companies, we understand analytical methods, instrument compatibility and laboratory applications, allowing us to recommend suitable alternatives when required.",
  },
];

const faqs = [
  {
    question: "Can you source products from any manufacturer?",
    answer:
      "Yes. We can source products from a broad range of international manufacturers and authorized distributors, subject to availability and export restrictions.",
  },
  {
    question: "Do you only supply chromatography products?",
    answer:
      "No. While analytical chemistry is our specialty, we also source general laboratory equipment, consumables, chemicals and accessories.",
  },
  {
    question: "Can you help identify the correct product?",
    answer:
      "Yes. Our scientific team can review your instrument model, analytical method or application and help identify compatible consumables or replacement parts.",
  },
];

export default function ProductFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-neutral-50 py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-440 px-6 lg:px-10">

        <div className="max-w-4xl">

          <h2 className="text-3xl font-semibold uppercase leading-tight tracking-[0.15em] md:text-4xl text-neutral-600">
            Why Choose
            <span className="text-[#BF5495]"> STAT Scientific?</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base italic leading-7 text-neutral-500 sm:text-lg">
            We combine reliable sourcing with scientific expertise to help
            laboratories obtain the right products for their analytical
            workflows.
          </p>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-12 lg:gap-20">

          <div className="lg:col-span-5">
            <div className="divide-y divide-neutral-200 border-y border-neutral-200">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className="group py-7 first:pt-0 last:pb-0"
                >
                  <div className="flex gap-5">
                    <span className="pt-1 text-xs font-semibold text-neutral-300">
                      0{index + 1}
                    </span>

                    <div>
                      <h3 className="text-2xl font-medium tracking-tight text-neutral-950">
                        {reason.title}
                      </h3>

                      <p className="mt-3 text-base leading-6 text-neutral-500">
                        {reason.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            
            
          </div>

          <div className="lg:col-span-7">
            <div className="border-t border-neutral-200">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className="border-b border-neutral-200"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      className="
                        flex w-full items-center justify-between
                        gap-6 py-6 text-left
                        sm:py-7
                      "
                    >
                      <span className="text-lg font-medium tracking-tight text-neutral-950 sm:text-xl">
                        {faq.question}
                      </span>

                      <span
                        className={`
                          flex h-9 w-9 shrink-0 items-center justify-center
                          rounded-full border border-[#BF5495]
                          transition-all duration-300
                          ${
                            isOpen
                              ? "rotate-180 bg-neutral-950 text-white"
                              : "bg-white text-neutral-700"
                          }
                        `}
                      >
                        <ChevronDown size={17} strokeWidth={1.8} />
                      </span>
                    </button>

                    <div
                      className={`
                        grid transition-all duration-300 ease-in-out
                        ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }
                      `}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl pb-7 pr-12 text-sm leading-7 text-neutral-500 sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}