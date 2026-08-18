export default function AboutVision() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#BF5495]/5 blur-3xl" />

      <div className="relative mx-auto max-w-440 px-6 sm:px-8 lg:px-12">

        <div className="grid items-center gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

          {/* Label */}
          <div>
            <h2 className="mt-7 text-4xl font-light leading-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              From data
              <br />
              to <span className="font-semibold">knowledge.</span>
            </h2>
          </div>

          {/* Vision Content */}
          <div className="border-l border-neutral-200 pl-7 sm:pl-10 lg:pl-14">
            <p className="text-xl font-light leading-relaxed text-neutral-900 sm:text-2xl lg:text-3xl">
              At STAT Scientific, we believe analytical laboratories should do
              more than generate reports. They should generate knowledge.
            </p>

            <p className="mt-7 max-w-3xl text-base leading-8 text-neutral-600 sm:text-lg">
              By connecting analytical chemistry with scientific research and
              industry, we help transform analytical data into better
              products, stronger research, and informed decisions.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <span className="h-px w-16 bg-[#BF5495]" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
                Precision Analytics. Scientific Insight.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}