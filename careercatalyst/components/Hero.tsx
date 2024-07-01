import React from "react";
import background from "../public/background.png";
import logo from "../public/logo.svg";
import Image from "next/image";
import { GoSearch } from "react-icons/go";
import Link from 'next/link'

const Hero = () => {
  return (
    <div
      className="h-screen bg-cover flex flex-col p-10 "
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div className="search flex ">
        <Image className="hidden md:block" src={logo} alt="logo" />
        <input
          className="ml-9 h-10 mr-1 px-5 w-2/5"
          type="text"
          placeholder="Job Title, Keywords"
        />
        <input
          className="w-2/6 mr-1 px-7"
          type="text"
          placeholder="Seach by Department"
        />
        <button className="h-10 w-10 flex items-center justify-center bg-[#8693BA]">
          <GoSearch className="text-3xl" />
        </button>
      </div>
      <hr className="bg-white my-5 w-3/5 ml-36"></hr>
      <div className="nav space-x-9 ml-28">
        <Link href={``} className="text-white font-medium">Home</Link>
        <Link href={``} className="text-white font-medium">View Job</Link>
        <Link href={``} className="text-white font-medium">About Us</Link>
        <Link href={``} className="text-white font-medium">Contact Us</Link>
      </div>
      <div className="discover mt-40 ml-28 space-y-5 flex flex-col items-start">
        <h1 className="text-[#B3A289] font-extrabold text-5xl text-center">Discover Opportunities</h1>
        <p className="text-white text-center"> ARE YOU LOOKING FOR AN INTERNSHIP OPPORTUNITY <br /> Discover internship opportunities by searching using the search engine below.</p>
        
      </div>
      <div className="most_searched"></div>
      <div className="cards"></div>
      <div className="career"></div>
      <div className="images"></div>
    </div>
  );
};

export default Hero;
