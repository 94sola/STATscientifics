import { Link } from "react-router-dom";

import balancesImg from "../../../assets/images/image1.png";
import chemicalsImg from "../../../assets/images/image4.jpg";
import beakersImg from "../../../assets/images/Phenolics.jpg";
import ppeImg from "../../../assets/images/Proten.jpg";
import safetyImg from "../../../assets/images/image3.jpg";
import furnitureImg from "../../../assets/images/images.jpg";
import modelsImg from "../../../assets/images/Phenolics.jpg";

export default function ProductCategories() {
  const categories = [
    { name: "Injector Needles", img: balancesImg },
    { name: "HPLC Columns", img: chemicalsImg },
    { name: "Guard Columns", img: beakersImg },
    { name: "UHPLC Columns", img: ppeImg },
    { name: "GC Columns", img: safetyImg },
    { name: "Syringe Filters", img: furnitureImg },
    { name: "HPLC Vials & Caps", img: modelsImg },
    { name: "Autosampler Consumables", img: modelsImg },
  ];

  return (
    <>
      <section className="bg-white py-16">
        <div className="max-w-440 mx-auto px-6 lg:px-10">
          <h2 className="text-[32px] font-semibold text-[#111827] mb-12">
            Popular Product Categories
          </h2>

          <div className="flex flex-wrap justify-center xl:justify-between gap-y-12 gap-x-8">
            {categories.map((item, index) => (
              <div
                key={index}
                className="w-38 flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-38 h-38 rounded-full border border-gray-300 bg-white flex items-center justify-center transition-all duration-300 group-hover:border-[#005EB8] group-hover:shadow-lg">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-18 h-18 object-contain transition duration-300 group-hover:scale-110"
                  />
                </div>
                <p className="mt-5 text-[17px] leading-7 text-[#2f3c4d]">
                  {item.name}
                </p>
              </div>
            ))}

            <Link
              to="/categories"
              className="w-38 flex flex-col items-center text-center group"
            >
              <div className="w-38 h-38 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-300 hover:bg-[#661c48] hover:border-[#661c48]">
                <span className="text-[#661c48] font-semibold text-[18px] leading-8 group-hover:text-white">
                  Browse All
                  <br />
                  Categories
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

     {/* Blue/Navy Background Bar */}
      <section className="bg-white py-8">
        <div className="max-w-420 mx-auto">
          <div className="flex w-full h-[95px] md:h-[110px] lg:h-[130px]">
            <div className="w-1/2 bg-[#661c48]"></div>
            <div className="w-1/2 bg-[#BF5495]"></div>
          </div>  
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 bg-white border border-slate-200 rounded-2xl shadow-sm">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
                Get tailored laboratory sourcing guidance from our experts.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Whether you need a certified reference standard or an entire
                analytical lab setup, our team will help match your project with
                the right products, services, and technical support.
              </p>
            </div>

            <button className="inline-flex items-center justify-center rounded-full bg-[#661c48] px-9 py-4 text-base font-semibold text-white transition-colors duration-300 hover:bg-[#4d1437]">
              Request a Sourcing Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  );
}



