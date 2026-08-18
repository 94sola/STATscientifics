import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What is STAT Scientific?",
        answer:
          "STAT Scientific is an independent analytical laboratory providing specialized analytical chemistry services for food science, natural products research, nutritional analysis, quality assurance, and scientific research.",
      },
      {
        question: "Who can use STAT Scientific's analytical services?",
        answer:
          "Our services support researchers, food manufacturers, nutraceutical companies, academic institutions, regulatory organizations, and other organizations requiring reliable analytical data.",
      },
      {
        question: "What types of samples can you analyse?",
        answer:
          "We analyse a range of food, botanical, natural product, nutraceutical, and research samples depending on the analytical method and target compounds required. Sample suitability is assessed before testing.",
      },
    ],
  },

  {
    category: "Analytical Services",
    questions: [
      {
        question: "What analytical techniques do you use?",
        answer:
          "Our analytical capabilities are centered around high-performance liquid chromatography (HPLC) and associated quantitative analytical methodologies. Specific instrumentation and methods depend on the analytes and sample matrix.",
      },
      {
        question: "Do you provide vitamin analysis?",
        answer:
          "Yes. STAT Scientific provides quantitative vitamin analysis using validated analytical procedures and appropriate reference standards. The applicable vitamin panel depends on the sample type and analytical requirements.",
      },
      {
        question: "Do you provide phytochemical analysis?",
        answer:
          "Yes. We provide targeted quantitative analysis of selected phytochemicals, including phenolic compounds and flavonoids, using chromatographic methods and authenticated analytical standards.",
      },
      {
        question: "Can you develop a method for a compound that is not currently on your panel?",
        answer:
          "Yes. Method development and optimization can be considered for analytical targets outside our existing routine panels. The feasibility depends on the compound, sample matrix, reference standard availability, and required performance criteria.",
      },
    ],
  },

  {
    category: "Samples & Testing",
    questions: [
      {
        question: "How much sample do I need to submit?",
        answer:
          "Required sample quantity depends on the analytical method, sample matrix, number of tests, and anticipated repeat analyses. Our team can provide sample quantity requirements before submission.",
      },
      {
        question: "How should I prepare my samples?",
        answer:
          "Sample preparation requirements vary according to the analytical method and sample type. Clients should provide representative samples in appropriate containers and follow any specific preparation or handling instructions supplied by our laboratory.",
      },
      {
        question: "Can you analyse unknown samples?",
        answer:
          "Unknown samples can be evaluated for compounds that fall within the scope of our validated analytical methods. Targeted quantitative analysis is different from unrestricted identification of every compound present in a sample.",
      },
    ],
  },

  {
    category: "Results & Reporting",
    questions: [
      {
        question: "What will I receive after analysis?",
        answer:
          "Depending on the service, reports may include sample identification, chromatographic information, calibration information, quantitative analytical results, method references, quality-control information, and analyst approval.",
      },
      {
        question: "Are the results quantitative?",
        answer:
          "Yes. Where a quantitative method is requested and validated for the target analyte, results are reported using the appropriate concentration or content units for the sample and analytical method.",
      },
      {
        question: "Do you provide chromatograms?",
        answer:
          "Chromatographic evidence may be included as part of the analytical report depending on the service package and reporting requirements.",
      },
      {
        question: "How long does analysis take?",
        answer:
          "Turnaround time depends on the analytical service, sample complexity, number of samples, method requirements, and laboratory workload. A specific estimated turnaround time can be provided when a project is reviewed.",
      },
    ],
  },

  {
    category: "Quality & Methodology",
    questions: [
      {
        question: "How do you ensure analytical accuracy?",
        answer:
          "Our analytical workflow incorporates appropriate reference standards, calibration procedures, quality-control measures, method suitability checks, and review of analytical results before reporting.",
      },
      {
        question: "Do you use reference standards?",
        answer:
          "Yes. Authenticated analytical reference standards are used where required by the applicable method to support compound identification, calibration, and quantitative determination.",
      },
      {
        question: "Are your methods validated?",
        answer:
          "Analytical methods are established and evaluated according to their intended application. Validation or performance verification requirements depend on the analytical method, target compounds, sample matrix, and intended use of the results.",
      },
      {
        question: "Can your laboratory support research projects?",
        answer:
          "Yes. We support academic and industrial research projects requiring analytical measurements, quantitative characterization, method development, and analytical interpretation.",
      },
    ],
  },

  {
    category: "Projects & Support",
    questions: [
      {
        question: "Can STAT Scientific support MSc and PhD research?",
        answer:
          "Yes. We provide analytical support for academic research projects, including sample analysis, quantitative measurements, method-related support, and analytical reporting.",
      },
      {
        question: "Can you analyse multiple samples in one project?",
        answer:
          "Yes. Multiple-sample projects can be accommodated. Project requirements, sample numbers, analytical targets, and turnaround expectations are reviewed before testing begins.",
      },
      {
        question: "Can I discuss my project before submitting samples?",
        answer:
          "Absolutely. We encourage clients to discuss their analytical objectives, sample type, target compounds, expected results, and reporting requirements with our team before submitting samples.",
      },
    ],
  },
];

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-neutral-200 last:border-b-0">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-6 px-5 py-6 text-left transition-colors duration-300 hover:bg-neutral-50 sm:px-8 sm:py-7"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-5">
          <span
            className={`mt-1 h-2 w-2 shrink-0 rounded-full transition-all duration-300 ${
              isOpen
                ? "scale-125 bg-[#BF5495]"
                : "bg-neutral-300"
            }`}
          />

          <span className="text-base font-medium leading-7 text-neutral-900 sm:text-lg">
            {question}
          </span>
        </div>

        <ChevronDown
          size={21}
          strokeWidth={1.7}
          className={`shrink-0 transition-all duration-300 ${
            isOpen
              ? "rotate-180 text-[#BF5495]"
              : "text-neutral-500"
          }`}
        />
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <div className="pb-7 pl-12 pr-5 sm:pl-16 sm:pr-8">
            <p className="max-w-3xl text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openItem, setOpenItem] = useState("0-0");

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <main className="w-full bg-white font-manrope">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gray-100">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#BF5495]/5 blur-3xl" />

        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-neutral-200/60 blur-3xl" />

        <div className="relative mx-auto max-w-440 px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-light leading-[1.08] tracking-tight text-neutral-900 sm:text-5xl md:text-6xl lg:text-7xl">
              Frequently Asked
              <br />
              <span className="font-semibold">
                Questions.
              </span>
            </h1>

            <div className="mt-8 h-px w-24 bg-neutral-300" />

            <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg sm:leading-8 lg:text-xl">
              Find answers to common questions about our analytical services,
              sample requirements, methodologies, reporting, and research
              support.
            </p>

          </div>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-440 px-6 sm:px-8 lg:px-12">

          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">

            {/* SIDE CONTENT */}
            <aside className="lg:sticky lg:top-28 lg:self-start">

              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-[#BF5495]" />

                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#BF5495]">
                  FAQ
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-light leading-tight text-neutral-900 sm:text-4xl">
                Everything you need to know about our
                <span className="font-semibold">
                  {" "}analytical services.
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-neutral-600">
                If you have a project-specific question that is not answered
                here, our scientific team can help determine the most
                appropriate analytical approach for your requirements.
              </p>

              <div className="mt-8 border-l-2 border-[#BF5495] bg-neutral-50 px-6 py-5">
                <p className="text-sm leading-7 text-neutral-600">
                  <span className="font-semibold text-neutral-900">
                    Need project guidance?
                  </span>
                  <br />
                  Contact STAT Scientific before submitting your samples so
                  we can review your analytical requirements.
                </p>
              </div>

            </aside>

            {/* QUESTIONS */}
            <div className="space-y-12">

              {faqs.map((section, sectionIndex) => (
                <div key={section.category}>

                  <div className="mb-5 flex items-center gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#BF5495]">
                      {section.category}
                    </span>

                    <span className="h-px flex-1 bg-neutral-200" />
                  </div>

                  <div className="overflow-hidden border border-neutral-200 bg-white">
                    {section.questions.map((faq, questionIndex) => {
                      const id = `${sectionIndex}-${questionIndex}`;

                      return (
                        <FAQItem
                          key={id}
                          question={faq.question}
                          answer={faq.answer}
                          isOpen={openItem === id}
                          onClick={() => toggleItem(id)}
                        />
                      );
                    })}
                  </div>

                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-[#661c48]">
        <div className="mx-auto max-w-440 px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                Still Have Questions?
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
                Let us discuss your
                <span className="font-semibold">
                  {" "}analytical requirements.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Our team can help you determine the appropriate analytical
                service, sample requirements, and project approach.
              </p>
            </div>

            <a
              href="/contact"
              className="group inline-flex w-fit items-center gap-4 border border-white/30 bg-white px-7 py-4 text-sm font-semibold tracking-wide text-[#661c48] transition-all duration-300 hover:bg-transparent hover:text-white"
            >
              CONTACT STAT SCIENTIFIC

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

          </div>
        </div>
      </section>

    </main>
  );
}