import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
{
question: "What samples can you analyse?",
answer:
"Vegetable oils, edible oils, dairy products, meat, fish, seafood, cereals, baked goods, confectionery, processed foods, infant foods, animal feeds, plant materials and biological research samples. We can also analyse other sample types on a case-by-case basis.",
},
{
question: "Why do fatty acids need to be converted into FAMEs?",
answer:
"Fatty acids have limited volatility for gas chromatography. Converting them into fatty acid methyl esters improves chromatographic performance and enables accurate separation and quantification.",
},
{
question: "Why do you use GC-FID instead of GC-MS?",
answer:
"GC-FID is widely recognized as the reference technique for routine fatty acid profiling because it provides excellent quantitative precision, a broad linear range and highly reproducible measurements when used with certified FAME standards.",
},
{
question: "What makes the CP-Sil 88 column different?",
answer:
"The highly polar stationary phase provides excellent separation of cis/trans isomers and closely related fatty acids, making it one of the preferred columns for comprehensive fatty acid analysis.",
},
{
question: "Can you measure Omega-3 and Omega-6 fatty acids?",
answer:
"Yes. Our analytical panel includes key Omega-3 fatty acids such as EPA and DHA, together with major Omega-6 fatty acids including linoleic and arachidonic acids.",
},
{
question: "Can you determine trans fats?",
answer:
"Yes. Trans fatty acid determination is available as part of our fatty acid profiling service using procedures aligned with the WHO laboratory protocol for monitoring industrially produced trans fats.",
},
{
question: "How are results reported?",
answer:
"Reports may include:  Individual fatty acid concentrations, Percentage composition, Saturated, monounsaturated and polyunsaturated totals, Omega-3 and Omega-6 totals, Omega-6 : Omega-3 ratio,  Individual trans fatty acids, Total trans fat, Custom reporting formats.",
},
{
question: "Is this method suitable for nutrition labeling?",
answer:
"Yes. The data generated can support nutritional characterization and product development. Where nutrition labeling is required, we can provide results in reporting formats appropriate for the applicable regulatory framework. ",
},
];

export default function TypicalApplications() {
const [open, setOpen] = useState(0);

return ( 
    <section className="relative overflow-hidden bg-white py-16 md:py-20 font-manrope">
{/* Background */} 
        <div className="absolute inset-0 -z-10"> <div className="absolute -left-40 top-0 h-105 w-105 rounded-full bg-[#BF5495]/5 blur-3xl" /> <div className="absolute -right-32 bottom-0 h-105 w-105 rounded-full bg-neutral-100 blur-3xl" /> </div>


        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-6xl mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight uppercase tracking-[0.15em] text-[#BF5495]">
                Frequently Asked Questions
            </h2>

            <p className="mt-4 max-w-2xl text-neutral-600 leading-7 italic sm:text-lg lg:text-[1.125rem] lg:leading-7">
               Find answers to common questions about our comprehensive fatty acid and trans fat analysis, 
               laboratory methodology, validation process, and analytical capabilities.
            </p>
            </div>

        {/* FAQ */}
        <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
        {faqs.map((faq, index) => (
            <div
            key={index}
            className={`${
                index !== faqs.length - 1
                ? "border-b border-neutral-200"
                : ""
            }`}
            >
            <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-start justify-between gap-4 px-5 py-6 sm:px-8 sm:py-7 text-left transition-colors hover:bg-neutral-50"
            >
                <div className="flex items-start gap-4 sm:gap-5 flex-1">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#BF5495]/10 text-[#BF5495] font-semibold text-sm">
                    {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-base sm:text-lg lg:text-xl font-semibold leading-7 text-neutral-900">
                    {faq.question}
                </h3>
                </div>

                <ChevronDown
                size={22}
                className={`shrink-0 transition-transform duration-300 ${
                    open === index
                    ? "rotate-180 text-[#BF5495]"
                    : "text-neutral-500"
                }`}
                />
            </button>

            <div
                className={`grid transition-all duration-300 overflow-hidden ${
                open === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
            >
                <div className="overflow-hidden">
                <div className="pb-6 pl-18 pr-5 sm:pl-23 sm:pr-8">
                    <p className="text-sm sm:text-base leading-7 sm:leading-8 text-neutral-600">
                    {faq.answer}
                    </p>
                </div>
                </div>
            </div>
            </div>
        ))}
        </div>

        

    </div>
</section>


);
}
