import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import slide1 from "../../assets/images/banner.jpg";

const slides = [
  {
    title: "Laboratory Sourcing & Scientific Procurement",
    subtitle:
      "Accessing high-quality laboratory consumables shouldn't slow down your research.",
    image: slide1,
  },
];

const trending = [
  "HPLC & GC Columns",
  "Certified Reference Standards",
  "HPLC & LC-MS Solvents",
  "Analytical Reagents",
  "Sample Preparation Consumables",
  "Laboratory Glassware & Accessories",
  "Instrument Spare Parts",
];

export default function BannerSection() {
  const [current] = useState(0);

  return (
    <section className="max-w-420 mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 lg:gap-8 items-start">
      
        <div className="xl:col-span-3">
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              shadow-2xl
              min-h-[400px]
              sm:min-h-[450px]
              md:min-h-[530px]
              lg:min-h-[580px]
              xl:min-h-[630px]
            "
            style={{
              backgroundImage: `url(${slides[current].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
           
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/25 to-black/15"></div>

            {/* Content */}
            <div className="relative z-10 flex items-center h-full p-4 sm:p-6 md:p-8 lg:p-10">
              <div
                className="
                  w-full
                  max-w-3xl
                  rounded-xl
                  bg-black/30
                  backdrop-blur-xl
                  border
                  border-white/20
                  shadow-[0_8px_40px_rgba(0,0,0,0.35)]
                  p-6
                  sm:p-8
                  md:p-10
                  lg:p-12
                "
              >
                <h2
                  className="
                    text-white
                    text-xl
                    sm:text-2xl
                    md:text-3xl
                    lg:text-4xl
                    xl:text-5xl
                    font-medium
                    leading-tight
                  "
                >
                  {slides[current].title}
                </h2>

                <p
                  className="
                    mt-5
                    max-w-2xl
                    text-white/90
                    text-base
                    sm:text-lg
                    md:text-xl
                    leading-7
                    sm:leading-8
                  "
                >
                  {slides[current].subtitle}
                </p>

                <Link
                  to="/product"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    mt-8
                    px-6
                    sm:px-8
                    py-3.5
                    rounded-xl
                    bg-[#661c48]
                    text-white
                    font-semibold
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:text-[#BF5495]
                    hover:scale-105
                    shadow-lg
                  "
                >
                  View All Products
                  <ArrowRight size={18} />
                </Link>

                <div className="flex gap-3 mt-10">
                  {slides.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        current === index
                          ? "bg-white w-10"
                          : "bg-white/40 w-6"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="w-full">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-8">
              Our sourcing services include:
            </h3>

            <div className="space-y-5">
              {trending.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 pb-5 border-b border-gray-100 last:border-none group cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold shrink-0">
                    {index + 1}
                  </div>

                  <p className="text-sm sm:text-base text-gray-700 leading-7 transition duration-300 group-hover:text-[#BF5495]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}