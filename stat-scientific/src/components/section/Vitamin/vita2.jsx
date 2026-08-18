const results = [
  { compound: "Vitamin A", value: "xx µg/g" },
  { compound: "Vitamin B1", value: "xx mg/g" },
  { compound: "Vitamin B2", value: "xx mg/g" },
];

export default function CompoundThree() {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white shadow-lg overflow-hidden">
      {/* Header */}
      <div className="border-b border-neutral-100 bg-neutral-50 px-6 py-5">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#BF5495]">
          Sample Vitamin Analysis Report
        </p>

        <h3 className="mt-2 text-2xl font-semibold text-neutral-900">
          Report Preview
        </h3>
      </div>

      <div className="space-y-6 p-6">
        {/* Sample */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wide text-neutral-500">
              Sample
            </p>

            <p className="mt-1 font-semibold text-neutral-900">
              Fortified Food Sample A
            </p>
          </div>

          <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
            Verified
          </span>
        </div>

        {/* Chromatographic Profile */}
        <div>
          <p className="mb-3 text-sm font-medium text-neutral-600">
            Vitamin Chromatographic Profile
          </p>

          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
            <svg
              viewBox="0 0 500 140"
              className="h-32 w-full"
              preserveAspectRatio="none"
            >
              <polyline
                fill="none"
                stroke="#BF5495"
                strokeWidth="3"
                points="
                  0,120
                  40,118
                  60,45
                  80,118
                  140,118
                  170,25
                  190,118
                  250,118
                  285,65
                  305,118
                  360,118
                  395,35
                  420,118
                  500,118
                "
              />
            </svg>
          </div>
        </div>

        {/* Results */}
        <div>
          <p className="mb-4 text-sm font-medium text-neutral-600">
            Quantitative Vitamin Results
          </p>

          <div className="overflow-hidden rounded-2xl border border-neutral-200">
            {results.map((item, index) => (
              <div
                key={item.compound}
                className={`flex items-center justify-between px-5 py-3 ${
                  index !== results.length - 1
                    ? "border-b border-neutral-100"
                    : ""
                }`}
              >
                <span className="text-sm text-neutral-700">
                  {item.compound}
                </span>

                <span className="font-semibold text-neutral-900">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Status */}
        <div className="flex flex-wrap gap-3 pt-2">
          <span className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700">
            Calibration Included
          </span>

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            QC Passed
          </span>

          <span className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700">
            Validated Method
          </span>

          <span className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700">
            Analyst Approved
          </span>
        </div>
      </div>
    </div>
  );
}