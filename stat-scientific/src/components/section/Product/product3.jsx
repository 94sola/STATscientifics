import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  GraduationCap,
  FlaskConical,
  Beaker,
  Pill,
  Search,
  Leaf,
  Landmark,
  ShieldCheck,
  Microscope,
  Dna,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export default function ProgramsResources() {
  const programs = [
    {
      icon: GraduationCap,
      title: "Universities",
      description:
        "Laboratory equipment, chemicals, and analytical solutions supporting academic research and teaching.",
      button: "Explore",
    },
    {
      icon: FlaskConical,
      title: "Research Institutes",
      description:
        "Advanced instruments and consumables designed for scientific discovery and innovation.",
      button: "Explore",
    },
    {
      icon: Beaker,
      title: "Food Testing Laboratories",
      description:
        "Reliable analytical products for food quality, safety, and regulatory compliance.",
      button: "Explore",
    },
    {
      icon: Pill,
      title: "Pharmaceutical Laboratories",
      description:
        "Precision laboratory solutions supporting pharmaceutical research and production.",
      button: "Explore",
    },
    {
      icon: Search,
      title: "Need Something Specific?",
      description:
        "Connect with our specialists to source products tailored to your laboratory requirements.",
      button: "Contact Us",
    },
    {
      icon: Leaf,
      title: "Environmental Laboratories",
      description:
        "Analytical technologies for environmental monitoring and sustainability studies.",
      button: "Explore",
    },
    {
      icon: Landmark,
      title: "Government Agencies",
      description:
        "Trusted laboratory products meeting government and regulatory standards.",
      button: "Explore",
    },
    {
      icon: ShieldCheck,
      title: "Quality Control Laboratories",
      description:
        "High-performance consumables ensuring consistency and testing accuracy.",
      button: "Explore",
    },
    {
      icon: Microscope,
      title: "Contract Research Organizations",
      description:
        "Complete laboratory procurement solutions for CRO workflows and projects.",
      button: "Explore",
    },
    {
      icon: Dna,
      title: "Biotechnology Companies",
      description:
        "Innovative analytical technologies supporting biotechnology advancement.",
      button: "Explore",
    },
  ];

  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 768) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth < 1280) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(5);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(programs.length / itemsPerPage);

  const nextSlide = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(timer);
  }, [totalPages]);

  const visiblePrograms = programs.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

    return (
    <section className="bg-white py-12 md:py-16 xl:py-20 overflow-hidden">
      <div className="max-w-420 mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}

        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[3px] text-[#BF5495]">
              We support:
            </span>

            <h2 className="mt-2 text-2xl md:text-3xl font-medium text-gray-700">
              Who We Serve
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-600 hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-600 hover:text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Cards */}

        <div
          className={`grid gap-6
          ${
            itemsPerPage === 1
              ? "grid-cols-1"
              : itemsPerPage === 2
              ? "grid-cols-2"
              : itemsPerPage === 3
              ? "grid-cols-3"
              : itemsPerPage === 4
              ? "grid-cols-4"
              : "grid-cols-5"
          }`}
        >
          {visiblePrograms.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={index}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-pink-200 hover:shadow-2xl"
              >
                {/* Icon Section */}

                <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-gray-100 bg-linear-to-br from-pink-50 via-white to-slate-50">
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-linear-to-r from-pink-50 to-teal-50" />

                  <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-lg ring-1 ring-pink-100 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#BF5495]">
                    <Icon
                      size={42}
                      className="text-gray-800 transition-colors duration-500 group-hover:text-white"
                    />
                  </div>
                </div>

                {/* Content */}

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-medium leading-7 text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 flex-1 text-base leading-7 text-gray-600">
                    {item.description}
                  </p>

                  <Link
                    to="/categories"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-pink-200 px-5 py-3 font-semibold text-[#661c48] transition-all duration-300 hover:bg-[#BF5495] hover:text-white"
                  >
                    {item.button}
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Mobile Navigation */}

        <div className="mt-8 flex items-center justify-center gap-3 md:hidden">
          <button
            onClick={prevSlide}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:bg-[#BF5495] hover:text-white"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:bg-[#BF5495] hover:text-white"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Pagination Dots */}

        <div className="mt-8 flex justify-center gap-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setPage(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                page === index
                  ? "w-8 bg-[#BF5495]"
                  : "w-4.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}