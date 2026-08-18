import medicinalPlantImg from "../../../assets/images/fatty acids.jpg";
import naturalProductImg from "../../../assets/images/image.png";
import functionalFoodImg from "../../../assets/images/Phenolics.jpg";
import herbalProductImg from "../../../assets/images/Proten.jpg";
import academicResearchImg from "../../../assets/images/vitamins.jpg";

const applications = [
  {
    image: medicinalPlantImg,
    title: "Medicinal Plant Research",
    description:
      "Characterisation of phytochemical markers in leaves, bark, roots and seeds.",
  },
  {
    image: naturalProductImg,
    title: "Natural Product Research",
    description:
      "Quantification of bioactive constituents in crude extracts and purified fractions.",
  },
  {
    image: functionalFoodImg,
    title: "Functional Foods",
    description:
      "Analysis of antioxidant compounds in food products and nutraceutical ingredients.",
  },
  {
    image: herbalProductImg,
    title: "Herbal Products",
    description:
      "Verification of phytochemical composition during product development.",
  },
  {
    image: academicResearchImg,
    title: "Academic Research",
    description:
      "Support for MSc, PhD and collaborative research projects.",
  },
];

export default function TypicalApplications() {
  return (
    <section className="bg-gray-100 py-10 font-manrope">
      <div className="max-w-440 mx-auto px-6 lg:px-8">

        <div className="max-w-3xl my-6">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight uppercase tracking-[0.15em] text-[#BF5495]">
            Applications
          </h2>

          <p className="mt-3 max-w-2xl italic text-neutral-600 leading-7 sm:text-lg lg:text-[1.125rem] lg:leading-7">
            Our analytical solutions support research, quality assurance, and
            product development across pharmaceuticals, natural products,
            nutraceuticals, and academic laboratories.
          </p>
        </div>

        <div className="hidden lg:grid lg:grid-cols-5 py-10 bg-neutral-100">
          {applications.map((item, index) => (
            <div
              key={index}
              className="relative px-8 py-10 transition-all duration-300 group hover:bg-neutral-50"
            >
              {index !== 0 && (
                <div className="absolute left-0 top-0 h-full w-px bg-neutral-100" />
              )}

              <div className="my-10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <h3 className="my-4 text-2xl font-medium leading-snug text-neutral-900">
                {item.title}
              </h3>

              <p className="text-lg leading-8 text-neutral-800 sm:text-lg lg:text-[1.125rem] lg:leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tablet */}
        <div className="hidden md:grid lg:hidden grid-cols-2">
          {applications.map((item, index) => (
            <div
              key={index}
              className={`p-8 transition-all duration-300 group hover:bg-neutral-50 ${
                index % 2 === 0 ? "border-r border-neutral-100" : ""
              } ${
                index < applications.length - 1
                  ? "border-b border-neutral-100"
                  : ""
              }`}
            >
              <div className="mb-10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-24 w-24   object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <h3 className="mb-4 text-2xl font-medium text-neutral-900">
                {item.title}
              </h3>

              <p className="mb-6 leading-7 text-neutral-800">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="grid md:hidden">
          {applications.map((item, index) => (
            <div
              key={index}
              className={`flex gap-5 p-6 transition-all duration-300 hover:bg-neutral-50 ${
                index !== applications.length - 1
                  ? "border-b border-neutral-100"
                  : ""
              }`}
            >
              <div className="shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-20 w-20 object-contain"
                />
              </div>

              <div>
                <h3 className="mb-2 text-xl font-medium text-neutral-900">
                  {item.title}
                </h3>

                <p className="mb-3 text-sm leading-7 text-neutral-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}