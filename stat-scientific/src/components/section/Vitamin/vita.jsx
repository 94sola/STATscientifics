import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const basicVitamins = [
{ name: "Vitamin A", type: "Retinoid" },
{ name: "Vitamin B1", type: "Thiamine" },
{ name: "Vitamin B2", type: "Riboflavin" },
{ name: "Vitamin B3", type: "Niacin" },
{ name: "Vitamin B5", type: "Pantothenic Acid" },
{ name: "Vitamin B6", type: "Pyridoxine" },
{ name: "Vitamin B9", type: "Folate" },
{ name: "Vitamin B12", type: "Cobalamin" },
{ name: "Vitamin C", type: "Ascorbic Acid" },
];

const standardVitamins = [
{ name: "Vitamin A", type: "Retinoid" },
{ name: "Vitamin D2", type: "Ergocalciferol" },
{ name: "Vitamin D3", type: "Cholecalciferol" },
{ name: "Vitamin E", type: "Tocopherols" },
{ name: "Vitamin K1", type: "Phylloquinone" },
{ name: "Vitamin K2", type: "Menaquinone" },
{ name: "Vitamin B1", type: "Thiamine" },
{ name: "Vitamin B2", type: "Riboflavin" },
{ name: "Vitamin B3", type: "Niacin" },
{ name: "Vitamin B5", type: "Pantothenic Acid" },
{ name: "Vitamin B6", type: "Pyridoxine" },
{ name: "Vitamin B7", type: "Biotin" },
{ name: "Vitamin B9", type: "Folate" },
{ name: "Vitamin B12", type: "Cobalamin" },
{ name: "Vitamin C", type: "Ascorbic Acid" },
];

function VitaminRow({
title,
text,
price,
vitamins,
scrollRef,
scroll,
}) {
return ( 
<div className="mt-12"> <div className="mb-6 flex items-center justify-between"> <div> <h3 className="text-xl font-semibold text-neutral-900">
{title} </h3>

      <p className="mt-1 text-lg font-bold text-neutral-800">
        {text}
      </p>

      <p className="mt-1 text-lg font-bold text-[#BF5495]">
        {price}
      </p>
    </div>

    <div className="flex items-center gap-2">
      <button
        onClick={() => scroll(scrollRef, "left")}
        aria-label={`Scroll ${title} left`}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 transition hover:border-[#BF5495] hover:text-[#BF5495]"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        onClick={() => scroll(scrollRef, "right")}
        aria-label={`Scroll ${title} right`}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 transition hover:border-[#BF5495] hover:text-[#BF5495]"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  </div>

  {/* Vitamin Chips */}
  <div
    ref={scrollRef}
    className="flex gap-4 overflow-x-auto scroll-smooth pb-2 scrollbar-hide"
  >
    {vitamins.map((vitamin) => (
      <div
        key={vitamin.name}
        className="group min-w-55 rounded-2xl border border-neutral-200 bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#BF5495]/40 hover:shadow-lg"
      >
        <p className="text-base font-semibold text-neutral-900">
          {vitamin.name}
        </p>

        <div className="mt-2 inline-flex rounded-full bg-neutral-100 px-3 py-1">
          <span className="text-xs text-neutral-600">
            {vitamin.type}
          </span>
        </div>
      </div>
    ))}
  </div>
</div>

);
}

export default function CompoundOne() {
const basicRef = useRef(null);
const standardRef = useRef(null);

const scroll = (ref, direction) => {
if (!ref.current) return;

ref.current.scrollBy({
  left: direction === "left" ? -350 : 350,
  behavior: "smooth",
});


};

return ( <section className="bg-white py-16"> <div className="mx-auto max-w-440 px-6 lg:px-8">


    {/* Heading */}
    <div className="max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-semibold leading-tight uppercase tracking-[0.15em] text-[#BF5495]">
        VITAMIN ANALYSIS PANELS
      </h2>

      <p className="mt-3 max-w-2xl text-neutral-600 leading-7 italic sm:text-lg lg:text-[1.125rem] lg:leading-7">
        Quantitative analysis of selected vitamins using validated
        analytical methods, calibration standards, and appropriate
        laboratory quality control procedures.
      </p>
    </div>

    {/* Basic Panel */}
    <VitaminRow
      title="Basic Panel"
      text="Essential vitamin coverage"
      price="₦100,000"
      vitamins={basicVitamins}
      scrollRef={basicRef}
      scroll={scroll}
    />

    {/* Standard Panel */}
    <VitaminRow
      title="Standard Panel"
      text="Expanded vitamin coverage"
      price="₦180,000"
      vitamins={standardVitamins}
      scrollRef={standardRef}
      scroll={scroll}
    />

    {/* Note */}
    <div className="mt-10 rounded-2xl border border-[#BF5495]/20 bg-[#FFF8FC] px-6 py-5">
      <p className="text-sm leading-7 text-neutral-700">
        <span className="font-semibold text-neutral-900">Note:</span>{" "}
        Our vitamin target panel continues to expand as additional
        vitamins and vitamin forms are introduced through ongoing method
        development, validation, and laboratory capability expansion.
      </p>
    </div>
  </div>
</section>


);
}
