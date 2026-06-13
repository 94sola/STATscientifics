import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-950 text-gray-300 pt-20 pb-10 font-manrope">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">

          {/* LEFT: Logo + Newsletter */}
          <div>
            <img src={logo} alt="STAT Scientific" className="h-32 mb-6" />
            <h4 className="text-xl font-semibold text-white mb-4">
              Stay Connected & Informed
            </h4>
            <p className="text-gray-400 text-[15px] leading-relaxed mb-6">
              Subscribe to our newsletter for scientific insights, research updates, and innovations.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 rounded-md bg-neutral-800 text-gray-200 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
              >
                Get Notified
              </button>
            </form>
          </div>

          {/* MIDDLE: Sections */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Sections</h4>
            <ul className="space-y-4 text-[15px]">
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/team" className="hover:text-white">Team</Link></li>
              <li><Link to="/testimonials" className="hover:text-white">Testimonials</Link></li>
            </ul>
          </div>

          {/* RIGHT: Information + Contact */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Information</h4>
            <ul className="space-y-4 text-[15px] mb-6">
              <li><Link to="/faq" className="hover:text-white">FAQ’s</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>

            {/* Contact Info */}
            <div className="space-y-4 text-[15px] text-gray-400 mb-6">
              <div className="flex items-start gap-3">
                <HiOutlineLocationMarker className="text-white text-lg mt-1" />
                <p>43 Research Avenue, Lagos, Nigeria</p>
              </div>
              <div className="flex items-center gap-3">
                <HiOutlineMail className="text-white text-lg" />
                <p>info@statscientific.com</p>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="text-white text-lg" />
                <p>+234 802 224 2916</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-full transition">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-full transition">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-full transition">
                <FaTwitter />
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"
                className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-full transition">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-neutral-800 mt-16 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} STAT Scientific. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">Created by Ademoroti</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
