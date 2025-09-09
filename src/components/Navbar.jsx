// import React, { useState, useEffect, useRef } from "react";
// import {
//   FaBars,
//   FaTimes,
//   FaCameraRetro,
//   FaMoon,
//   FaSun,
//   FaChevronDown,
// } from "react-icons/fa";
// import { Link, useLocation } from "react-router-dom";
// import img from "../assets/images/logo.jpg";
// const themeColor = "#B18652";

// const Navbar = ({ darkMode, setDarkMode }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [serviceDropdown, setServiceDropdown] = useState(false);
//   const location = useLocation();
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     setIsOpen(false);
//     setServiceDropdown(false);
//   }, [location]);

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setServiceDropdown(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === "Escape") {
//         setIsOpen(false);
//         setServiceDropdown(false);
//       }
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "";
//   }, [isOpen]);

//   const menuLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Portfolio", path: "/portfolio" },
//     { name: "Services", path: "#" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const serviceLinks = [
//     { name: "All Services", path: "/services/all-services" },
//     { name: "Wedding", path: "/services/wedding" },
//     { name: "Prewedding", path: "/services/prewedding" },
//     { name: "Event & Corporate", path: "/services/event-corporate" },
//     { name: "Product", path: "/services/product" },
//     { name: "Fashion", path: "/services/fashion" },
//     { name: "Real estate", path: "/services/real-estate" },
//     { name: "Baby shoot", path: "/services/baby-shoot" },
//     { name: "Maternity", path: "/services/maternity" },
//   ];

//   const navBg = darkMode ? "#000" : "#fff";
//   const menuText = darkMode ? "#fff" : "#000";

//   return (
//     <nav
//       className="fixed top-0 left-0 w-full z-50 transition-colors duration-300 border-b-2"
//       style={{ background: navBg, color: menuText, borderColor: themeColor }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 flex items-center justify-between">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="flex items-center font-bold text-xl select-none"
//           style={{ color: menuText }}
//         >
//           {/* <FaCameraRetro
//             size={28}
//             style={{ color: themeColor }}
//             className="mr-2"
//           />
//           SliqueProductions */}
//           <img
//             src={img}
//             alt="Logo"
//             className="h-10 w-10 ml-2 rounded-full"
//             style={{ border: `2px solid ${themeColor}` }}
//           />
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-8 items-center font-medium text-base">
//           {menuLinks.map((link) =>
//             link.name === "Services" ? (
//               <li key={link.name} ref={dropdownRef} className="relative">
//                 <button
//                   onClick={() => setServiceDropdown((prev) => !prev)}
//                   className="flex items-center cursor-pointer border-b-2 border-transparent hover:border-[#B18652] transition-colors duration-200"
//                   style={{ color: menuText }}
//                 >
//                   {link.name}
//                   <FaChevronDown className="ml-1" />
//                 </button>
//                 <div
//                   className={`absolute left-0 mt-2 w-48 rounded-lg border border-[#B18652] shadow-lg bg-white dark:bg-black transition-all duration-300 ${
//                     serviceDropdown ? "block" : "hidden"
//                   }`}
//                   style={{ background: navBg }}
//                 >
//                   <ul>
//                     {serviceLinks.map((service) => (
//                       <li key={service.name}>
//                         <Link
//                           to={service.path}
//                           className="block px-4 py-2 text-sm hover:bg-[#B18652] hover:text-white transition-colors duration-200"
//                           style={{ color: menuText, textDecoration: "none" }}
//                           onClick={() => setServiceDropdown(false)}
//                         >
//                           {service.name}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </li>
//             ) : (
//               <li key={link.name}>
//                 <Link
//                   to={link.path}
//                   className="hover:border-b-2 hover:border-[#B18652] transition-colors duration-200"
//                   style={{ color: menuText }}
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             )
//           )}
//         </ul>

