import { ArrowUpRight } from "lucide-react";

import leftImage1 from "../../assets/images/hero.jpg";
import leftImage2 from "../../assets/images/gc.jpg";
import leftImage3 from "../../assets/images/gc-ms.jpg";
import leftImage4 from "../../assets/images/data.jpg";

export default function Hero() {
  return (
    <section className="bg-[#f3f3f3] py-8 lg:py-14 text-white font-sans">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          <div className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-2xl bg-[#05203f] min-h-105 shadow-lg group">

              <div className="absolute top-0 left-0 w-52 h-20 bg-[#fcaed9] rounded-br-[60px]" />



              <div className="absolute top-0 right-0 w-[40%] h-[65%] overflow-hidden rounded-bl-[90px]">
                <img
                  src={leftImage1}
                  alt=""
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>


              <div className="absolute bottom-0 right-0 w-60 h-36 bg-[#fcaed9] rounded-tl-[80px]" />

              {/* Content */}

              <div className="absolute bottom-12 left-8 lg:left-10 max-w-lg">
                <h2 className="text-4xl font-medium text-white">
                Volatiles & Lipid Profiling by GC-FID
                </h2>

                <p className="mt-4 text-lg font-light text-gray-50">
                Quantitative analysis of volatile organic compounds and comprehensive FAMES 
                </p>

                <button className="mt-8 inline-flex items-center gap-2 text-white font-bold text-xl hover:gap-4 transition-all">
                  Discover More
                  <ArrowUpRight size={22} />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="relative overflow-hidden rounded-2xl bg-[#05203f] min-h-105 shadow-lg group">

              <div className="absolute top-0 right-0 w-[42%] h-32 overflow-hidden">
                <img
                  src={leftImage2}
                  alt=""
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="absolute bottom-10 px-8">
                <h3 className="text-4xl font-medium text-white leading-tight">
                  Pesticide residue testing by GC-MSD
                </h3>

                <p className="mt-5 text-lg font-light text-gray-50">
                  Achieve low ppb detection of various pesticide residues in food products
                </p>

                <button className="mt-8 inline-flex items-center gap-2 text-white font-bold text-xl hover:gap-4 transition-all">
                  Discover more
                  <ArrowUpRight size={22} />
                </button>
              </div>
            </div>
          </div>

          {/* BOTTOM LEFT CARD */}

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl bg-[#033741] min-h-65 shadow-lg group">
              {/* Pink Shape */}

              <div className="absolute top-0 right-0 w-56 h-28 bg-[#c8ec8d] rounded-bl-[90px]" />

              {/* Blue Shape */}

              <div className="absolute bottom-0 right-10 w-36 h-16 bg-[#c8ec8d] rounded-t-[40px]" />


              <div className="absolute left-8 bottom-8 text-white max-w-md">
                <h3 className="text-4xl font-medium text-white">
                  Nutritional Profiling by HPLC
                </h3>

                <p className="mt-4 text-lg font-light text-gray-50">
                 Quantify fat/water soluble vitamins and amino acids in foods at high resolution.
                </p>

                <button className="mt-8 inline-flex items-center gap-2 text-white font-bold text-xl hover:gap-4 transition-all">
                  Discover more
                  <ArrowUpRight size={22} />
                </button>
              </div>
            </div>
          </div>


          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl bg-[#033741] min-h-65 shadow-lg group">


              <div className="absolute top-0 left-0 w-20 h-10 bg-[#c8ec8d] rounded-br-[30px]" />

              <div className="absolute top-0 right-0 w-44 h-full bg-[#c8ec8d] rounded-bl-[80px]" />

              
              <div className="absolute left-8 top-12 max-w-md">
                <h3 className="text-4xl font-medium text-white leading-tight">
                  Trace Organic Pollutant Analysis by GC-MSD
                </h3>

                <p className="mt-4 text-lg font-light text-gray-50">
                  Definitive identification and ultra-trace quantification of environmental and industrial contaminants
                </p>

                <button className="mt-8 inline-flex items-center gap-2 text-white font-bold text-xl hover:gap-4 transition-all">
                 discover now
                  <ArrowUpRight size={22} />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-2xl bg-[#05203f] min-h-105 shadow-lg group">

              <div className="absolute top-0 right-0 w-[40%] h-[65%] overflow-hidden rounded-bl-[90px]">
                <img
                  src={leftImage3}
                  alt=""
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>


              <div className="absolute bottom-12 left-8 lg:left-10 max-w-lg">
                <h2 className="text-4xl  font-medium text-white">
                 Non-Target Screening by GC-MS
                </h2>

                <p className="mt-4 text-lg font-light text-gray-50">
                 Comprehensive mass spectral matching using extensive reference databases (NIST23) in the analysis of plant extracts for phytochemical studies.
                </p>

                <button className="mt-8 inline-flex items-center gap-2 text-white font-bold text-xl hover:gap-4 transition-all">
                  Discover More
                  <ArrowUpRight size={22} />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="relative overflow-hidden rounded-2xl bg-[#05203f] min-h-105 shadow-lg group">


              <div className="absolute top-0 right-0 w-[42%] h-32 overflow-hidden">
                <img
                  src={leftImage4}
                  alt=""
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="absolute bottom-10 px-8">
                <h3 className="text-4xl font-medium text-white leading-tight">
                Quantitative Phenolics & Flavonoids Analysis
                </h3>

                <p className="mt-5 text-lg font-light text-gray-50">
                  Subtext: High-resolution profiling of bioactive polyphenols and structural phytochemical markers using HPLC and derivatized GC-MS.
                </p>

                <button className="mt-8 inline-flex items-center gap-2 text-white font-bold text-xl hover:gap-4 transition-all">
                  Discover More
                  <ArrowUpRight size={22} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}