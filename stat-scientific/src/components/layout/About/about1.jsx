

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gray-100">
      <div className="mx-auto max-w-440 px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

          {/* Left Content */}
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-14 bg-[#BF5495]" />

              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#BF5495]">
                About STAT Scientific
              </span>
            </div>

            <h1 className="max-w-4xl text-4xl font-light leading-[1.08] tracking-tight text-neutral-900 sm:text-5xl md:text-6xl lg:text-7xl">
              Precision Analytics.
              <br />
              <span className="font-semibold">
                Scientific Insight.
              </span>
            </h1>

            <div className="mt-8 h-px w-24 bg-neutral-300" />

            <p className="mt-8 max-w-3xl text-base leading-8 text-neutral-600 sm:text-lg sm:leading-8 lg:text-xl">
              STAT Scientific is an independent analytical laboratory
              dedicated to advancing food science, natural products research,
              and quality assurance through high-performance analytical
              chemistry.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-600 sm:text-lg sm:leading-8">
              Built around specialized HPLC capabilities, we provide reliable
              analytical services that support researchers, food manufacturers,
              nutraceutical companies, regulatory organizations, and academic
              institutions.
            </p>
          </div>

          {/* Right Statement */}
          <div className="relative">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#BF5495]/5 blur-3xl" />

            <div className="relative border border-neutral-200 bg-white p-8 shadow-sm sm:p-10 lg:p-12">
              <span className="text-5xl font-serif text-[#BF5495]/40">
                “
              </span>

              <p className="mt-2 text-2xl font-light leading-relaxed text-neutral-900 sm:text-3xl">
                Our mission is simple: to make advanced analytical science
                more accessible, reliable, and impactful.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-10 bg-[#BF5495]" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
                  Our Mission
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}