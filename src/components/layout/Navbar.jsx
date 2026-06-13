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
    "SERVICES",
    "RESOURCES",
    "SUPPORT",
  ];

  const currentMenu =
    activeMenu && menuData[activeMenu]
      ? menuData[activeMenu]
      : null;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      {/* HEADER */}

      <div className="border-b">
        <div className="max-w-430 mx-auto px-4 lg:px-8">
          <div className="h-20 flex items-center justify-between gap-4">
            {/* LOGO */}

            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-12 w-auto"
              />
            </Link>

            {/* SEARCH */}

            <div className="hidden md:flex flex-1 max-w-3xl">
              <div className="flex w-full border rounded overflow-hidden">
                <button className="px-4 border-r bg-white flex items-center gap-2 text-sm">
                  Products
                  <ChevronDown size={16} />
                </button>

                <input
                  value={searchQuery}
                  onChange={(e) =>
                    setSearchQuery(e.target.value)
                  }
                  placeholder="Type in Product Names, Product Numbers, or CAS Numbers..."
                  className="flex-1 px-4 py-3 outline-none"
                />

                <button className="bg-[#008cbb] text-white px-5">
                  <Search size={20} />
                </button>
              </div>
            </div>

            {/* RIGHT */}

            <div className="hidden lg:flex items-center gap-8">
              <span className="text-sm font-medium">
                NG | EN
              </span>

              <Link
                to="/login"
                className="font-semibold"
              >
                Login / Register
              </Link>
            </div>

            {/* MOBILE */}

            <button
              className="lg:hidden"
              onClick={() =>
                setIsMobileOpen(!isMobileOpen)
              }
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

      {/* PURPLE BAR */}

      <div className="hidden lg:block bg-[#008cbb]">
        <div className="max-w-440 mx-auto px-8">
          <div className="flex items-center h-12">
            {navItems.map((item) => (
              <button
                key={item}
                onMouseEnter={() => {
                  setActiveMenu(item);
                  setActiveCategory(0);
                  setActiveChild(0);
                }}
                  className={`h-full px-6 font-semibold text-sm flex items-center gap-2 transition ${
                    activeMenu === item
                      ? "bg-white text-black"
                      : "text-white"
                  }`}
              >
                {item}
                <ChevronDown size={14} />
              </button>
            ))}

            <div className="ml-auto text-white font-semibold">
              Login / Register
            </div>
          </div>
        </div>
      </div>

      {/* MERCK STYLE PANEL */}

      {currentMenu && (
        <div
          className="hidden lg:block absolute left-0 w-full bg-white border-b shadow-xl"
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="max-w-440 mx-auto px-8 py-4">
            <div className="grid grid-cols-3 min-h-60">
              {/* COLUMN 1 */}

              <div className="">
                {currentMenu.map((category, index) => (
                  <button
                    key={index}
                    onMouseEnter={() => {
                      setActiveCategory(index);
                      setActiveChild(0);
                    }}
                    className={`w-full flex justify-between items-center px-5 py-4 text-left ${
                      activeCategory === index
                        ? "font-bold bg-gray-50"
                        : ""
                    }`}
                  >
                    {category.category}
                    <ChevronRight size={18} />
                  </button>
                ))}
              </div>

              {/* COLUMN 2 */}

              <div className="">
                {currentMenu[
                  activeCategory
                ]?.children?.map((child, index) => (
                  <button
                    key={index}
                    onMouseEnter={() =>
                      setActiveChild(index)
                    }
                    className={`w-full flex justify-between items-center px-5 py-4 text-left ${
                      activeChild === index
                        ? "font-bold bg-gray-50"
                        : ""
                    }`}
                  >
                    {child.name}
                    <ChevronRight size={18} />
                  </button>
                ))}
              </div>

              {/* COLUMN 3 */}

              <div className="p-5">
                <div className="space-y-4">
                  {currentMenu[
                    activeCategory
                  ]?.children?.[
                    activeChild
                  ]?.links?.map((item, index) => (
                    <Link
                      key={index}
                      to={`/${item
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="block hover:text-[#008cbb]"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setActiveMenu(null)}
              className="absolute top-5 right-10"
            >
              <X />
            </button>
          </div>
        </div>
      )}

      {/* MOBILE MENU */}

      {isMobileOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="p-4">
            <div className="flex items-center border rounded overflow-hidden">
              <input
                placeholder="Search..."
                className="flex-1 px-4 py-3 outline-none"
              />

              <button className="bg-[#008cbb] text-white px-4 py-3">
                <Search size={18} />
              </button>
            </div>

            <div className="mt-6">
              {navItems.map((item) => (
                <MobileMenuItem
                  key={item}
                  title={item}
                  data={menuData[item]}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function MobileMenuItem({ title, data }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-4 flex justify-between items-center font-semibold"
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
          {data?.map((category, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-bold mb-2">
                {category.category}
              </h4>

              {category.children.map((child, i) => (
                <div
                  key={i}
                  className="mb-2 text-gray-600"
                >
                  {child.name}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}