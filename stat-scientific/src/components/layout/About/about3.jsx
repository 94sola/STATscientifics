const reasons = [
  {
    number: "01",
    title: "Specialized HPLC Expertise",
    description:
      "Our analytical services are built around specialized HPLC capabilities and practical expertise in quantitative chemical analysis.",
  },
  {
    number: "02",
    title: "Reliable Analytical Results",
    description:
      "We emphasize accuracy, reproducibility, and analytical consistency to provide dependable results for research and quality decisions.",
  },
  {
    number: "03",
    title: "Research-Driven Approach",
    description:
      "We combine analytical chemistry with scientific understanding to ensure that analytical data contributes meaningful insight to research and development.",
  },
  {
    number: "04",
    title: "Responsive Scientific Support",
    description:
      "Our team provides responsive communication and efficient analytical support throughout the project lifecycle.",
  },
  {
    number: "05",
    title: "Collaborative Partnerships",
    description:
      "We work with academia and industry to support research programs, product development, analytical challenges, and quality initiatives.",
  },
  {
    number: "06",
    title: "Continuous Capability Development",
    description:
      "We continuously invest in analytical capability, method development, and scientific knowledge to expand the value we provide to our clients.",
  },
];

export default function WhyStatScientific() {
  return (
    <section className="bg-gray-100 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-440 px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-4xl text-center sm:mb-16 lg:mb-20">
          <h2 className="text-3xl font-light leading-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Science you can trust.
            <br />
            <span className="font-semibold">
              Insight you can use.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
            We combine analytical precision with scientific expertise to
            deliver data that supports confident research, development, and
            quality decisions.
          </p>
        </div>

        {/* Reasons */}
        <div className="grid grid-cols-1 border-l border-t border-neutral-300 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <article
              key={reason.number}
              className="group relative border-b border-r border-neutral-300 bg-white px-7 py-9 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.06)] sm:px-9 sm:py-11"
            >
              <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#BF5495] transition-all duration-500 group-hover:w-full" />

              <span className="text-xs font-semibold tracking-[0.25em] text-[#BF5495]">
                {reason.number}
              </span>

              <h3 className="mt-7 text-xl font-semibold leading-tight text-neutral-900 sm:text-2xl">
                {reason.title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
                {reason.description}
              </p>

              <div className="mt-8 h-px w-10 bg-neutral-200 transition-all duration-300 group-hover:w-20 group-hover:bg-[#BF5495]" />
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}