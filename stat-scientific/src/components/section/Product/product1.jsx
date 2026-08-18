import bannerImg from "../../../assets/images/image3.jpg";
import hplcImg from "../../../assets/images/image4.jpg";
import filterImg from "../../../assets/images/images.jpg";
import injectorImg from "../../../assets/images/image1.png";

export default function HeadlineDiscoveries() {
  const cards = [
    {
      title: "HPLC Columns",
      subtitle: "Used to separate compounds in liquid samples with high precision for analytical testing and research applications.",
      image: hplcImg,
      dark: false,
      tag: "Precision",
    },
    {
      title: "Syringe filter",
      subtitle: "Used to separate gaseous compounds in chromatography systems for accurate identification and quantification.",
      image: filterImg,
      dark: false,
      tag: "Reliability",
    },
    {
      title: "Injector Needles",
      subtitle: "Used to introduce samples into HPLC systems with controlled, repeatable delivery for consistent analysis.",
      image: injectorImg,
      dark: true,
      tag: "Performance",
    },
  ];

  return (
    <section className="bg-white">

      <div
        className="relative h-107.5 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative max-w-420 mx-auto h-full flex items-center px-6 lg:px-10">
          <div className="max-w-xl">
            <p className="uppercase tracking-[6px] text-white text-xl mb-1">
              Laboratory Sourcing 
            </p>

            <h1 className="text-white text-3xl md:text-5xl font-light leading-none">
              & Scientific Procurement
            </h1>

            <p className="text-gray-50 text-lg mt-8 leading-relaxed">
              Accessing high-quality laboratory consumables shouldn't slow down your research.
            </p>

            <button className="mt-10 border border-white px-8 py-4 text-white font-semibold hover:bg-white hover:text-black duration-300">
              Read Now
            </button>
          </div>
        </div>
      </div>

      <div className="bg-slate-50/80 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#BF5495]">
                Featured solutions
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
                Premium lab essentials designed for dependable scientific work.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-600">
              Discover trusted consumables and accessories that combine precision, durability, and professional presentation for modern research spaces.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {cards.map((card, index) => (
              <article
                key={index}
                className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_20px_60px_-24px_rgba(15,23,42,0.28)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_-24px_rgba(15,23,42,0.35)]"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div
                    className={`absolute inset-0 ${
                      card.dark
                        ? "bg-gradient-to-t from-slate-950/85 via-slate-900/25 to-transparent"
                        : "bg-gradient-to-t from-slate-950/75 via-slate-900/20 to-transparent"
                    }`}
                  ></div>

                  <div className="absolute inset-0 flex flex-col justify-end p-7 text-white">
                    <span
                      className={`mb-3 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${
                        card.dark
                          ? "bg-white/85 text-slate-900"
                          : "bg-[#661c48]/95 text-white"
                      }`}
                    >
                      {card.tag}
                    </span>

                    <h3 className="text-2xl font-semibold leading-tight">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/90">
                      {card.subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-7">
                  <div className="mt-2 flex items-center justify-between gap-4">
                    <button className="rounded-full bg-[#BF5495] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#661c48]">
                      Explore range
                    </button>
                    <span className="text-sm font-medium text-slate-400">
                      Trusted quality
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}