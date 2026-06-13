
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import images directly
import serumAlbuminsImg from "../../assets/images/data.jpg";
import offPatentDrugsImg from "../../assets/images/data.jpg";
import npsMonographImg from "../../assets/images/data.jpg";

const resources = [
  {
    title: "Serum Albumins as Carriers for Fatty Acid Delivery",
    linkText: "Read The News Article",
    imageSrc: serumAlbuminsImg,
    imageAlt: "Three brown glass vials",
    linkHref: "#",
  },
  {
    title: "Off-Patent Drugs as Inspiration for New Therapies",
    linkText: "Read The News Article",
    imageSrc: offPatentDrugsImg,
    imageAlt: "Blue and white capsules",
    linkHref: "#",
  },
  {
    title: "Cayman Novel Psychoactive Substances Metabolism Monograph",
    description:
      "Cayman NPS Metabolism Monograph, Issue 4: N-Propionitrile Chlorpormorphine",
    linkText: "Download Now (PDF)",
    imageSrc: npsMonographImg,
    imageAlt: "Document cover",
    linkHref: "#",
  },
];

function ResourceCard({ resource, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
      }}
      className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center"
    >
      <motion.img
        src={resource.imageSrc}
        alt={resource.imageAlt}
        className="w-full h-40 object-contain mb-4"
        whileHover={{ opacity: 0.9 }}
        transition={{ duration: 0.3 }}
      />
      <h3 className="text-lg font-semibold text-gray-700 mb-2 text-center">
        {resource.title}
      </h3>
      {resource.description && (
        <p className="text-sm text-gray-600 mb-2 text-center">
          {resource.description}
        </p>
      )}
      <a
        href={resource.linkHref}
        className="mt-auto text-blue-600 font-medium hover:underline"
      >
        {resource.linkText}
      </a>
    </motion.div>
  );
}

export default function FeaturedResources() {
  return (
    <section className="bg-gray-100 font-sans py-12">
      <div className="max-w-440 mx-auto px-6">
        {/* Featured Resources */}
        <h2 className="text-5xl font-medium  text-gray-800 mb-8 text-center">
          Featured Resources
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {resources.map((res, idx) => (
            <ResourceCard key={idx} resource={res} index={idx} />
          ))}
        </div>

        {/* Stay Connected */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Stay Connected
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Subscribe to our emails to receive the latest products, research,
            and your next discount.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
          >
            Subscribe To Emails
          </motion.button>
        </div>
      </div>
    </section>
  );
}
