import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
{
question: "What types of samples can you analyse?",
answer:
"We routinely analyse foods, cereals, legumes, dairy products, meat, fish, protein concentrates, protein isolates, animal feeds, plant materials and research samples.",
},
{
question: "Why is PITC derivatization used?",
answer:
"Most amino acids have limited UV absorbance. PITC reacts with amino acids to form stable derivatives with strong UV absorbance, enabling accurate and reproducible HPLC analysis. The derivatives are also stable enough for routine quantitative work. (Thermo Fisher Documents)",
},
{
question: "Why use HPLC-VWD?",
answer:
"HPLC coupled with UV-Visible Detection provides excellent quantitative performance for PITC-derivatized amino acids and is widely used for routine amino acid composition analysis.",
},
{
question: "How many amino acids are included?",
answer:
"Our standard method is calibrated using the Thermo Scientific Amino Acid Standard H, which contains eighteen amino acids for protein hydrolysate analysis. (Thermo Fisher Scientific)",
},
{
question: "Can you analyse protein-rich foods?",
answer:
"Yes. Our method is suitable for cereals, legumes, meat, fish, dairy products, feeds and a wide variety of protein-containing materials.",
},
{
question: "Can you determine essential amino acids?",
answer:
"Yes. Reports include individual amino acid concentrations, allowing calculation of total essential amino acids and comparison with nutritional requirements.",
},
{
question: "Is this method suitable for research?",
answer:
"Yes. The method is appropriate for nutritional studies, food science, agriculture, protein characterization, quality assurance and academic research.",
},
{
question: "How are results reported?",
answer:
"Depending on project requirements, reports may include: Individual amino acid concentrations (mg/g or g/100 g), Total amino acids, Method information, Analytical notes ",
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
                Find answers to common questions about our quantitative vitamin
                analysis, laboratory methodology, validation process, and
                analytical capabilities.
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
