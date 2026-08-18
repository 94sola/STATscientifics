import CompoundThree from "./fat2";

import {
  FileText,
  BarChart3,
  Activity,
  CircleCheck,
  Layers3,
  FlaskConical,
} from "lucide-react";

const deliverables = [
  {
    title: "Individual Fatty Acid Concentrations",
    description:
      "Quantitative concentration of each detected fatty acid.",
    icon: FileText,
  },
  {
    title: "Relative Composition",
    description:
      "Percentage contribution of each fatty acid to the total fatty acid composition.",
    icon: BarChart3,
  },
];

const lipidClassSummary = [
  {
    title: "Total Saturated Fatty Acids (SFA)",
    icon: CircleCheck,
  },
  {
    title: "Total Monounsaturated Fatty Acids (MUFA)",
    icon: Activity,
  },
  {
    title: "Total Polyunsaturated Fatty Acids (PUFA)",
    icon: Layers3,
  },
];

const transFatAnalysis = [
  {
    title: "Percentage Trans Fat",
    icon: FlaskConical,
  },
  {
    title: "Trans fat expressed as g/100 g food",
    icon: Activity,
  },
];

export default function CompoundTwo() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-440 px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr]">

          {/* Left */}
          <div>
            <h2 className="mt-4 text-3xl font-semibold uppercase leading-tight tracking-[0.35em] text-[#BF5495] md:text-4xl">
              INCLUDED REPORTING OPTIONS
            </h2>

            <p className="mt-3 max-w-2xl text-neutral-600 leading-7 italic sm:text-lg lg:text-[1.125rem] lg:leading-7">
              Every fatty acid profile can be reported as one or more of the
              following depending on project requirements.
            </p>

            {/* Individual Reporting Options */}
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

            {/* Lipid Class Summary */}
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

                  <div>
                    <p className="text-sm font-semibold text-neutral-900">
                      Lipid Class Summary
                    </p>

                    <p className="mt-1 text-xs text-neutral-500">
                      Automatically calculate
                    </p>
                  </div>
                </div>
              </div>

              {/* Lipid Classes */}
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {lipidClassSummary.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className={`group flex items-center gap-3 border-neutral-200 px-5 py-4 transition-colors duration-300 hover:bg-white sm:px-6 ${
                        index === 0
                          ? "border-b sm:col-span-2"
                          : ""
                      } ${
                        index === 1
                          ? "sm:border-r"
                          : ""
                      }`}
                    >
                      <Icon
                        className="h-4 w-4 shrink-0 text-[#BF5495]"
                        strokeWidth={1.8}
                      />

                      <span className="text-xs font-medium leading-5 text-neutral-700 sm:text-sm">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Trans Fat Analysis */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">

              {/* Header */}
              <div className="border-b border-neutral-200 bg-white px-5 py-5 sm:px-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF2FA]">
                    <FlaskConical
                      className="h-5 w-5 text-[#BF5495]"
                      strokeWidth={2}
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-neutral-900">
                      Trans Fat Analysis
                    </p>

                    <p className="mt-1 text-xs text-neutral-500">
                      Where requested, reports also include
                    </p>
                  </div>
                </div>
              </div>

              {/* Trans Fat Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {transFatAnalysis.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className={`group flex items-center gap-3 px-5 py-4 transition-colors duration-300 hover:bg-white sm:px-6 ${
                        index === 0
                          ? "border-b border-neutral-200 sm:border-b-0 sm:border-r"
                          : ""
                      }`}
                    >
                      <Icon
                        className="h-4 w-4 shrink-0 text-[#BF5495]"
                        strokeWidth={1.8}
                      />

                      <span className="text-xs font-medium leading-5 text-neutral-700 sm:text-sm">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* WHO Note */}
              <div className="border-t border-neutral-200 bg-white px-5 py-4 sm:px-6">
                <p className="text-xs leading-6 text-neutral-500">
                  Using procedures aligned with WHO recommendations.
                </p>
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