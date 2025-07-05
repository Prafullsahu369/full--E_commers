import React from "react";
import { assets } from "../assets/assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="">
      <footer className="pt-12 pb-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14">
          <div>
            <img src={assets.logo} className="mb-5 w-24 h-13" alt="Logo" />
            <p className="text-gray-600">
              Welcome to forever E-Commerce, your one-stop shop for the latest fashion clothes . We are committed to providing quality products, fast delivery, and excellent customer service to make your shopping experience seamless and enjoyable.
            </p>
          </div>
          <div>
            <p className="text-xl font-semibold mb-5">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li className="hover:text-[#282827] cursor-pointer">Home</li>
              <li className="hover:text-[#282827] cursor-pointer">About us</li>
              <li className="hover:text-[#282827] cursor-pointer">Delivery</li>
              <li className="hover:text-[#282827] cursor-pointer">Privacy policy</li>
            </ul>
          </div>
          <div>
            <p className="bg-transparent text-xl font-semibold mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li className="hover:text-[#282827] cursor-pointer">+123 1324</li>
              <li className="hover:text-[#282827] cursor-pointer">Contactforever@.com</li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <p className="text-center text-gray-600 text-0.5xl">
          &copy; 2025 praful.com. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;