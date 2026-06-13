
import { motion } from "framer-motion";

// Import images directly
import reporterAssayImg from "../../assets/images/data.jpg";
import raptinImg from "../../assets/images/gc-ms.jpg";
import tc4Img from "../../assets/images/gc.jpg";

const products = [
  {
    title: "Reporter Assay Panel for Calcitonin and Amylin Receptors",
    description:
      "Investigate CTR, AMY₁R, AMY₂R, and AMY₃R pathways with our flexible, cell-based reporter assay panel.",
    imageAlt: "Graph showing CTR, AMY₁R, AMY₂R, AMY₃R curves",
    imageSrc: reporterAssayImg,
  },
  {
    title: "Raptin (human, recombinant)",
    description:
      "High-purity recombinant human protein for sleep-linked appetite and metabolic pathway research.",
    imageAlt: "SDS-PAGE gel image",
    imageSrc: raptinImg,
  },
  {
    title: "TC4",
    description:
      "Synthetic peptide and tetra-agonist of GLP-1R, GCGR, GIPR, and Y₂ receptor.",
    imageAlt: "Molecular structure diagram",
    imageSrc: tc4Img,
  },
];

export default function FeaturedProducts() {
  return (
    <section className=" py-12 text-xl font-sans max-w-440 mx-auto">
      <div className=" px-6 text-center">
        <h2 className="text-5xl font-medium text-gray-800 mb-8">
          Featured Products
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
              }}
              className="bg-white rounded-lg p-6 flex flex-col items-center"
            >
              <motion.img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full h-40 object-contain mb-4"
                whileHover={{ opacity: 0.9 }}
                transition={{ duration: 0.3 }}
              />
              <h3 className="text-xl font-normal text-gray-700 mb-2">
                {product.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {product.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Order Now
              </motion.button>
            </motion.div>
          ))}
        </div>
        <div className="mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-normal hover:bg-green-700 transition"
          >
            Explore All Obesity Products
          </motion.button>
        </div>
      </div>
    </section>
  );
}
