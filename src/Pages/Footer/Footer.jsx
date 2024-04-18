import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 md:mb-0">
            <h3 className="text-2xl mb-4">Sovereign Suites</h3>
            <p>A luxury experience like no other.</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 md:mb-0">
            <h4 className="text-xl mb-4">Contact Us</h4>
            <p>123 Luxury Street,</p>
            <p>Elegant City, ELG123</p>
            <p>info@sovereignsuites.com</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 md:mb-0">
            <h4 className="text-xl mb-4">Connect With Us</h4>
            <ul className="flex">
              <li className="mr-4">
                <a href="#" className="text-white hover:text-gray-400">
                  <i className="fab fa-facebook">
                    <FaFacebookF />
                  </i>
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="text-white hover:text-gray-400">
                  <i className="fab fa-twitter">
                    <FaTwitter />
                  </i>
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="text-white hover:text-gray-400">
                  <i className="fab fa-instagram">
                    <FaInstagram />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-8">
          <hr className="border-gray-700" />
          <p className="text-center text-gray-600 mt-4">
            &copy; 2024 Sovereign Suites. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
