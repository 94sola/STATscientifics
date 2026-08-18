

const methodFeatures = [
  {
    title: "Comprehensive Amino Acid Coverage",
    description:
      "Our method utilizes a quantitative reference mixture containing eighteen amino acids for calibration and compositional analysis of protein hydrolysates.",
  },
  {
    title: "Reliable PITC Derivatization",
    description:
      "Phenylisothiocyanate (PITC), commonly known as Edman's reagent, forms stable phenylthiocarbamyl (PTC) amino acid derivatives that are ideally suited for reverse-phase HPLC analysis. The method provides excellent stability and allows direct analysis of secondary amino acids such as proline",
  },
  {
    title: "Excellent Quantitative Performance",
    description:
      "Our HPLC-VWD platform provides excellent precision and reproducibility for routine amino acid determination, making it suitable for nutritional analysis, food quality studies and academic research.",
  },
  {
    title: "High Quality Reference Standards",
    description:
      "Calibration is performed using authenticated amino acid standards, ensuring accurate identification and reliable quantification across the analytical range. ",
  },
];

export default function WhyChooseMethod() {
  return (
    <section className="relative overflow-hidden bg-gray-100 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-440 px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-4xl text-center sm:mb-16 lg:mb-20">

          <h2 className="text-3xl font-semibold uppercase leading-tight tracking-[0.35em] text-[#BF5495] md:text-4xl">
            Our Commitment to Analytical Excellence
          </h2>
            
          <div className="mx-auto mt-7 h-px w-20 bg-neutral-300" />
        </div>

        {/* Classic Feature Grid */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:gap-6">

          {methodFeatures.map((feature, index) => (
            <article
              key={feature.title}
              className="group relative overflow-hidden border border-neutral-300 bg-white px-7 py-9 transition-all duration-500 hover:-translate-y-1 hover:border-[#BF5495] hover:shadow-[0_18px_45px_rgba(0,0,0,0.07)] sm:px-9 sm:py-10 lg:px-11 lg:py-12"
            >

              {/* Top accent */}
              <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#BF5495] transition-all duration-500 group-hover:w-full" />

              {/* Number */}
              <div className="mb-8 flex items-center gap-4">
                <span className="flex h-9 w-9 items-center justify-center border border-neutral-300 text-xs font-medium text-neutral-500 transition-colors duration-300 group-hover:border-[#BF5495] group-hover:text-[#BF5495]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="h-px w-10 bg-neutral-200" />
              </div>

              {/* Title */}
              <h3 className="mb-5 max-w-lg text-2xl font-semibold leading-tight tracking-[-0.02em] text-neutral-900 sm:text-[27px]">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] leading-7 text-neutral-600 sm:text-base sm:leading-8">
                {feature.description}
              </p>

              {/* Bottom decoration */}
              <div className="mt-9 flex items-center justify-between border-t border-neutral-200">
                <span className="h-2 w-2 rounded-full bg-[#BF5495] opacity-60 transition-all duration-300 group-hover:scale-150 group-hover:opacity-100" />
              </div>

            </article>
          ))}

        </div>

        
        <div className="mt-12 flex items-center justify-center gap-4 sm:mt-16">
          <span className="h-px flex-1 bg-neutral-300" />

          <span className="h-1.5 w-1.5 rounded-full bg-[#BF5495]" />

          <span className="h-px flex-1 bg-neutral-300" />
        </div>

      </div>
    </section>
  );
}