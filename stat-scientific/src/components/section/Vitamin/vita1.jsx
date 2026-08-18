import CompoundThree from "./vita2";

import {
CheckCircle2,
FileText,
FlaskConical,
BarChart3,
ClipboardCheck,
Award,
} from "lucide-react";

const deliverables = [
{
title: "Sample Identification",
icon: FileText,
},
{
title: "Vitamin Chromatogram",
icon: BarChart3,
},
{
title: "Calibration Standards",
icon: FlaskConical,
},
{
title: "Quantitative Vitamin Results",
icon: ClipboardCheck,
},
{
title: "Analytical Method",
icon: Award,
},
{
title: "Analyst Approval",
icon: CheckCircle2,
},
];

export default function CompoundTwo() {
return ( 
    <section className="bg-white py-16"> <div className="mx-auto max-w-440 px-6 lg:px-8"> <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr]">

      {/* Left */}
      <div>
        <h2 className="mt-4 text-3xl font-semibold uppercase leading-tight tracking-[0.35em] text-[#BF5495] md:text-4xl">
          What You Receive
        </h2>

        <p className="mt-3 max-w-2xl text-neutral-600 leading-7 italic sm:text-lg lg:text-[1.125rem] lg:leading-7">
          Every vitamin analysis project includes a professionally
          structured report containing quantitative vitamin results,
          chromatographic profiles, calibration data, analytical methods,
          and quality assurance documentation.
        </p>

        {/* Deliverables */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {deliverables.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-4 transition duration-300 hover:border-[#BF5495]/30 hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF2FA]">
                  <Icon
                    className="h-5 w-5 text-[#BF5495]"
                    strokeWidth={2}
                  />
                </div>

                <span className="text-sm font-medium text-neutral-800">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Bottom Information */}
        <div className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
          <p className="text-sm leading-7 text-neutral-600">
            Every vitamin analysis report is reviewed before release to
            ensure analytical accuracy, result traceability, and compliance
            with validated laboratory procedures.
          </p>
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
