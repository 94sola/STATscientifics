import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-neutral-50 text-neutral-900 px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-16 lg:py-24 xl:px-20 font-sans">
      <div className="max-w-440 mx-auto flex flex-col gap-8 md:gap-12 lg:flex-row lg:items-start lg:gap-16">
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-900 mb-4 sm:mb-6 lg:mb-8 leading-tight sm:leading-snug">
            Welcome to STAT Scientific
          </h1>
          <p className="max-w-2xl text-sm sm:text-base md:text-base lg:text-lg text-gray-700 leading-6 sm:leading-7 md:leading-8">
            STAT Scientific is an independent analytical laboratory
            dedicated to advancing food science, natural products
            research, and quality assurance through high-performance
            analytical chemistry.
          </p>
        </motion.div>
      </div>
      <div className="max-w-440 mx-auto grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-12 md:mt-16 lg:mt-20">
        <motion.div 
          className="flex items-start gap-3 rounded-xl sm:rounded-2xl border border-gray-300 bg-gray-200  p-4 sm:p-5 md:p-6 hover:bg-gray-300  transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          viewport={{ once: true }}
        >
          <span className="mt-0.5 sm:mt-1 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-orange-400 shrink-0"></span>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-800 leading-snug">Food Chemistry</p>
        </motion.div>
        <motion.div 
          className="flex items-start gap-3 rounded-xl sm:rounded-2xl border border-gray-300 bg-gray-200 p-4 sm:p-5 md:p-6 hover:bg-gray-300 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <span className="mt-0.5 sm:mt-1 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-gray-500 shrink-0"></span>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-800 leading-snug">Natural Products Research</p>
        </motion.div>
        <motion.div 
          className="flex items-start gap-3 rounded-xl sm:rounded-2xl border border-gray-300 bg-gray-200 p-4 sm:p-5 md:p-6 hover:bg-gray-300 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="mt-0.5 sm:mt-1 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-[#fff5bf] shrink-0"></span>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-800 leading-snug">HPLC Method Development</p>
        </motion.div>
        <motion.div 
          className="flex items-start gap-3 rounded-xl sm:rounded-2xl border border-gray-300 bg-gray-200 p-4 sm:p-5 md:p-6 hover:bg-gray-300 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span className="mt-0.5 sm:mt-1 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-[#BF5495] shrink-0"></span>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-800 leading-snug">Quality Assurance</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
