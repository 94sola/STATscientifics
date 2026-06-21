import { motion, AnimatePresence  } from "framer-motion";
import { ChevronRight } from "lucide-react";
import heroBackground from "../../assets/images/hero..jpeg";
import { useState, useEffect } from "react";



export default function HeroSection() {
  const heroSlides = [
  {
    title: "Precision HPLC Research",
    leftButtonText: "Explore Now",
    leftButtonLink: "/lipids-lnps",
  },
  {
    title: "Your Food Testing HQ",
    leftButtonText: "Explore Now",
    leftButtonLink: "/analytics",
  },
  {
    title: "Food Testing. Research. Innovation. ",
    leftButtonText: "Explore Now",
    leftButtonLink: "/chromatography",
  },
  {
    title: "Unlock Phytochemical research. ",
    leftButtonText: "Explore Now",
    leftButtonLink: "/chromatography",
  }
];


  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 30000);

    return () => clearInterval(interval);
  }, [  heroSlides.length]);
  return (
    <section className="max-w-full relative overflow-hidden bg-gray-50 ">
     
      <div className="relative">
         <img
        src={heroBackground}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Main Content */}
      <div className="relative z-10 flex">
        <div
          className="
            absolute
            inset-y-0
            left-0
            w-full
            lg:w-[75%]
            bg-linear-to-r
            from-white/95
            via-neutral-50/65
            to-transparent
          "
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.8 }}
            className="
              relative
              z-20
              w-full
              lg:w-[60%]
              flex
              items-center
            "
          >
            <div className="px-8 md:px-16 lg:px-24 py-24 w-full">
              {/* Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-gray-900 leading-tight max-w-5xl">
                {heroSlides[currentSlide].title}
              </h1>

              {/* Button */}
              <div className="mt-8">
                <motion.a
                  href={heroSlides[currentSlide].leftButtonLink}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="
                    inline-flex
                    items-center
                    gap-3
                    bg-[#BF5495]
                    px-6
                    py-3
                    text-lg
                    font-medium
                    text-gray-50
                    hover:text-gray-900
                    hover:bg-transparent
                    border border-[#BF5495]
                    transition
                  "
                >
                  {heroSlides[currentSlide].leftButtonText}
                  <ChevronRight size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      </div>
      <div>

      <div className="relative overflow-hidden border-y border-gray-200 bg-[#fff5bf] py-5">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap"
        >
          {[
            "Quercetin",
            "Vitamin C",
            "Glucose",
            "Caffeine",
            "Chlorogenic Acid",
            "Gallic Acid",
            "Lycopene",
            "Piperine",
            "Catechin",
            "Amino Acids",
            "Flavonoids",
            "Sugars",
            "HPLC Method Development",
            "Food Chemistry",
            "Phytochemical Analysis",
          ].map((label, idx) => (
            <span
              key={idx}
              className="mx-10 text-base md:text-lg font-medium tracking-wide text-gray-900 shrink-0"
            >
              {label}
            </span>
          ))}
        </motion.div>
      </div>

     </div>
    </section>
  );
}
