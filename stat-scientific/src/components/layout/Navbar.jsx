import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Search,
} from "lucide-react";

import logo from "../../assets/images/logo.png";
import { menuData } from "../landingpage/menuData";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeChild, setActiveChild] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    "PRODUCTS",
    "APPLICATIONS",
    "ABOUT",
    "CONTACT",
    "FAQ",
  ];

  const currentMenu =
    activeMenu && menuData[activeMenu]
      ? menuData[activeMenu]
      : null;

  // Creates a URL when menuData does not provide a path
  const createSlug = (text) =>
    `/${text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")}`;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm font-sans">
      {/* ================= TOP NAVBAR ================= */}
      <div>
        <div className="mx-auto max-w-430 px-4 lg:px-8">
          <div className="flex h-24 items-center justify-between gap-4">
            {/* LOGO */}
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-16 w-auto"
              />
            </Link>

            {/* DESKTOP SEARCH */}
            <div className="hidden max-w-3xl flex-1 md:flex">
              <div className="flex w-full overflow-hidden rounded border">
                <input
                  value={searchQuery}
                  onChange={(e) =>
                    setSearchQuery(e.target.value)
                  }
                  placeholder="Type in Product Names, Product Numbers ..."
                  className="flex-1 px-4 py-3 outline-none"
                />

                <button
                  type="button"
                  className="bg-[#BF5495] px-5 text-white"
                >
                  <Search size={20} />
                </button>
              </div>
            </div>

            <button
              type="button"
              className="lg:hidden"
              onClick={() =>
                setIsMobileOpen(!isMobileOpen)
              }
              aria-label="Toggle menu"
            >
              {isMobileOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="hidden bg-[#BF5495] lg:block">
        <div className="mx-auto max-w-440 px-8">
          <div className="flex h-12 items-center">
            {navItems.map((item) => {
              {/* ABOUT */}
              if (item === "ABOUT") {
                return (
                  <Link
                    key={item}
                    to="/about"
                    onMouseEnter={() =>
                      setActiveMenu(null)
                    }
                    className="flex h-full items-center px-6 text-sm font-medium text-white transition hover:bg-white hover:text-black"
                  >
                    ABOUT
                  </Link>
                );
              }

              {/* CONTACT */}
              if (item === "CONTACT") {
                return (
                  <Link
                    key={item}
                    to="/contact"
                    onMouseEnter={() =>
                      setActiveMenu(null)
                    }
                    className="flex h-full items-center px-6 text-sm font-medium text-white transition hover:bg-white hover:text-black"
                  >
                    CONTACT
                  </Link>
                );
              }

              {/* FAQ */}
              if (item === "FAQ") {
                return (
                  <Link
                    key={item}
                    to="/faq"
                    onMouseEnter={() =>
                      setActiveMenu(null)
                    }
                    className="flex h-full items-center px-6 text-sm font-medium text-white transition hover:bg-white hover:text-black"
                  >
                    FAQ
                  </Link>
                );
              }

              return (
                <button
                  key={item}
                  type="button"
                  onMouseEnter={() => {
                    setActiveMenu(item);
                    setActiveCategory(0);
                    setActiveChild(0);
                  }}
                  className={`flex h-full items-center gap-2 px-6 text-sm font-medium transition ${
                    activeMenu === item
                      ? "bg-white text-black"
                      : "text-white"
                  }`}
                >
                  {item}

                  <ChevronDown size={14} />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {currentMenu && (
        <div
          className="absolute left-0 w-full border-b bg-white shadow-xl"
          onMouseLeave={() =>
            setActiveMenu(null)
          }
        >
          <div className="mx-auto max-w-440 px-8 py-4">

            <div className="grid min-h-50 grid-cols-2">
              <div className="border-r">
                {currentMenu.map(
                  (category, index) => (
                    <button
                      key={index}
                      type="button"
                      onMouseEnter={() => {
                        setActiveCategory(index);
                        setActiveChild(0);
                      }}
                      className={`flex w-full items-center justify-between px-5 py-4 text-left ${
                        activeCategory === index
                          ? "bg-gray-50 font-bold"
                          : ""
                      }`}
                    >
                      {category.category}

                      <ChevronRight size={18} />
                    </button>
                  )
                )}
              </div>

              <div className="p-5">
                <div className="space-y-2">
                  {currentMenu[
                    activeCategory
                  ]?.children?.map(
                    (child, index) => (
                      <div
                        key={index}
                        className="border-b border-gray-100 last:border-0"
                      >
                        <div
                          onMouseEnter={() =>
                            setActiveChild(index)
                          }
                          className={`flex items-center justify-between px-4 py-3 ${
                            activeChild === index
                              ? "bg-gray-50 font-bold"
                              : ""
                          }`}
                        >
                          <span>
                            {child.name}
                          </span>

                          <ChevronRight
                            size={16}
                          />
                        </div>

                        {activeChild === index &&
                          child.links?.length > 0 && (
                            <div className="grid gap-2 pb-3 pl-4 pt-2">
                              {child.links.map(
                                (item, linkIndex) => {
                                  const linkPath =
                                    typeof item ===
                                      "object" &&
                                    item.path
                                      ? item.path
                                      : typeof item ===
                                        "object"
                                      ? createSlug(
                                          item.name
                                        )
                                      : createSlug(
                                          item
                                        );

                                  const linkName =
                                    typeof item ===
                                    "object"
                                      ? item.name
                                      : item;

                                  return (
                                    <Link
                                      key={linkIndex}
                                      to={linkPath}
                                      onClick={() =>
                                        setActiveMenu(
                                          null
                                        )
                                      }
                                      className="block text-sm text-gray-600 transition hover:text-[#BF5495]"
                                    >
                                      {linkName}
                                    </Link>
                                  );
                                }
                              )}
                            </div>
                          )}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                setActiveMenu(null)
              }
              className="absolute right-10 top-5"
              aria-label="Close menu"
            >
              <X />
            </button>
          </div>
        </div>
      )}

      {isMobileOpen && (
        <div className="border-t bg-white lg:hidden">
          <div className="p-4">

            <div className="flex items-center overflow-hidden rounded border">
              <input
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(e.target.value)
                }
                placeholder="Search..."
                className="flex-1 px-4 py-3 outline-none"
              />

              <button
                type="button"
                className="bg-[#BF5495] px-4 py-3 text-white"
              >
                <Search size={18} />
              </button>
            </div>

            <div className="mt-6">
              {navItems.map((item) => {
                {/* ABOUT */}
                if (item === "ABOUT") {
                  return (
                    <Link
                      key={item}
                      to="/about"
                      onClick={() =>
                        setIsMobileOpen(false)
                      }
                      className="block border-b py-4 font-medium"
                    >
                      ABOUT
                    </Link>
                  );
                }

                if (item === "CONTACT") {
                  return (
                    <Link
                      key={item}
                      to="/contact"
                      onClick={() =>
                        setIsMobileOpen(false)
                      }
                      className="block border-b py-4 font-medium"
                    >
                      CONTACT
                    </Link>
                  );
                }

                if (item === "FAQ") {
                  return (
                    <Link
                      key={item}
                      to="/faq"
                      onClick={() =>
                        setIsMobileOpen(false)
                      }
                      className="block border-b py-4 font-medium"
                    >
                      FAQ
                    </Link>
                  );
                }

                return (
                  <MobileMenuItem
                    key={item}
                    title={item}
                    data={menuData[item]}
                    closeMenu={() =>
                      setIsMobileOpen(false)
                    }
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}


function MobileMenuItem({
  title,
  data,
  closeMenu,
}) {
  const [open, setOpen] = useState(false);

  const createSlug = (text) =>
    `/${text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")}`;

  return (
    <div className="border-b">
      <button
        type="button"
        onClick={() =>
          setOpen(!open)
        }
        className="flex w-full items-center justify-between py-4 font-medium"
      >
        {title}

        <ChevronDown
          className={`transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="pb-4 pl-4">
          {data?.map(
            (category, index) => (
              <div
                key={index}
                className="mb-4"
              >
                <h4 className="mb-2 font-bold">
                  {category.category}
                </h4>

                {category.children?.map(
                  (child, i) => (
                    <div
                      key={i}
                      className="mb-3"
                    >
                      <div className="mb-2 font-medium">
                        {child.name}
                      </div>

                      {/* MOBILE LINKS */}
                      {child.links?.map(
                        (item, linkIndex) => {
                          const linkPath =
                            typeof item ===
                              "object" &&
                            item.path
                              ? item.path
                              : typeof item ===
                                "object"
                              ? createSlug(
                                  item.name
                                )
                              : createSlug(
                                  item
                                );

                          const linkName =
                            typeof item ===
                            "object"
                              ? item.name
                              : item;

                          return (
                            <Link
                              key={linkIndex}
                              to={linkPath}
                              onClick={closeMenu}
                              className="block py-1 text-sm text-gray-600 transition hover:text-[#BF5495]"
                            >
                              {linkName}
                            </Link>
                          );
                        }
                      )}
                    </div>
                  )
                )}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}