import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const basicAminoAcids = [
  { name: "Aspartic Acid", type: "Amino Acid" },
  { name: "Glutamic Acid", type: "Amino Acid" },
  { name: "Serine", type: "Amino Acid" },
  { name: "Glycine", type: "Amino Acid" },
  { name: "Histidine", type: "Amino Acid" },
  { name: "Arginine", type: "Amino Acid" },
  { name: "Threonine", type: "Amino Acid" },
  { name: "Alanine", type: "Amino Acid" },
  { name: "Proline", type: "Amino Acid" },
  { name: "Tyrosine", type: "Amino Acid" },
  { name: "Valine", type: "Amino Acid" },
  { name: "Methionine", type: "Amino Acid" },
  { name: "Cystine", type: "Amino Acid" },
  { name: "Isoleucine", type: "Amino Acid" },
  { name: "Leucine", type: "Amino Acid" },
  { name: "Phenylalanine", type: "Amino Acid" },
  { name: "Lysine", type: "Amino Acid" },
];

function AminoAcidRow({
  title,
  text,
  price,
  aminoAcids,
  scrollRef,
  scroll,
}) {
  return (
    <div className="mt-12">
      <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-neutral-900">
            {title}
          </h3>

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

      {/* Amino Acid Chips */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-2 scrollbar-hide"
      >
        {aminoAcids.map((aminoAcid) => (
          <div
            key={aminoAcid.name}
            className="group min-w-55 rounded-2xl border border-neutral-200 bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#BF5495]/40 hover:shadow-lg"
          >
            <p className="text-base font-semibold text-neutral-900">
              {aminoAcid.name}
            </p>

            <div className="mt-2 inline-flex rounded-full bg-neutral-100 px-3 py-1">
              <span className="text-xs text-neutral-600">
                {aminoAcid.type}
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

        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold uppercase leading-tight tracking-[0.15em] text-[#BF5495] md:text-4xl">
            AMINO ACID ANALYSIS PANEL
          </h2>

          <p className="mt-3 max-w-2xl text-neutral-600 leading-7 italic sm:text-lg lg:text-[1.125rem] lg:leading-7">
            Quantitative analysis of selected amino acids using validated
            analytical methods, calibration standards, and appropriate
            laboratory quality control procedures.
          </p>
        </div>

        {/* Basic Panel */}
        <AminoAcidRow
          title="Complete Amino Acid Profile"
          text="Complete amino acid coverage"
          price="₦70,000"
          aminoAcids={basicAminoAcids}
          scrollRef={basicRef}
          scroll={scroll}
        />

        {/* Note */}
        <div className="mt-10 rounded-2xl border border-[#BF5495]/20 bg-[#FFF8FC] px-6 py-5">
          <p className="text-sm leading-7 text-neutral-700">
            <span className="font-semibold text-neutral-900">Note:</span>{" "}
            Our amino acid target panel continues to expand as additional
            amino acids and amino acid forms are introduced through ongoing
            method development, validation, and laboratory capability
            expansion.
          </p>
        </div>
      </div>
    </section>
  );
}