//         {/* Dark Mode Toggle */}
//         <button
//           aria-label="Toggle dark mode"
//           className="ml-3 p-2 rounded-full border-2 hover:scale-110 transition-transform"
//           style={{
//             borderColor: themeColor,
//             background: navBg,
//             color: themeColor,
//           }}
//           onClick={() => setDarkMode((prev) => !prev)}
//         >
//           {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
//         </button>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => {
//             setIsOpen(!isOpen);
//             setServiceDropdown(false);
//           }}
//           className="md:hidden text-2xl ml-3 focus:outline-none"
//           style={{ color: themeColor }}
//           aria-label={isOpen ? "Close menu" : "Open menu"}
//         >
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 transition-transform duration-300 ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//         style={{ color: menuText }}
//       >
//         <div className="flex flex-col h-full bg-white dark:bg-black py-6 px-4">
//           <button
//             onClick={() => setIsOpen(false)}
//             className="self-end text-3xl mb-4"
//             style={{ color: themeColor }}
//             aria-label="Close menu"
//           >
//             <FaTimes />
//           </button>
//           {menuLinks.map((link) =>
//             link.name === "Services" ? (
//               <div key="mobile-services-dropdown">
//                 <button
//                   onClick={() => setServiceDropdown((prev) => !prev)}
//                   className="flex items-center justify-between w-full text-lg font-semibold py-3 border-b border-[#B18652]"
//                   style={{ color: menuText }}
//                 >
//                   {link.name}
//                   <FaChevronDown
//                     className={`transition-transform ${
//                       serviceDropdown ? "rotate-180" : ""
//                     }`}
//                     style={{ color: serviceDropdown ? themeColor : menuText }}
//                   />
//                 </button>
//                 <div
//                   className={`overflow-hidden transition-all duration-300 ${
//                     serviceDropdown ? "max-h-96" : "max-h-0"
//                   }`}
//                 >
//                   <ul className="pl-4 space-y-2">
//                     {serviceLinks.map((service) => (
//                       <li key={service.name}>
//                         <Link
//                           to={service.path}
//                           className="block px-3 py-2 hover:bg-[#B18652] hover:text-white transition-colors duration-200 rounded"
//                           style={{ color: menuText, textDecoration: "none" }}
//                           onClick={() => {
//                             setIsOpen(false);
//                             setServiceDropdown(false);
//                           }}
//                         >
//                           {service.name}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ) : (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className="block text-lg font-semibold py-3 border-b border-[#B18652] transition-colors duration-200"
//                 style={{ color: menuText, textDecoration: "none" }}
//                 onClick={() => setIsOpen(false)}
//               >
//                 {link.name}
//               </Link>
//             )
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import {
  FaBars,
  FaTimes,
  FaCameraRetro,
  FaMoon,
  FaSun,
  FaChevronDown,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import img from "../assets/images/logo.jpg";
import { useTheme } from "../hooks/useTheme";
const themeColor = "#B18652";

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    setIsOpen(false);
    setServiceDropdown(false);
  }, [location]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServiceDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setServiceDropdown(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Services", path: "#" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceLinks = [
    { name: "All Services", path: "/all-services" },
    { name: "Wedding", path: "/wedding" },
    { name: "Prewedding", path: "/prewedding" },
    { name: "Event & Corporate", path: "/event-corporate" },
    { name: "Product", path: "/product" },
    { name: "Fashion", path: "/fashion" },
    { name: "Real estate", path: "/real-estate" },
    { name: "Baby shoot", path: "/baby-shoot" },
    { name: "Maternity", path: "/maternity" },
  ];

  const navBg = darkMode ? "#000" : "#fff";
  const menuText = darkMode ? "#fff" : "#000";

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-colors duration-300 border-b-2"
      style={{ background: navBg, color: menuText, borderColor: themeColor }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center font-bold text-xl select-none"
          style={{ color: menuText }}
        >
          <img
            src={img}
            alt="Logo"
            className="h-10 w-10 ml-2 rounded-full"
            style={{ border: `2px solid ${themeColor}` }}
          />
        </Link>
        <ul className="hidden md:flex space-x-8 items-center font-medium text-base">
          {menuLinks.map((link) =>
            link.name === "Services" ? (
              <li key={link.name} ref={dropdownRef} className="relative">
                <button
                  onClick={() => setServiceDropdown((prev) => !prev)}
                  className="flex items-center cursor-pointer border-b-2 border-transparent hover:border-[#B18652] transition-colors duration-200"
                  style={{ color: menuText }}
                >
                  {link.name}
                  <FaChevronDown className="ml-1" />
                </button>
                <div
                  className={`absolute left-0 mt-2 w-48 rounded-lg border border-[#B18652] shadow-lg bg-white dark:bg-black transition-all duration-300 ${
                    serviceDropdown ? "block" : "hidden"
                  }`}
                  style={{ background: navBg }}
                >
                  <ul>
                    {serviceLinks.map((service) => (
                      <li key={service.name}>
                        <Link
                          to={service.path}
                          className="block px-4 py-2 text-sm hover:bg-[#B18652] hover:text-white transition-colors duration-200"
                          style={{ color: menuText, textDecoration: "none" }}
                          onClick={() => setServiceDropdown(false)}
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="hover:border-b-2 hover:border-[#B18652] transition-colors duration-200"
                  style={{ color: menuText }}
                >
                  {link.name}
                </Link>
              </li>
            )
          )}
        </ul>
        <button
          aria-label="Toggle dark mode"
          className="ml-3 p-2 rounded-full border-2 hover:scale-110 transition-transform"
          style={{
            borderColor: themeColor,
            background: navBg,
            color: themeColor,
          }}
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setServiceDropdown(false);
          }}
          className="md:hidden text-2xl ml-3 focus:outline-none"
          style={{ color: themeColor }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ color: menuText }}
      >
        <div className="flex flex-col h-full bg-white dark:bg-black py-6 px-4">
          <button
            onClick={() => setIsOpen(false)}
            className="self-end text-3xl mb-4"
            style={{ color: themeColor }}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
          {menuLinks.map((link) =>
            link.name === "Services" ? (
              <div key="mobile-services-dropdown">
                <button
                  onClick={() => setServiceDropdown((prev) => !prev)}
                  className="flex items-center justify-between w-full text-lg font-semibold py-3 border-b border-[#B18652]"
                  style={{ color: menuText }}
                >
                  {link.name}
                  <FaChevronDown
                    className={`transition-transform ${
                      serviceDropdown ? "rotate-180" : ""
                    }`}
                    style={{ color: serviceDropdown ? themeColor : menuText }}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    serviceDropdown ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <ul className="pl-4 space-y-2">
                    {serviceLinks.map((service) => (
                      <li key={service.name}>
                        <Link
                          to={service.path}
                          className="block px-3 py-2 hover:bg-[#B18652] hover:text-white transition-colors duration-200 rounded"
                          style={{ color: menuText, textDecoration: "none" }}
                          onClick={() => {
                            setIsOpen(false);
                            setServiceDropdown(false);
                          }}
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className="block text-lg font-semibold py-3 border-b border-[#B18652] transition-colors duration-200"
                style={{ color: menuText, textDecoration: "none" }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
