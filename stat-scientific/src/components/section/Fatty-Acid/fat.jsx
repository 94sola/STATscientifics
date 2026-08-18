import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const saturatedFattyAcids = [
  { name: "Butyric Acid (C4:0)", type: "Saturated Fatty Acid" },
  { name: "Caproic Acid (C6:0)", type: "Saturated Fatty Acid" },
  { name: "Caprylic Acid (C8:0)", type: "Saturated Fatty Acid" },
  { name: "Capric Acid (C10:0)", type: "Saturated Fatty Acid" },
  { name: "Lauric Acid (C12:0)", type: "Saturated Fatty Acid" },
  { name: "Myristic Acid (C14:0)", type: "Saturated Fatty Acid" },
  { name: "Pentadecanoic Acid (C15:0)", type: "Saturated Fatty Acid" },
  { name: "Palmitic Acid (C16:0)", type: "Saturated Fatty Acid" },
  { name: "Margaric Acid (C17:0)", type: "Saturated Fatty Acid" },
  { name: "Stearic Acid (C18:0)", type: "Saturated Fatty Acid" },
  { name: "Arachidic Acid (C20:0)", type: "Saturated Fatty Acid" },
  { name: "Behenic Acid (C22:0)", type: "Saturated Fatty Acid" },
  { name: "Lignoceric Acid (C24:0)", type: "Saturated Fatty Acid" },
];

const monounsaturatedFattyAcids = [
  { name: "Myristoleic Acid", type: "Monounsaturated Fatty Acid" },
  { name: "Palmitoleic Acid", type: "Monounsaturated Fatty Acid" },
  { name: "Heptadecenoic Acid", type: "Monounsaturated Fatty Acid" },
  { name: "Oleic Acid", type: "Monounsaturated Fatty Acid" },
  { name: "Elaidic Acid", type: "Monounsaturated Fatty Acid" },
  { name: "Eicosenoic Acid", type: "Monounsaturated Fatty Acid" },
  { name: "Erucic Acid", type: "Monounsaturated Fatty Acid" },
];

const polyunsaturatedFattyAcids = [
  { name: "Linoleic Acid", type: "Polyunsaturated Fatty Acid" },
  { name: "γ-Linolenic Acid", type: "Polyunsaturated Fatty Acid" },
  { name: "α-Linolenic Acid", type: "Polyunsaturated Fatty Acid" },
  { name: "Arachidonic Acid", type: "Polyunsaturated Fatty Acid" },
  { name: "EPA", type: "Polyunsaturated Fatty Acid" },
  { name: "DHA", type: "Polyunsaturated Fatty Acid" },
];

function FattyAcidRow({
  title,
  fattyAcids,
  scrollRef,
  scroll,
}) {
  return (
    <div className="mt-12">

      {/* Category Header */}
      <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-neutral-900">
            {title}
          </h3>
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

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-3 scrollbar-hide"
      >
        {fattyAcids.map((fattyAcid) => (
          <div
            key={fattyAcid.name}
            className="group min-w-60 rounded-2xl border border-neutral-200 bg-white px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#BF5495]/40 hover:shadow-lg"
          >
            <p className="text-base font-semibold leading-6 text-neutral-900">
              {fattyAcid.name}
            </p>

            <div className="mt-3 inline-flex rounded-full bg-neutral-100 px-3 py-1">
              <span className="text-xs text-neutral-600">
                {fattyAcid.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CompoundOne() {
  const saturatedRef = useRef(null);
  const monounsaturatedRef = useRef(null);
  const polyunsaturatedRef = useRef(null);

  const scroll = (ref, direction) => {
    if (!ref.current) return;

    ref.current.scrollBy({
      left: direction === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-440 px-6 lg:px-8">

        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold uppercase leading-tight tracking-[0.15em] text-[#BF5495] md:text-4xl">
            WHAT WE REPORT
          </h2>

          <h3 className="mt-5 text-2xl font-semibold text-neutral-900 sm:text-3xl">
            Complete Fatty Acid Profile
          </h3>

           <p className="mt-3 max-w-2xl text-neutral-600 leading-7 italic sm:text-lg lg:text-[1.125rem] lg:leading-7">
            Our standard analysis includes quantitative determination of 37
            fatty acid methyl esters.
          </p>

          <p className="mt-2 text-xl font-bold text-[#BF5495]">
            ₦50,000
          </p>

        </div>

        <FattyAcidRow
          title="Saturated Fatty Acids"
          fattyAcids={saturatedFattyAcids}
          scrollRef={saturatedRef}
          scroll={scroll}
        />

        <FattyAcidRow
          title="Monounsaturated Fatty Acids"
          fattyAcids={monounsaturatedFattyAcids}
          scrollRef={monounsaturatedRef}
          scroll={scroll}
        />

        <FattyAcidRow
          title="Polyunsaturated Fatty Acids"
          fattyAcids={polyunsaturatedFattyAcids}
          scrollRef={polyunsaturatedRef}
          scroll={scroll}
        />

        <div className="mt-10 rounded-2xl border border-[#BF5495]/20 bg-[#FFF8FC] px-6 py-5">
          <p className="text-sm leading-7 text-neutral-700">
            <span className="font-semibold text-neutral-900">
              Additional Fatty Acids:
            </span>{" "}
            ...plus additional fatty acids included within the 37-component
            certified reference mixture.
          </p>
        </div>

      </div>
    </section>
  );
}