import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Import one static hero background image
import heroBackground from "../../assets/images/hero..jpeg";

// Import left content images
import leftImage1 from "../../assets/images/data.jpg";
import leftImage2 from "../../assets/images/gc.jpg";
import leftImage3 from "../../assets/images/gc-ms.jpg";

const heroSlides = [
  {
    title: "Precision HPLC Research",
    description:
      "Delivering advanced chromatographic analysis, method development, and validation studies for pharmaceutical and biotech industries.",
    leftImage: leftImage1,
    leftButtonText: "Lipids for LNPs",
    leftButtonLink: "/lipids-lnps",
  },
  {
    title: "Analytical Excellence",
    description:
      "Providing reproducible, accurate, and validated scientific solutions for academic and industrial research worldwide.",
    leftImage: leftImage2,
    leftButtonText: "Explore Analytics",
    leftButtonLink: "/analytics",
  },
  {
    title: "Innovation in Chromatography",
    description:
      "Driving discovery with cutting-edge HPLC technology, collaborative research, and precision-driven methodologies.",
    leftImage: leftImage3,
    leftButtonText: "Chromatography Insights",
    leftButtonLink: "/chromatography",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <img
        src={heroBackground}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Main Content */}
      <div className="relative z-10 flex ">
        {/* Large Gradient Overlay */}
        <div
          className="
            absolute
            inset-y-0
            left-0
            w-full
            lg:w-[75%]
            bg-linear-to-r
            from-white
            via-white/90
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
            <div className="px-8 py-16 max-w-440 mx-auto">
              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight max-w-5xl">
                {heroSlides[currentSlide].title}
              </h1>

              {/* Description */}
              <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl">
                {heroSlides[currentSlide].description}
              </p>

              {/* Image and Button */}
              <div className="mt-10 flex items-end gap-8">
                <div className="flex-1 h-64 md:h-80 lg:h-96">
                  <img
                    src={heroSlides[currentSlide].leftImage}
                    alt="Slide Content"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.a
                  href={heroSlides[currentSlide].leftButtonLink}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="
                    inline-flex
                    items-center
                    gap-3
                    border
                    border-gray-800
                    bg-white
                    px-6
                    py-3
                    text-lg
                    font-medium
                    text-gray-900
                    hover:bg-gray-100
                    transition
                  "
                >
                  {heroSlides[currentSlide].leftButtonText}
                  <ArrowUpRight size={20} />
                </motion.a>
              </div>

              
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;