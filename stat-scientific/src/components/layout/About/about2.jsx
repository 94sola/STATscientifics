const focusAreas = [
  "Food Chemistry",
  "Phytochemical Analysis",
  "Natural Products Research",
  "Nutritional Analysis",
  "HPLC Method Development",
  "Research Support",
  "Quality Assurance",
  "Scientific Consulting",
];

export default function AboutFocus() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-440 px-6 sm:px-8 lg:px-12">

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

          {/* Heading */}
          <div>
            <h2 className="mt-6 max-w-lg text-3xl font-light leading-tight text-neutral-900 sm:text-4xl lg:text-5xl">
              Analytical science built around
              <span className="font-semibold">
                {" "}real-world applications.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-600 sm:text-lg">
              Our analytical capabilities are designed to support the
              complete research and product-development process, from
              characterization and method development to quality assurance
              and scientific interpretation.
            </p>
          </div>

          {/* Focus Grid */}
          <div className="grid grid-cols-1 border-t border-neutral-200 sm:grid-cols-2">
            {focusAreas.map((item, index) => (
              <div
                key={item}
                className={`group flex items-center gap-5 border-b border-neutral-200 py-6 transition-all duration-300 hover:px-3 ${
                  index % 2 === 0
                    ? "sm:border-r sm:pr-8"
                    : "sm:pl-8"
                }`}
              >
                <span className="text-xs font-medium tracking-[0.2em] text-[#BF5495]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-base font-medium text-neutral-900 sm:text-lg">
                  {item}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}