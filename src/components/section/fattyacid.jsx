import image from "../../assets/images/fatty acids.jpg";

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <aside className="lg:col-span-3 bg-white border border-gray-300 p-4">
          <div className="mb-6 border border-gray-300 p-4">
            <h2 className="text-xl italic font-medium border-b border-gray-300 pb-2 text-gray-600">
              Fatty Acid Profiling
            </h2>
          </div>

          <div className="mb-6 border border-gray-300 p-4">
            <h2 className="text-lg font-semibold mb-3">
              Technical Support & Resources
            </h2>

            <p className="text-base text-gray-700 leading-6">
              Expert analytical support for fatty acid characterization,
              lipid composition studies, nutritional analysis, and quality
              assurance applications.
            </p>

            <div className="mt-4 space-y-2 text-base text-gray-700">
              <p>
                Phone:
                <a
                  href="tel:+2340000000000"
                  className="text-gray-600 ml-1"
                >
                  +234 9034 956 049
                </a>
              </p>

              <p>
                Email:
                <a
                  href="mailto:info@statscientific.com"
                  className="text-gray-600 ml-1"
                >
                  info@statscientific.com
                </a>
              </p>
            </div>
          </div>

          <div className="mb-6 border border-gray-300 p-4">
            <h2 className="text-lg font-semibold mb-3">
              Lipid Resource Center
            </h2>

            <ul className="text-base space-y-2 text-gray-700">
              <li>Fatty acid analysis fundamentals</li>
              <li>Omega-3 and Omega-6 characterization</li>
              <li>Lipid composition studies</li>
              <li>Nutritional quality assessment</li>
              <li>Food and oil testing resources</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">
              Related Services
            </h2>

            <ul className="space-y-2 text-base text-[#BF5495]">
              <li>Omega-3 Analysis</li>
              <li>Omega-6 Analysis</li>
              <li>EPA & DHA Quantification</li>
              <li>Lipid Composition Analysis</li>
              <li>Nutritional Label Verification</li>
              <li>Fish Oil Testing</li>
              <li>Edible Oil Characterization</li>
              <li>Food Composition Analysis</li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-6 bg-white border border-gray-300 p-6">
          {/* Header */}
          <div className="text-center border-b border-gray-200 pb-6 mb-6">
            <h1 className="text-4xl md:text-5xl font-light text-gray-800">
              Fatty Acid Profiling
            </h1>

            <p className="text-lg text-gray-500 mt-3">
              Comprehensive Characterization of Fatty Acids in Foods,
              Oils, Nutraceuticals, and Natural Products
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-xl h-56 bg-gray-100 border border-gray-300 flex items-center justify-center text-gray-500">
              <img
                src={image}
                alt="Fatty Acid Profiling"
                className="w-full h-full object-cover"
              /> 
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="px-5 py-2 border border-gray-200 text-gray-700 rounded-full hover:bg-cyan-50">
              Service Overview
            </button>

            <button className="px-5 py-2 border border-gray-200 text-gray-700 rounded-full hover:bg-cyan-50">
              Sample Submission Guide
            </button>

            <button className="px-5 py-2 border border-[#BF5495] text-[#BF5495] rounded-full hover:bg-[#BF5495] hover:text-white transition">
              Request A Quote
            </button>
          </div>

          {/* Technical Information */}
          <div className="border border-gray-300 p-5">
            <h2 className="text-2xl font-semibold mb-6">
              Technical Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-base text-gray-900">
              <div className="font-semibold">Service</div>
              <div>Fatty Acid Profiling</div>

              <div className="font-semibold">Purpose</div>
              <div>
                Comprehensive characterization and quantification of
                fatty acids in complex matrices.
              </div>

              <div className="font-semibold">Sample Types</div>
              <div>
                Vegetable oils, fish oils, edible fats, dairy products,
                nutritional supplements, food ingredients, and natural
                products.
              </div>

              <div className="font-semibold">Analysis Type</div>
              <div>
                Qualitative and quantitative fatty acid composition
                analysis.
              </div>

              <div className="font-semibold">Target Compounds</div>
              <div>
                Saturated, monounsaturated, polyunsaturated, Omega-3,
                Omega-6, EPA, DHA, and related fatty acids.
              </div>

              <div className="font-semibold">Analytical Platform</div>
              <div>
                High-Performance Liquid Chromatography (HPLC)
              </div>

              <div className="font-semibold">Applications</div>
              <div>
                Quality control, product development, nutritional
                labeling, research, and regulatory compliance.
              </div>

              <div className="font-semibold">Deliverables</div>
              <div>
                Comprehensive analytical reports detailing fatty acid
                composition and concentration data.
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">
              Service Description
            </h2>

            <p className="text-gray-700 leading-8">
              Fatty Acid Profiling is a specialized analytical service
              designed to identify and quantify fatty acids present in
              foods, oils, dietary supplements, and natural product
              formulations. Accurate fatty acid characterization is
              essential for evaluating nutritional quality, verifying
              product specifications, supporting product development,
              and ensuring compliance with industry requirements.
            </p>

            <p className="text-gray-700 leading-8 mt-4">
              Using advanced chromatographic methodologies, individual
              fatty acids are separated, identified, and quantified to
              generate a complete fatty acid profile. Analysis can
              include saturated fatty acids (SFA), monounsaturated
              fatty acids (MUFA), polyunsaturated fatty acids (PUFA),
              Omega-3 fatty acids, Omega-6 fatty acids, EPA, DHA, and
              other nutritionally important lipid components.
            </p>

            <p className="text-gray-700 leading-8 mt-4">
              Fatty acid profiling plays a critical role in food
              science, nutraceutical development, edible oil testing,
              nutritional labeling, authenticity verification, and
              academic research. The resulting data provides valuable
              insight into product composition, consistency, stability,
              and nutritional value.
            </p>

            <p className="text-gray-700 leading-8 mt-4">
              Detailed analytical reports allow manufacturers,
              researchers, and quality assurance teams to make informed
              decisions regarding formulation optimization, ingredient
              verification, quality monitoring, and regulatory
              submissions.
            </p>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="lg:col-span-3 bg-white border border-gray-300 p-4">
          <h2 className="text-lg font-semibold mb-4">
            Sample Categories
          </h2>

          <ul className="space-y-3 text-base text-gray-900">
            <li>Vegetable Oils</li>
            <li>Fish Oils</li>
            <li>Edible Fats</li>
            <li>Dairy Products</li>
            <li>Nutritional Supplements</li>
            <li>Food Ingredients</li>
            <li>Natural Products</li>
          </ul>

          <button className="mt-6 w-full px-4 py-3 bg-[#BF5495] text-white rounded hover:bg-[#c94c97] hover:text-white transition">
            Request Analysis
          </button>

          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-3">
              Applications
            </h2>

            <ul className="text-base space-y-2 text-gray-900">
              <li>Food Quality Assurance</li>
              <li>Nutritional Label Development</li>
              <li>Ingredient Verification</li>
              <li>Research & Development</li>
              <li>Product Authentication</li>
              <li>Regulatory Support</li>
              <li>Method Validation Studies</li>
            </ul>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-6">
            <h2 className="text-lg font-semibold mb-3">
              Key Fatty Acids
            </h2>

            <ul className="text-base space-y-2 text-gray-900">
              <li>Alpha-Linolenic Acid (ALA)</li>
              <li>Eicosapentaenoic Acid (EPA)</li>
              <li>Docosahexaenoic Acid (DHA)</li>
              <li>Linoleic Acid (LA)</li>
              <li>Oleic Acid</li>
              <li>Palmitic Acid</li>
              <li>Stearic Acid</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

