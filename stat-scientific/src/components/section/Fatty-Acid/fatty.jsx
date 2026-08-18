import {
  FlaskConical,
  Beaker,
  GitBranch,
  SearchCheck,
  FileCheck2,
} from "lucide-react";

const workflowSteps = [
  {
    number: "01",
    title: "Sample Preparation",
    description:
      "Samples are prepared for fatty acid analysis to ensure efficient extraction and conversion of fatty acids into fatty acid methyl esters (FAMEs) suitable for chromatographic analysis.",
    icon: FlaskConical,
  },
  {
    number: "02",
    title: "FAME Derivatization",
    description:
      "Fatty acids are converted to fatty acid methyl esters (FAMEs) to produce derivatives suitable for gas chromatographic separation and detection.",
    icon: Beaker,
  },
  {
    number: "03",
    title: "Chromatographic Separation",
    description:
      "Fatty acid methyl esters are separated using GC-FID with a CP-Sil 88 column, providing high-resolution separation of saturated, monounsaturated, polyunsaturated, and trans fatty acids.",
    icon: GitBranch,
  },
  {
    number: "04",
    title: "Identification & Quantification",
    description:
      "Individual fatty acids are identified and quantified using authenticated FAME calibration standards, including the 37-component certified reference mixture.",
    icon: SearchCheck,
  },
  {
    number: "05",
    title: "Data Review & Reporting",
    description:
      "Analytical data undergo quality review before results are reported as individual fatty acid concentrations, relative composition, lipid class summaries, and trans fat measurements where requested.",
    icon: FileCheck2,
  },
];

export default function AminoAcidWorkflow() {
  return (
    <section className="relative overflow-hidden bg-gray-200 py-20 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-440 px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold leading-tight uppercase tracking-[0.15em] text-[#BF5495] md:text-4xl">
            Comprehensive Fatty Acid & Trans Fat Analysis
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-neutral-600 leading-7 italic sm:text-lg lg:text-[1.125rem] lg:leading-7">
            A structured analytical workflow designed to provide reliable
            fatty acid identification, quantification, trans fat analysis,
            data review, and reporting.
          </p>
        </div>

        {/* Workflow */}
        <div className="relative mt-16 lg:mt-20">

          {/* Desktop connecting line */}
          <div className="absolute left-[10%] right-[10%] top-[30px] hidden h-px bg-neutral-300 lg:block" />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">

            {workflowSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative"
                >

                  {/* Number / Icon */}
                  <div className="relative z-10 mx-auto flex h-[62px] w-[62px] items-center justify-center border border-neutral-300 bg-[#f7f5f1] transition-all duration-300 group-hover:border-[#BF5495] lg:mx-0">
                    <Icon
                      className="h-6 w-6 text-[#BF5495]"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Number */}
                  <div className="mt-5 text-center lg:text-left">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#BF5495]">
                      Step {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-3 text-center lg:text-left">
                    <h3 className="text-xl font-semibold leading-tight tracking-[-0.02em] text-neutral-900">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-neutral-600">
                      {step.description}
                    </p>
                  </div>

                </article>
              );
            })}

          </div>
        </div>

        {/* Bottom statement */}
        <div className="my-16 border-t border-neutral-300 pt-8 sm:mt-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
              Sample Preparation
            </p>

            <div className="hidden h-px flex-1 bg-neutral-200 sm:mx-8 sm:block" />

            <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
              Identification & Quantification
            </p>

            <div className="hidden h-px flex-1 bg-neutral-200 sm:mx-8 sm:block" />

            <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
              Data Review & Reporting
            </p>

          </div>
        </div>

        {/* Note */}
        <div className="my-5 rounded-2xl border border-[#BF5495]/20 bg-[#FFF8FC] max-w-4xl mx-auto px-10 sm:px-`12 lg:px-16 py-10 text-center">

            <h3 className="text-xl md:text-2xl font-semibold leading-tight uppercase tracking-[0.15em] text-[#BF5495]">NEED A LIPID PROFILE?</h3>

            <p className="text-sm leading-7 text-neutral-700">
            Whether you're evaluating edible oils, monitoring trans fats, authenticating premium products
            or conducting nutritional research, our GC-FID platform delivers reliable fatty acid composition data with
            excellent chromatographic resolution and flexible reporting options tailored to your project.
            </p>
            
        </div>


      </div>
    </section>
  );
}