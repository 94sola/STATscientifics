import { ArrowRight } from "lucide-react";

export default function PhenolicsSection() {
  return (
    <section>
      <div className="bg-gray-100 px-6 py-12 sm:px-10 sm:py-16 md:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto grid max-w-440 grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1.2fr_1.4fr] lg:gap-12">
          
          <div className="flex items-start">
            <h2 className="text-3xl font-light leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
              Why Targeted Analysis?
            </h2>
          </div>
          {/* Long Thin Arrow */}
            <div className="flex w-full items-center justify-center">
            <ArrowRight
            className="h-8 w-full min-w-[250px] text-[#BF5495] stroke-[0.6]"
            />
            </div>

          <div className="flex items-start">
            <p className="text-base italic leading-7 text-neutral-800 sm:text-base sm:leading-8 lg:text-lg lg:leading-7">
              Plant extracts contain hundreds or even thousands of naturally
              occurring compounds. STAT Scientific specializes in targeted
              phytochemical analysis, providing quantitative results for
              carefully selected phenolic and flavonoid markers widely
              reported in scientific literature.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}