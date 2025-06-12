// import React from 'react'
// import Link from 'next/link'

// const Footer = () => {
//   return (
//     <div className="h-12 md:h-24 p-4 lg:p-14 xl:p-40 text-red-500 flex items-center justify-between">
//       <Link href="/" className="font-bold uppercase text-xl">pizzaburg</Link>
//       <p>ALL RIGHTS RESERVED. </p>
//     </div>
//   )
// }

// export default Footer

import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-red-500 py-10">
      <hr />
      <div className=" mt-3 flex flex-col items-center justify-center space-y-5">
        {/* Brand */}
        <h1 className="text-2xl font-bold">PIZZABURG</h1>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm font-semibold uppercase ">
          <a href="/">HOME</a>
          <a href="/menu">Menu</a>
          <a href="/contact">Contact</a>
          <a href="/login">Login</a>
          <a href="/cart">cart</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://x.com/i/flow/login" className="text-red-500 hover:text-white hover:bg-red-500 border border-red-400 p-2 rounded-full">
            <FaTwitter />
          </a>
          <a href="https://www.facebook.com/" className="text-red-500 hover:text-white hover:bg-red-500 border border-red-400 p-2 rounded-full">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/" className="text-red-500 hover:text-white hover:bg-red-500 border border-red-400 p-2 rounded-full">
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-red-500 text-md mt-4 text-center">
          Copyright ©2021 All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
