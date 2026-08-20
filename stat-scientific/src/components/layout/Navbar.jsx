import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Search,
} from "lucide-react";

import logo from "../../assets/images/logo.png";
import { menuData } from "../landingpage/menuData";
import { searchData } from "../../data/searchData";

export default function Navbar() {
  const navigate = useNavigate();
  const searchContainerRef = useRef(null);

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeChild, setActiveChild] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);


  const filteredResults = searchQuery.trim()
    ? searchData.filter((item) => {
        const q = searchQuery.toLowerCase().trim();

        return (
          item.title?.toLowerCase().includes(q) ||
          item.description?.toLowerCase().includes(q) ||
          item.category?.toLowerCase().includes(q) ||
          item.tags?.some((tag) =>
            tag.toLowerCase().includes(q)
          )
        );
      })
    : [];


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setIsSearchOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);



  const handleSelectResult = (path) => {
    navigate(path);

    setSearchQuery("");
    setIsSearchOpen(false);
    setIsMobileOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (filteredResults.length > 0) {
      handleSelectResult(filteredResults[0].path);
    }
  };

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


  const createSlug = (text) =>
    `/${text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")}`;


  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    setSearchQuery("");
    setIsSearchOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white font-sans shadow-sm">
  
      <div>
        <div className="mx-auto max-w-[1720px] px-4 lg:px-8">
          <div className="flex h-24 items-center justify-between gap-4">

            {/* LOGO */}
            <Link
              to="/"
              onClick={() => {
                setActiveMenu(null);
                closeMobileMenu();
              }}
            >
              <img
                src={logo}
                alt="STAT Scientific"
                className="h-16 w-auto"
              />
            </Link>


            <div
              ref={searchContainerRef}
              className="relative hidden max-w-3xl flex-1 md:flex"
            >
              <form
                onSubmit={handleSearchSubmit}
                className="flex w-full overflow-hidden rounded border border-gray-300 focus-within:border-[#BF5495]"
              >
                <input
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearchOpen(true);
                  }}
                  onFocus={() =>
                    setIsSearchOpen(true)
                  }
                  placeholder="Type in Product Names, Analysis Services, or Keywords..."
                  className="flex-1 px-4 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400"
                />

                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setIsSearchOpen(false);
                    }}
                    className="px-2 text-gray-400 transition hover:text-gray-600"
                    aria-label="Clear search"
                  >
                    <X size={18} />
                  </button>
                )}

                <button
                  type="submit"
                  className="bg-[#BF5495] px-5 text-white transition hover:bg-[#661c48]"
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>
              </form>

              {isSearchOpen &&
                searchQuery.trim().length > 0 && (
                  <div className="absolute left-0 right-0 top-full mt-2 max-h-80 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-xl">
                    {filteredResults.length > 0 ? (
                      <div className="divide-y divide-gray-100">
                        {filteredResults.map(
                          (result) => (
                            <button
                              key={result.id}
                              type="button"
                              onClick={() =>
                                handleSelectResult(
                                  result.path
                                )
                              }
                              className="flex w-full items-start gap-3 p-4 text-left transition hover:bg-gray-50"
                            >
                              <span className="rounded bg-gray-100 px-2 py-1 text-[9px] font-bold uppercase text-gray-600">
                                {result.category}
                              </span>

                              <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-semibold text-gray-900">
                                  {result.title}
                                </p>

                                <p className="mt-1 line-clamp-2 text-xs text-gray-500">
                                  {result.description}
                                </p>
                              </div>
                            </button>
                          )
                        )}
                      </div>
                    ) : (
                      <div className="p-5 text-center text-sm text-gray-500">
                        No results found for
                        <span className="font-medium text-gray-700">
                          {" "}
                          "{searchQuery}"
                        </span>
                      </div>
                    )}
                  </div>
                )}
            </div>


            <button
              type="button"
              className="lg:hidden"
              onClick={() => {
                setIsMobileOpen(
                  !isMobileOpen
                );
                setActiveMenu(null);
              }}
              aria-label="Toggle menu"
              aria-expanded={isMobileOpen}
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
        <div className="mx-auto max-w-[1760px] px-8">
          <div className="flex h-12 items-center">

            {navItems.map((item) => {


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
          <div className="mx-auto max-w-[1760px] px-8 py-4">
            <div className="grid min-h-[200px] grid-cols-2">


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
                      <span>
                        {category.category}
                      </span>

                      <ChevronRight
                        size={18}
                      />
                    </button>
                  )
                )}
              </div>


              <div className="p-5">
                <div className="space-y-2">

                  {currentMenu[
                    activeCategory
                  ]?.children?.map(
                    (child, index) => {


                      if (
                        typeof child ===
                        "string"
                      ) {
                        return (
                          <div
                            key={index}
                            className="border-b border-gray-100 px-4 py-3 text-sm text-gray-700 transition last:border-0 hover:bg-gray-50"
                          >
                            {child}
                          </div>
                        );
                      }

                      return (
                        <div
                          key={index}
                          className="border-b border-gray-100 last:border-0"
                        >
                          {child.name && (
                            <div
                              onMouseEnter={() =>
                                setActiveChild(
                                  index
                                )
                              }
                              className={`flex items-center justify-between px-4 py-3 ${
                                activeChild ===
                                index
                                  ? "bg-gray-50 font-bold"
                                  : ""
                              }`}
                            >
                              <span>
                                {child.name}
                              </span>

                              {child.links
                                ?.length >
                                0 && (
                                <ChevronRight
                                  size={16}
                                />
                              )}
                            </div>
                          )}

                          {activeChild ===
                            index &&
                            child.links
                              ?.length >
                              0 && (
                              <div className="grid gap-2 pb-3 pl-4 pt-2">
                                {child.links.map(
                                  (
                                    item,
                                    linkIndex
                                  ) => {

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
                                        key={
                                          linkIndex
                                        }
                                        to={
                                          linkPath
                                        }
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
                      );
                    }
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

            <div className="relative">
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center overflow-hidden rounded border border-gray-300 focus-within:border-[#BF5495]"
              >
                <input
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearchOpen(true);
                  }}
                  onFocus={() =>
                    setIsSearchOpen(true)
                  }
                  placeholder="Search products, services..."
                  className="flex-1 px-4 py-3 text-sm outline-none"
                />

                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setIsSearchOpen(false);
                    }}
                    className="px-2 text-gray-400 transition hover:text-gray-600"
                    aria-label="Clear search"
                  >
                    <X size={18} />
                  </button>
                )}

                <button
                  type="submit"
                  className="bg-[#BF5495] px-4 py-3 text-white transition hover:bg-[#661c48]"
                  aria-label="Search"
                >
                  <Search size={18} />
                </button>
              </form>


              {isSearchOpen &&
                searchQuery.trim().length > 0 && (
                  <div className="mt-2 max-h-60 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg">
                    {filteredResults.length > 0 ? (
                      <div className="divide-y divide-gray-100">
                        {filteredResults.map(
                          (result) => (
                            <button
                              key={result.id}
                              type="button"
                              onClick={() =>
                                handleSelectResult(
                                  result.path
                                )
                              }
                              className="flex w-full items-start gap-2 p-3 text-left transition hover:bg-gray-50"
                            >
                              <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[9px] font-bold uppercase text-gray-600">
                                {result.category}
                              </span>

                              <div className="min-w-0 flex-1">
                                <p className="truncate text-xs font-semibold text-gray-900">
                                  {result.title}
                                </p>

                                <p className="line-clamp-1 text-[11px] text-gray-500">
                                  {
                                    result.description
                                  }
                                </p>
                              </div>
                            </button>
                          )
                        )}
                      </div>
                    ) : (
                      <div className="p-4 text-center text-xs text-gray-500">
                        No results found for
                        &ldquo;
                        {searchQuery}
                        &rdquo;
                      </div>
                    )}
                  </div>
                )}
            </div>


            <div className="mt-6">
              {navItems.map((item) => {

              

                if (item === "ABOUT") {
                  return (
                    <Link
                      key={item}
                      to="/about"
                      onClick={closeMobileMenu}
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
                      onClick={closeMobileMenu}
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
                      onClick={closeMobileMenu}
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
                    closeMenu={closeMobileMenu}
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
        onClick={() => setOpen(!open)}
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

                {/* CHILDREN */}

                {category.children?.map(
                  (child, i) => {


                    if (
                      typeof child ===
                      "string"
                    ) {
                      return (
                        <div
                          key={i}
                          className="mb-2 text-sm text-gray-600"
                        >
                          {child}
                        </div>
                      );
                    }


                    return (
                      <div
                        key={i}
                        className="mb-3"
                      >

                        {/* APPLICATION NAME */}

                        {child.name && (
                          <div className="mb-2 font-medium">
                            {child.name}
                          </div>
                        )}

                        {/* APPLICATION LINKS */}

                        {child.links?.map(
                          (
                            item,
                            linkIndex
                          ) => {

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
                                key={
                                  linkIndex
                                }
                                to={
                                  linkPath
                                }
                                onClick={
                                  closeMenu
                                }
                                className="block py-1 text-sm text-gray-600 transition hover:text-[#BF5495]"
                              >
                                {linkName}
                              </Link>
                            );
                          }
                        )}
                      </div>
                    );
                  }
                )}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}