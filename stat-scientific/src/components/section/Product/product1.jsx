import bannerImg from "../../../assets/images/image3.jpg";

export default function HeadlineDiscoveries() {
  

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
    </section>
  );
}