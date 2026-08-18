import { ChevronRight, } from "lucide-react";
import chromatographyImg from "../../../assets/images/Phenolics.jpg";
import { Link } from "react-router-dom";

export default function PhenolicsSection() {
  return (
    <section className="w-full font-manrope">
      <div className="grid min-h-105 grid-cols-1 lg:grid-cols-2">
        {/* LEFT */}
        <div className="bg-gray-300 flex items-center justify-center px-8 sm:px-12 lg:px-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-neutral-900">
              Quantitative Phenolic &
              <br />
              Flavonoid Analysis
            </h1>

            <div className="w-32 h-px bg-gray-800/70 mt-6 mb-10"></div>
            <p className="mb-10 max-w-3xl text-lg md:text-xl lg:text-2xl font-light tracking-tight text-neutral-900">
              Reliable quantification of key bioactive compounds in plant
              extracts.
            </p>

            <Link
            to="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-[#661c48] px-6 py-4 text-gray-50 text-base font-medium transition-all duration-300 hover:bg-gray-100 hover:text-[#661c48]"
          >
            REQUEST A QUOTE
            <ChevronRight
              size={12}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          </div>
        </div>

        <div className="relative min-h-87.5 lg:min-h-full">
          <img
            src={chromatographyImg}
            alt="Phenolic Analysis"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
      
    </section>
  );
}