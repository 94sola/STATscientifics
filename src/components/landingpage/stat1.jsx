import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Img1 from "../../assets/images/fatty acids.jpg";
import Img2 from "../../assets/images/Proten.jpg";
import Img3 from "../../assets/images/vitamins.jpg";
import Img4 from "../../assets/images/Phenolics.jpg";

const products = [
  {
    title: "Fatty Acid Profiling",
    description:
      "Comprehensive characterization of fatty acids in various foods or oils.",
    imageSrc: Img1,
    Link: "/fattyacid",
  },
  {
    title: "Amino Acid Profiling",
    description:
      "Detect and quantify amino acids in food products.",
    imageSrc: Img2,
    Link: "/aminoacid",
  },
  {
    title: "Vitamins Analysis",
    description:
      "Full quantification of fat and water soluble vitamins in foods.",
    imageSrc: Img3,
    Link: "/vitamins",
  },
   {
    title: "Quantitative Phenolics & Flavonoids Analysis",
    description:
      "Identify, quantify and profile phenolics, flavonoids and secondary metabolites.",
    imageSrc: Img4,
    Link: "/phenolics",
  },
];

export default function FeaturedProducts() {
  return (
    <section className=" py-12 text-xl font-sans max-w-460 mx-auto">
      <div className=" px-6 text-center">
        <h2 className="text-4xl font-medium text-gray-800 mb-8">
          Services
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
                className="w-full h-44 object-contain mb-4"
                whileHover={{ opacity: 0.9 }}
                transition={{ duration: 0.3 }}
              />
              <h3 className="text-2xl font-normal text-gray-700 mb-2">
                {product.title}
              </h3>
              <p className="text-base text-gray-600 mb-4">
                {product.description}
              </p>
              <Link to={product.Link} className="mt-auto text-gray-800 px-4 py-2 rounded  transition">
                Discover More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
