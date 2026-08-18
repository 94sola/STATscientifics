 import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const basicCompounds = [
  { name: "Gallic Acid", type: "Phenolic Acid" },
  { name: "Chlorogenic Acid", type: "Phenolic Acid" },
  { name: "Caffeic Acid", type: "Phenolic Acid" },
  { name: "Ferulic Acid", type: "Phenolic Acid" },
  { name: "Catechin", type: "Flavan-3-ol" },
  { name: "Epicatechin", type: "Flavan-3-ol" },
  { name: "EGCG", type: "Flavan-3-ol" },
  { name: "Quercetin", type: "Flavonol" },
  { name: "Kaempferol", type: "Flavonol" },
];

const standardCompounds = [
  { name: "(+)-Catechin (Hydrate)", type: "Flavan-3-ol" },
  { name: "Naringin", type: "Flavanone Glycoside" },
  { name: "Myricetin", type: "Flavonol" },
  { name: "Quercetin", type: "Flavonol" },
  { name: "Phloretin", type: "Dihydrochalcone" },
  { name: "Kaempferol", type: "Flavonol" },
  { name: "Baicalein", type: "Flavone" },
  { name: "(-)-Epigallocatechin Gallate Hydrate", type: "Flavan-3-ol" },
  { name: "Mangiferin", type: "Xanthone Glycoside" },
  { name: "Resveratrol", type: "Stilbene" },
  { name: "Hesperidin", type: "Flavanone Glycoside" },
  { name: "Baicalin", type: "Flavone Glycoside" },
  { name: "Morin", type: "Flavonol" },
  { name: "Luteolin", type: "Flavone" },
  { name: "Diosmetin", type: "Flavone" },
  { name: "Chrysin", type: "Flavone" },
  { name: "(-)-Epicatechin", type: "Flavan-3-ol" },
  { name: "Oxyresveratrol", type: "Stilbene" },
  { name: "Rutin", type: "Flavonol Glycoside" },
  { name: "3,3',4',7-Tetrahydroxyflavone", type: "Flavone" },
  { name: "Daidzein", type: "Isoflavone" },
  { name: "Neohesperidin Dihydrochalcone", type: "Dihydrochalcone" },
  { name: "Hesperetin", type: "Flavanone" },
  { name: "Apigenin", type: "Flavone" },
  { name: "trans-Pterostilbene", type: "Stilbene" },
  { name: "3-Hydroxyflavone", type: "Flavonol" },
  { name: "Puerarin", type: "Isoflavone Glycoside" },
  { name: "Diosmin", type: "Flavone Glycoside" },
  { name: "Naringin Dihydrochalcone", type: "Dihydrochalcone" },
  { name: "Equol", type: "Isoflavandiol" },
  { name: "Genistein", type: "Isoflavone" },
  { name: "Isoliquiritigenin", type: "Chalcone" },
  { name: "Formononetin", type: "Isoflavone" },
  { name: "Biochanin A", type: "Isoflavone" },
  { name: "trans-Chalcone", type: "Chalcone" },
  { name: "Piceatannol", type: "Stilbene" },
  { name: "Acacetin", type: "Flavone" },
  { name: "7,8-Dihydroxyflavone", type: "Flavone" },
  { name: "Phloridzin", type: "Dihydrochalcone Glycoside" },
  { name: "(±)-Naringenin", type: "Flavanone" },
  { name: "4'-Hydroxychalcone", type: "Chalcone" },
  { name: "(±)-Taxifolin", type: "Flavanonol" },
  { name: "Neohesperidin", type: "Flavanone Glycoside" },
];

function CompoundRow({ title, text, price, compounds, scrollRef, scroll }) {
  return (
    <div className="mt-12">
      <div className="mb-6 flex items-center justify-between">
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
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 transition hover:border-[#BF5495] hover:text-[#BF5495]"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => scroll(scrollRef, "right")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 transition hover:border-[#BF5495] hover:text-[#BF5495]"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Compound Chips */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-2 scrollbar-hide"
      >
        {compounds.map((compound) => (
          <div
            key={compound.name}
            className="group min-w-55 rounded-2xl border border-neutral-200 bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#BF5495]/40 hover:shadow-lg"
          >
            <p className="text-base font-semibold text-neutral-900">
              {compound.name}
            </p>

            <div className="mt-2 inline-flex rounded-full bg-neutral-100 px-3 py-1">
              <span className="text-xs text-neutral-600">
                {compound.type}
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

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-440 px-6 lg:px-8">
        {/* Heading */}

        <div className="max-w-3xl">
        
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight uppercase tracking-[0.15em] text-[#BF5495]">
            PHENOLIC ANALYSIS PANELS
          </h2>

          <p className="mt-3 max-w-2xl text-neutral-600 leading-7 italic sm:text-lg lg:text-[1.125rem] lg:leading-7">
            Quantitative analysis of selected phenolic compounds using validated chromatographic methods and authenticated reference standards.
          </p>
        </div>

        {/* Basic */}
        <CompoundRow
          title="Basic Panel"
          text="Essential phenolic compounds"
          price="₦100,000"
          compounds={basicCompounds}
          scrollRef={basicRef}
          scroll={scroll}
        />

        {/* Standard */}
        <CompoundRow
          title="Standard Panel"
          text="Expanded phenolic compounds coverage"
          price="₦180,000"
          compounds={standardCompounds}
          scrollRef={standardRef}
          scroll={scroll}
        />

        {/* Note */}

        <div className="mt-10 rounded-2xl border border-[#BF5495]/20 bg-[#FFF8FC] px-6 py-5">
          <p className="text-sm leading-7 text-neutral-700">
            <span className="font-semibold text-neutral-900">Note:</span>{" "}
            Our analytical target panel continues to expand as new validated
            compounds are introduced through ongoing method development and
            laboratory validation.
          </p>
        </div>
      </div>
    </section>
  );
}