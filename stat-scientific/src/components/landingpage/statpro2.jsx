

const featuredProducts = [
  {
    title: "Technical Expertise",
    description:
      "We don't simply source products—we understand their analytical applications and can help identify consumables appropriate for your methods and instrumentation.",
  },
  {
    title: "Trusted International Network",
    description:
      "We work with reputable international suppliers to help laboratories obtain genuine analytical products.",
  },
  {
    title: "Scientific Guidance",
    description:
      "Need advice on selecting the right HPLC column or reference standard? Our team can provide technical recommendations based on your analytical objectives.",
  },
  {
    title: "Simplified Procurement",
    description:
      "We coordinate the sourcing process to reduce the time and complexity involved in obtaining specialized laboratory supplies.",
  },
];

export default function ProductsSection() {
  return (
    <section className="max-w-420 mx-auto px-4 lg:px-8 py-16">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose STAT Scientific?
          </h2>

          
        </div>

        

      </div>

      {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
                <div
                key={product.title}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                {/* Top Header */}
                <div className="h-10 bg-[#BF5495]" />
                <div className="flex flex-col p-6 min-h-76">

                    <h3 className="text-2xl font-medium text-gray-900 leading-tight group-hover:text-[#BF5495] transition-colors">
                    {product.title}
                    </h3>

                    <p className="mt-6 text-gray-600 text--base leading-7">
                    {product.description}
                    </p>

                </div>
                </div>
            ))}
        </div>

    </section>
  );
}
