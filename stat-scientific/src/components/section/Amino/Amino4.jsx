import food from "../../../assets/images/fatty acids.jpg";
import feed from "../../../assets/images/image.png";
import protein from "../../../assets/images/Phenolics.jpg";
import agric from "../../../assets/images/Proten.jpg";
import functional from "../../../assets/images/vitamins.jpg";
import academic from "../../../assets/images/Phenolics.jpg";
import quality from "../../../assets/images/Proten.jpg";

const applications = [
  {
    image: food,
    title: "Food & Nutrition",
    description:
      "Determine the amino acid composition of food products for nutritional characterization and product development.",
  },
  {
    image: feed,
    title: "Animal Feed Analysis",
    description:
      "Evaluate amino acid profiles of feed ingredients to assess nutritional quality and optimize feed formulations.",
  },
  {
    image: protein,
    title: "Protein Quality Assessment",
    description:
      "Characterize proteins from plant, animal and microbial sources for research and quality control.",
  },
  {
    image: agric,
    title: "Agricultural Research",
    description:
      "Compare protein composition among crop varieties, breeding lines and experimental treatments.",
  },
  {
    image: functional,
    title: "Functional Foods & Nutraceuticals",
    description:
      "Support the development and quality evaluation of protein supplements and functional food ingredients.",
  },
  {
    image: academic,
    title: "Academic & Biomedical Research",
    description:
      "Generate high-quality compositional data for life science, nutrition and biochemical research.",
  },
  {
    image: quality,
    title: "Quality Control",
    description:
      "Monitor batch-to-batch consistency of protein-rich raw materials and finished products.",
  },
];

export default function TypicalApplications() {
  return (
    <section className="bg-gray-100 py-10 font-manrope sm:py-14 lg:py-20">
      <div className="mx-auto max-w-440 px-5 sm:px-8 lg:px-8">

        {/* Heading */}
        <div className="my-6 max-w-3xl">
          <h2 className="text-3xl font-semibold uppercase leading-tight tracking-[0.15em] text-[#BF5495] md:text-4xl">
            Applications
          </h2>

          <p className="mt-3 max-w-2xl italic leading-7 text-neutral-600 sm:text-lg lg:text-[1.125rem] lg:leading-7">
            Our amino acid analysis solutions support nutritional research,
            quality assurance, product development, and regulatory testing
            across food, supplements, pharmaceuticals, and academic
            laboratories.
          </p>
        </div>

        {/* Desktop: 4 top / 3 centered bottom */}
        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-x-0 lg:bg-neutral-100">

          {applications.map((item, index) => {
            const isBottomRow = index >= 4;

            return (
              <div
                key={index}
                className={`group relative flex flex-col px-8 py-10 transition-all duration-300 hover:bg-neutral-50 ${
                  index !== 0
                    ? "border-l border-neutral-200"
                    : ""
                } ${
                  isBottomRow
                    ? "border-t border-neutral-200"
                    : ""
                } ${
                  index === 4
                    ? "lg:col-start-1"
                    : ""
                }`}
              >
                {/* Image */}
                <div className="mb-9">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-2xl font-medium leading-snug text-neutral-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-base leading-7 text-neutral-700 lg:text-[1.05rem]">
                  {item.description}
                </p>
              </div>
            );
          })}

          {/* Empty space after the 3rd card in bottom row */}
          <div className="hidden lg:block border-t border-neutral-200" />
        </div>

        {/* Tablet */}
        <div className="hidden md:grid md:grid-cols-2 lg:hidden bg-neutral-100">
          {applications.map((item, index) => (
            <div
              key={index}
              className={`group p-8 transition-all duration-300 hover:bg-neutral-50 ${
                index % 2 === 0
                  ? "border-r border-neutral-200"
                  : ""
              } ${
                index < applications.length - 1
                  ? "border-b border-neutral-200"
                  : ""
              }`}
            >
              <div className="mb-8">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <h3 className="mb-4 text-2xl font-medium text-neutral-900">
                {item.title}
              </h3>

              <p className="leading-7 text-neutral-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="grid bg-neutral-100 md:hidden">
          {applications.map((item, index) => (
            <div
              key={index}
              className={`group flex gap-5 px-5 py-7 transition-all duration-300 hover:bg-neutral-50 ${
                index !== applications.length - 1
                  ? "border-b border-neutral-200"
                  : ""
              }`}
            >
              {/* Image */}
              <div className="shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20"
                />
              </div>

              {/* Content */}
              <div className="min-w-0">
                <h3 className="mb-2 text-lg font-semibold leading-snug text-neutral-900 sm:text-xl">
                  {item.title}
                </h3>

                <p className="text-sm leading-6 text-neutral-600 sm:text-[15px] sm:leading-7">
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