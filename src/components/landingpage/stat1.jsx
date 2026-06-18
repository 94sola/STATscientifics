
import { motion } from "framer-motion";

// Import images directly
import Img1 from "../../assets/images/data.jpg";
import Img2 from "../../assets/images/gc-ms.jpg";
import Img3 from "../../assets/images/gc.jpg";
import Img4 from "../../assets/images/gc.jpg";

const products = [
  {
    title: "Fatty Acid Profiling",
    description:
      "Comprehensive characterization of fatty acids in various foods or oils.",
    imageSrc: Img1,
  },
  {
    title: "Amino Acid Profiling",
    description:
      "Detect and quantify amino acids in food products.",
    imageSrc: Img2,
  },
  {
    title: "Vitamins Analysis",
    description:
      "Full quantification of fat and water soluble vitamins in foods.",
    imageSrc: Img3,
  },
   {
    title: "Quantitative Phenolics & Flavonoids Analysis",
    description:
      "Identify, quantify and profile phenolics, flavonoids and secondary metabolites.",
    imageSrc: Img4,
  },
];

export default function FeaturedProducts() {
  return (
    <section className=" py-12 text-xl font-sans max-w-460 mx-auto">
      <div className=" px-6 text-center">
        <h2 className="text-5xl font-medium text-gray-800 mb-8">
          Featured Services
        </h2>
        <div className="grid gap-8 md:grid-cols-4">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.15) ",
              }}
              className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center"
            >
              <motion.img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full h-40 object-contain mb-4"
                whileHover={{ opacity: 0.9 }}
                transition={{ duration: 0.3 }}
              />
              <h3 className="text-3xl font-normal text-gray-700 mb-2">
                {product.title}
              </h3>
              <p className="text-base text-gray-600 mb-4">
                {product.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="mt-auto text-gray-800 px-4 py-2 rounded  transition"
              >
                Discover More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
