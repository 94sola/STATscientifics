import CompoundThree from "./acid3";

import {
  FileText,
  FlaskConical,
  BarChart3,
  Activity,
  CircleCheck,
  Dna,
  Layers3,
  Sparkles,
} from "lucide-react";

const deliverables = [
  {
    title: "Individual Amino Acid Concentrations",
    description: "Quantitative concentration of each amino acid.",
    icon: FileText,
  },
  {
    title: "Relative Composition",
    description:
      "Percentage contribution of each amino acid to the total amino acid content.",
    icon: BarChart3,
  },
  {
    title: "Essential vs Non-Essential Amino Acids",
    description: "Summary reporting of nutritional amino acid classes.",
    icon: FlaskConical,
  },
];

const proteinMetrics = [
  {
    title: "Essential Amino Acids (EAA)",
    icon: CircleCheck,
  },
  {
    title: "Non-Essential Amino Acids (NEAA)",
    icon: Dna,
  },
  {
    title: "Branched-Chain Amino Acids (BCAA)",
    icon: Activity,
  },
  {
    title: "Aromatic Amino Acids",
    icon: Sparkles,
  },
  {
    title: "Acidic Amino Acids",
    icon: Layers3,
  },
  {
    title: "Basic Amino Acids",
    icon: FlaskConical,
  },
];

export default function CompoundTwo() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-440 px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr]">

          {/* Left */}
          <div>
            <h2 className="text-3xl font-semibold uppercase leading-tight tracking-[0.35em] text-[#BF5495] md:text-4xl">
              REPORTING OPTIONS
            </h2>

            <p className="mt-3 max-w-2xl text-neutral-600 leading-7 italic sm:text-lg lg:text-[1.125rem] lg:leading-7">
              Every amino acid analysis can be reported in one or more formats
              depending on project requirements.
            </p>

            {/* Deliverables */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {deliverables.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-4 transition duration-300 hover:border-[#BF5495]/30 hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF2FA] transition-colors duration-300 group-hover:bg-[#BF5495]">
                      <Icon
                        className="h-5 w-5 text-[#BF5495] transition-colors duration-300 group-hover:text-white"
                        strokeWidth={2}
                      />
                    </div>

                    <div>
                      <p className="text-sm font-medium leading-6 text-neutral-800">
                        {item.title}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-neutral-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Protein Quality Metrics */}
            <div className="mt-10 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">

              {/* Header */}
              <div className="border-b border-neutral-200 bg-white px-5 py-5 sm:px-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF2FA]">
                    <Activity
                      className="h-5 w-5 text-[#BF5495]"
                      strokeWidth={2}
                    />
                  </div>

                  <p className="text-sm font-semibold text-neutral-900">
                    Protein Quality Metrics
                  </p>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {proteinMetrics.map((metric, index) => {
                  const Icon = metric.icon;

                  return (
                    <div
                      key={metric.title}
                      className={`group flex items-center gap-3 border-neutral-200 px-5 py-4 transition-colors duration-300 hover:bg-white sm:px-6 ${
                        index < proteinMetrics.length - 2
                          ? "border-b"
                          : ""
                      } ${
                        index % 2 === 0
                          ? "sm:border-r"
                          : ""
                      }`}
                    >
                      <Icon
                        className="h-4 w-4 shrink-0 text-[#BF5495]"
                        strokeWidth={1.8}
                      />

                      <span className="text-xs font-medium leading-5 text-neutral-700 sm:text-sm">
                        {metric.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            <CompoundThree />
          </div>

        </div>
      </div>
    </section>
  );
}