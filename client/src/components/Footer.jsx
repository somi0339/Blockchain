import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo-color.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer"><Link to ='/'>Home</Link></p>
        <p className="text-white text-base text-center mx-2 cursor-pointer"><Link to ='/market'>Market</Link></p>
        <p className="text-white text-base text-center mx-2 cursor-pointer"><Link to ='/tutorials'>Tutorial</Link></p>
        <p className="text-white text-base text-center mx-2 cursor-pointer"><Link to ='/wallet'>Wallet</Link></p>
      </div>
    </div>
    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
      <p className="text-white text-sm text-center font-medium mt-2">info@decentralx.com</p>
    </div>
    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />
    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@decentralx2024</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>

    {/* Hot topics */}
    <div className="w-full mt-5">
      <p className="text-white flex flex-[0.5] justify-center items-center">Hot topics:</p>
      <ul className="flex flex-wrap justify-center space-x-4">
        <li><Link to="https://chatgpt.com/?oai-dm=1" className="text-white">ChatGPT</Link></li>
        <li><Link to="/market" className="text-white">News</Link></li>
        
       
        <li><Link to="https://bitcoin.org/en/" className="text-white">Bitcoin</Link></li>
        <li><Link to="https://ethereum.org/en/developers/docs/smart-contracts/" className="text-white">Ethereum</Link></li>
       
        <li><Link to="https://en.wikipedia.org/wiki/Web3" className="text-white">Web 3.0</Link></li>
      </ul>
    </div>
  </div>
);

export default Footer;