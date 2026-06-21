import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="w-full bg-[#fff5bf] text-gray-950 pt-20 pb-10 font-manrope">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">

          <div>
            <img src={logo} alt="STAT Scientific" className="h-24" />
            <h4 className="text-xl font-semibold text-neutral-950 mb-4">
              Stay Connected & Informed
            </h4>
            <p className="text-gray-800 text-[15px] leading-relaxed mb-6">
              Subscribe to our newsletter for scientific insights, research updates, and innovations.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 rounded-md border border-[#BF5495]  bg-yellow-100 text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#BF5495] hover:bg-[#9d437a] text-white px-4 py-2 rounded-md"
              >
                Get Notified
              </button>
            </form>
          </div>

          {/* MIDDLE: Sections */}
          <div className="my-6">
            <h4 className="text-xl font-semibold text-neutral-950 mb-3">Sections</h4>
            <ul className="space-y-4 text-[15px]">
              <li><Link to="/products" className="hover:text-white">Products</Link></li>
              <li><Link to="/applications" className="hover:text-white">Applications</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/resources" className="hover:text-white">Resources</Link></li>
              <li><Link to="/support" className="hover:text-white">Support</Link></li>
            </ul>
          </div>

          {/* RIGHT: Information + Contact */}
          <div className="my-6">
            <h4 className="text-xl font-semibold text-neutral-950 mb-6">Information</h4>
            <ul className="space-y-4 text-[15px]">
              <li><Link to="/faq" className="hover:text-neutral-950">FAQ’s</Link></li>
              <li><Link to="/about" className="hover:text-neutral-950">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-neutral-950 ">Contact</Link></li>
            </ul>


            <div className="space-y-4 text-[15px] text-gray-900 mb-6">
              <div className="flex items-start gap-3">
                <HiOutlineLocationMarker className="text-neutral-950 text-lg mt-1" />
                <p>43 Research Avenue, Lagos, Nigeria</p>
              </div>
              <div className="flex items-center gap-3">
                <HiOutlineMail className="text-neutral-950 text-lg" />
                <p>info@statscientific.com</p>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="text-neutral-950 text-lg" />
                <p>+234 802 224 2916</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="bg-yellow-100 hover:bg-yellow-200 p-3 rounded-full transition">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="bg-yellow-100 hover:bg-yellow-200 p-3 rounded-full transition">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="bg-yellow-100 hover:bg-yellow-200 p-3 rounded-full transition">
                <FaTwitter />
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"
                className="bg-yellow-100 hover:bg-yellow-200 p-3 rounded-full transition">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-neutral-800 mt-16 pt-8 text-center">
          <p className="text-gray-900 text-sm">
            © {new Date().getFullYear()} STAT Scientific. All rights reserved.
          </p>
          <p className="text-gray-900 text-xs mt-2">Created by Ademoroti</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
