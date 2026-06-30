import image from "../../assets/images/fatty.png";

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <aside className="lg:col-span-3 bg-white border border-gray-300 p-4">
          <div className="mb-6 border border-gray-300 p-4">
            <h2 className="text-xl italic font-medium border-b border-gray-300 pb-2 text-gray-600">
             Amino Acid Profiling
            </h2>
          </div>

          <div className="mb-6 border border-gray-300 p-4">
            <h2 className="text-lg font-semibold mb-3">
              Technical Support & Resources
            </h2>

            <p className="text-base text-gray-700 leading-6">
            Expert analytical support for amino acid characterization,
            protein composition studies, nutritional analysis,
            food quality assessment, and research applications..
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
              Amino Acid Resource Center
            </h2>

            <ul className="text-base space-y-2 text-gray-700">
              <li>Amino acid analysis fundamentals</li>
              <li>Essential amino acid quantification</li>
              <li>Protein composition studies</li>
              <li>Food and feed quality assessment</li>
              <li>Nutritional analysis resources</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">
              Related Services
            </h2>

            <ul className="space-y-2 text-base text-gray-500">
              <li>Essential Amino Acid Analysis</li>
              <li>Non-Essential Amino Acid Analysis</li>
              <li>Protein Composition Analysis</li>
              <li>Hydrolyzed Amino Acid Profiling</li>
              <li>Nutritional Label Verification</li>
              <li>Feed Analysis</li>
              <li>Research Sample Analysis</li>
              <li>Food Composition Analysis</li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-6 bg-white border border-gray-300 p-6">
          {/* Header */}
          <div className="text-center border-b border-gray-200 pb-6 mb-6">
            <h1 className="text-4xl md:text-5xl font-light text-gray-800">
              Amino Acid Profiling
            </h1>

            <p className="text-lg text-gray-500 mt-3">
            Comprehensive Characterization of Amino Acids in Foods,
            Feeds, Biological Samples, Nutraceuticals, and Natural Products
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-xl h-56 bg-gray-100 border border-gray-300 flex items-center justify-center text-gray-500">
              <img
                src={image}
                alt="Amino Acid Profiling"
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

            <button className="px-5 py-2 border border-[#fff5bf] text-gray-700 rounded-full hover:bg-[#fff5bf] hover:text-gray-800 transition">
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
              <div>Amino Acid Profiling</div>

              <div className="font-semibold">Purpose</div>
              <div>
              Comprehensive identification and quantification of
              amino acids in complex biological and food matrices.
              </div>

              <div className="font-semibold">Sample Types</div>
              <div>
                Foods, feeds, biological tissues,
                protein isolates, nutritional supplements,
                pharmaceutical samples,
                agricultural products,
                and natural products.
              </div>

              <div className="font-semibold">Analysis Type</div>
              <div>
                Qualitative and quantitative amino acid composition
                analysis.
              </div>

              <div className="font-semibold">Target Compounds</div>
              <div>
                Essential amino acids,
                non-essential amino acids,
                branched-chain amino acids (BCAA),
                aromatic amino acids,
                and sulfur-containing amino acids.
              </div>

              <div className="font-semibold">Analytical Platform</div>
              <div>
                High-Performance Liquid Chromatography (HPLC)
              </div>

              <div className="font-semibold">Applications</div>
              <div>
                Quality control,
                protein characterization,
                nutritional labeling,
                research,
                and regulatory compliance..
              </div>

              <div className="font-semibold">Deliverables</div>
              <div>
                Comprehensive analytical reports detailing amino acid
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
            Amino Acid Profiling is a specialized analytical service designed
            to identify and quantify amino acids present in food products,
            nutritional supplements, biological samples, feeds,
            pharmaceutical formulations, and natural products.
            Accurate amino acid characterization is essential for evaluating
            protein quality, nutritional value, ingredient authenticity,
            product development, and regulatory compliance.
            </p>

            <p className="text-gray-700 leading-8 mt-4">
            Using advanced chromatographic methodologies, individual amino acids are separated,
            identified, and quantified to generate a complete amino acid profile.
            Analysis includes essential amino acids,
            non-essential amino acids, branched-chain amino acids (BCAA),
            aromatic amino acids, and other nutritionally important compounds.
            </p>

            <p className="text-gray-700 leading-8 mt-4">
            Amino acid profiling plays an important role in food science,
            nutrition, pharmaceutical research, animal feed evaluation, clinical research, quality assurance, and academic studies.
            The analytical results provide valuable insight into protein composition,
            sample quality, consistency, and nutritional performance.
            </p>

            <p className="text-gray-700 leading-8 mt-4">
            Detailed analytical reports enable manufacturers, researchers, quality assurance laboratories,
            and regulatory agencies to make informed decisions regarding product formulation,
            ingredient verification, quality monitoring, and scientific research.
            </p>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="lg:col-span-3 bg-white border border-gray-300 p-4">
          <h2 className="text-lg font-semibold mb-4">
            Sample Categories
          </h2>

          <ul className="space-y-3 text-base text-gray-900">
            <li>Foods</li>
            <li>Feeds</li>
            <li>Protein Isolates</li>
            <li>Biological Samples</li>
            <li>Nutritional Supplements</li>
            <li>Agricultural Products</li>
            <li>Natural Products</li>
          </ul>

          <button className="mt-6 w-full px-4 py-3 bg-[#fff5bf] text-gray-700 rounded hover:bg-[#fff5bf] hover:text-black transition">
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
              <li>Protein Characterization</li>
              <li>Clinical Research</li>
              <li>Method Validation Studies</li>
            </ul>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-6">
            <h2 className="text-lg font-semibold mb-3">
              Key Amino Acids
            </h2>

            <ul className="text-base space-y-2 text-gray-900">
              <li>Leucine (ALA)</li>
              <li>Isoleucine (ILE)</li>
              <li>Valine (VAL)</li>
              <li>Lysine (LYS)</li>
              <li>Methionine (MET)</li>
              <li>Threonine (THR)</li>
              <li>Phenylalanine (PHE)</li>
              <li>Tryptophan (TRP)</li>
              <li>Histidine (HIS)</li>
              <li>Arginine (ARG)</li>
              <li>Glutamine Acid (GLN)</li>
              <li>Asparagine (ASN)</li>
              <li>Serine (SER)</li>
              <li>Glycine (GLY)</li>
              <li>Proline (PRO)</li>
              <li>Tyrosine (TYR)</li>
              <li>Aspartic Acid</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

