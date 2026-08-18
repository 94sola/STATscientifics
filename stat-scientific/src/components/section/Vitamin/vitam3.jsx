import medicinalPlantImg from "../../../assets/images/fatty acids.jpg";
import naturalProductImg from "../../../assets/images/image.png";
import functionalFoodImg from "../../../assets/images/Phenolics.jpg";
import herbalProductImg from "../../../assets/images/Proten.jpg";
import academicResearchImg from "../../../assets/images/vitamins.jpg";

const applications = [
{
image: medicinalPlantImg,
title: "Food & Beverage Analysis",
description:
"Quantification of essential vitamins in food and beverage products to support nutritional profiling and quality control.",
},
{
image: naturalProductImg,
title: "Dietary Supplements",
description:
"Verification of vitamin concentrations in supplements and nutraceutical formulations to support product quality and compliance.",
},
{
image: functionalFoodImg,
title: "Nutritional Research",
description:
"Measurement of vitamin levels in food ingredients and samples for nutritional studies and formulation development.",
},
{
image: herbalProductImg,
title: "Pharmaceutical Products",
description:
"Quantitative analysis of vitamins in pharmaceutical and fortified formulations during product development and quality assurance.",
},
{
image: academicResearchImg,
title: "Academic Research",
description:
"Reliable vitamin quantification to support MSc, PhD, clinical nutrition, food science, and collaborative research projects.",
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
          Our vitamin analysis solutions support nutritional research,
          quality assurance, product development, and regulatory testing
          across food, supplements, pharmaceuticals, and academic
          laboratories.
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
                className="h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-110"
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
