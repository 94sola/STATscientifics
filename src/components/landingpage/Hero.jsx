import { Link } from "react-router-dom";

export default function WelcomeSection() {
  return (
    <section className="bg-gray-100 py-12 md:py-16 lg:py-20">
      <div className="max-w-440 mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 md:mb-8">
          Welcome to STAT Scientific
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Main Card */}
          <div className="lg:col-span-6 bg-white border border-gray-200 rounded-xl px-12 py-6 md:py-8 md:px-16 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-4 md:mb-6">
              Precision Analytics. Scientific Insight.
            </h3>

            <div className="flex flex-col h-full">
              <div>
                <p className="text-base md:text-lg text-gray-600 font-medium leading-relaxed">
                  STAT Scientific is an independent analytical laboratory
                  dedicated to advancing food science, natural products
                  research, and quality assurance through high-performance
                  analytical chemistry.
                </p>
              </div>

              <Link
                to="/#about"
              className="mt-8 inline-flex items-center justify-center w-full sm:w-auto max-w-[180px] border border-[#BF5495] text-black font-medium px-6 py-3 rounded-lg hover:bg-[#BF5495] hover:text-white transition-all duration-300">
                Learn More
              </Link>
            </div>
          </div>

          {/* Focus Card */}
          <div className="lg:col-span-3 bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-5">
              Our Focus
            </h3>

            <ul className="text-gray-700 leading-relaxed flex-grow space-y-3">
              <li>Food Chemistry</li>
              <li>Natural Products Research</li>
              <li>Phytochemical Analysis</li>
              <li>Quality Assurance</li>
              <li>HPLC Method Development</li>
              <li>Nutritional Analysis</li>
            </ul>
          </div>

          {/* Vision Card */}
          <div className="lg:col-span-3 bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-5">
              Vision
            </h3>

            <p className="text-gray-600 leading-relaxed flex-grow">
              At STAT Scientific, we believe analytical laboratories should do
              more than generate reports.They should generate knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}