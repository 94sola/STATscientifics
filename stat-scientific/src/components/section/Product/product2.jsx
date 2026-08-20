
import { Link } from "react-router-dom";
import {
  FlaskConical,
  Columns3,
  Settings2,
  Droplets,
  Microscope,
  ArrowUpRight,
} from "lucide-react";

const productCategories = [
  {
    number: "01",
    title: "Reference Standards",
    description:
      "High-quality analytical standards for calibration, validation, quantitative analysis, and method development.",
    icon: FlaskConical,
    products: [
      "Certified Reference Materials",
      "Pesticide Standards",
      "Pharmaceutical Standards",
      "FAME Standards",
      "Amino Acid Standards",
      "Phenolic Standards",
      "PAH Standards",
      "VOC Standards",
      "ICP Multi-element Standards",
    ],
  },
  {
    number: "02",
    title: "Chromatography Consumables",
    description:
      "Essential consumables designed to support reliable chromatographic performance and sample preparation.",
    icon: Columns3,
    products: [
      "GC Columns",
      "HPLC Columns",
      "Guard Columns",
      "Syringe Filters",
      "SPE Cartridges",
      "QuEChERS Kits",
      "Autosampler Vials",
      "Septa",
      "Ferrules",
      "Inlet Liners",
      "Syringes",
    ],
  },
  {
    number: "03",
    title: "Instrument Parts",
    description:
      "Replacement components and accessories for maintaining laboratory instruments and analytical systems.",
    icon: Settings2,
    products: [
      "Lamps",
      "Detector Parts",
      "Tubing",
      "Swagelok Components",
      "Gas Purifiers",
      "Regulators",
      "Pumps",
      "Fittings",
      "Seals",
    ],
  },
  {
    number: "04",
    title: "Chemicals & Solvents",
    description:
      "High-purity chemicals and solvents selected for demanding analytical and laboratory applications.",
    icon: Droplets,
    products: [
      "HPLC Solvents",
      "LC-MS Solvents",
      "Derivatization Reagents",
      "Buffers",
      "High Purity Acids",
      "High Purity Salts",
    ],
  },
  {
    number: "05",
    title: "General Laboratory Supplies",
    description:
      "Reliable laboratory essentials supporting sample preparation, handling, filtration, and everyday workflows.",
    icon: Microscope,
    products: [
      "Pipettes",
      "Centrifuge Tubes",
      "Filtration Products",
      "Glassware",
      "Safety Supplies",
    ],
  },
];

export default function ProductSection() {
  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-440 px-6 lg:px-10">

        {/* Header */}
        <div className="mb-16 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
         
            <h2 className="text-3xl font-semibold uppercase leading-tight tracking-[0.15em] md:text-4xl text-neutral-600">
              What You Can
              <span className="text-[#BF5495]"> Source</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pb-1">
            <p className="max-w-xl leading-7 italic text-neutral-600 sm:text-lg lg:text-[1.125rem] lg:leading-7">
              Access analytical products and laboratory supplies sourced through
              trusted international manufacturers and suppliers. From reference
              standards to instrument components, we help laboratories obtain
              the products required for reliable analytical work.
            </p>
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-12">

          {productCategories.map((category, index) => {
            const Icon = category.icon;

            const largeCard =
              index === 0 || index === 1;

            return (
              <article
                key={category.title}
                className={`
                  group relative overflow-hidden rounded-[2rem]
                  border border-neutral-200 bg-neutral-50
                  p-7 transition-all duration-500
                  hover:-translate-y-1 hover:border-neutral-300
                  hover:bg-neutral-100 sm:p-8
                  ${
                    largeCard
                      ? "lg:col-span-6"
                      : index === 2
                      ? "lg:col-span-4"
                      : index === 3
                      ? "lg:col-span-4"
                      : "lg:col-span-4"
                  }
                `}
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-neutral-900 shadow-sm ring-1 ring-[#BF5495]">
                    <Icon size={21} strokeWidth={1.6} />
                  </div>

                  <span className="text-base font-medium text-neutral-300">
                    {category.number}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-8">
                  <h3 className="text-2xl font-medium tracking-tight text-neutral-950">
                    {category.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-base italic leading-6 text-neutral-500">
                    {category.description}
                  </p>
                </div>

                {/* Products */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {category.products.map((product) => (
                    <span
                      key={product}
                      className="
                        rounded-full border border-neutral-200
                        bg-white px-3.5 py-2 text-base
                        font-medium text-neutral-600
                        transition-colors duration-300
                        group-hover:border-neutral-300
                      "
                    >
                      {product}
                    </span>
                  ))}
                </div>

                {/* Bottom Link */}
                <div className="mt-10 flex items-center justify-between border-t border-neutral-200 pt-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                    {category.products.length} Product Types
                  </span>

                  <button
                    type="button"
                    className="
                      flex h-9 w-9 items-center justify-center
                      rounded-full bg-neutral-950 text-white
                      transition-all duration-300
                      group-hover:rotate-45
                    "
                  >
                    <ArrowUpRight size={16} strokeWidth={1.8} />
                  </button>
                </div>

                {/* Decorative element */}
                <div
                  className="
                    pointer-events-none absolute -right-20 -top-20
                    h-40 w-40 rounded-full
                    border border-neutral-200
                    opacity-0 transition-opacity duration-500
                    group-hover:opacity-100
                  "
                />
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-8 overflow-hidden rounded-[2rem] bg-neutral-950 px-7 py-9 text-white sm:px-10 lg:px-12 lg:py-10">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#BF5495]">
                Need Something Specific?
              </p>

              <h3 className="mt-2 text-2xl font-medium tracking-tight sm:text-3xl">
                Tell us what your laboratory needs.
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-400">
                If you cannot find a specific standard, consumable, chemical,
                or instrument component, contact our team and we can help source
                it through our supplier network.
              </p>
            </div>

            <Link
            to="/contact"
              className="
                inline-flex shrink-0 items-center justify-center gap-2
                rounded-full bg-white px-6 py-3.5
                text-sm font-semibold text-neutral-950
                transition-all duration-300
                hover:bg-[#BF5495] hover:text-white
              "
            >
              Request a Product
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}