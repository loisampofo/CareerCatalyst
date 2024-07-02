import React from "react";
import background from "../public/background.png";
import logo from "../public/logo.svg";
import Image from "next/image";
import { GoSearch } from "react-icons/go";
import Link from "next/link";
import ellipse from "../public/ellipse.png";
import CareerCatalsyt from "../public/CareerCatalyst.png";
import FooterImage from "../public/footer-image.png";
const Hero = () => {
  return (
    <div
      className="bg-cover flex flex-col"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div className="search flex p-10">
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
        <Link href={``} className="text-white font-medium">
          Home
        </Link>
        <Link href={``} className="text-white font-medium">
          View Job
        </Link>
        <Link href={``} className="text-white font-medium">
          About Us
        </Link>
        <Link href={``} className="text-white font-medium">
          Contact Us
        </Link>
      </div>
      <div className="discover mt-40 ml-28 space-y-5 flex flex-col items-start">
        <h1 className="text-[#B3A289] font-extrabold text-5xl text-center">
          Discover Opportunities
        </h1>
        <p className="text-white text-center font-sans">
          {" "}
          ARE YOU LOOKING FOR AN INTERNSHIP OPPORTUNITY <br /> Discover
          internship opportunities by searching using the search engine below.
        </p>
      </div>
      <div className="cards mt-44">
        <p className="text-white font-extralight font-sans text-xs text-center mb-20 mr-44">
          <span className="text-4xl font-extrabold font-sans">
            Most searched Jobs
          </span>
          <br />
          Discover Frequently Searched Jobs
        </p>
        <div className="card-section flex space-x-10 justify-center">
          <div className="card h-64 w-72 rounded-3xl flex flex-col items-center justify-center bg-white">
            <Image className="w-1/3" src={ellipse} alt="internship icon" />
            <p className="text-center font-sans my-3">
              <span className="text-[#7E5757] font-bold text-xs">
                DATA SCIENCE{" "}
              </span>
              <br />
              <span className="text-[#7E5757] font-medium text-sm">
                Internships For students <br />
              </span>
            </p>
            <p className="text-[#746F6F] font-medium text-sm text-center leading-4 ">
              Looking to intern in the area of <br />
              Data Science? <br /> Click to explore opportunities
            </p>
          </div>
          <div className="card h-64 w-72 rounded-3xl flex flex-col items-center justify-center bg-white">
            <Image className="w-1/3" src={ellipse} alt="internship icon" />
            <p className="text-center font-sans my-3">
              <span className="text-[#7E5757] font-bold text-xs">
                DATA SCIENCE{" "}
              </span>
              <br />
              <span className="text-[#7E5757] font-medium text-sm">
                Internships For students <br />
              </span>
            </p>
            <p className="text-[#746F6F] font-medium text-sm text-center leading-4 ">
              Looking to intern in the area of <br />
              Data Science? <br /> Click to explore opportunities
            </p>
          </div>
          <div className="card h-64 w-72 rounded-3xl flex flex-col items-center justify-center bg-white">
            <Image className="w-1/3" src={ellipse} alt="internship icon" />
            <p className="text-center font-sans my-3">
              <span className="text-[#7E5757] font-bold text-xs">
                DATA SCIENCE{" "}
              </span>
              <br />
              <span className="text-[#7E5757] font-medium text-sm">
                Internships For students <br />
              </span>
            </p>
            <p className="text-[#746F6F] font-medium text-sm text-center leading-4 ">
              Looking to intern in the area of <br />
              Data Science? <br /> Click to explore opportunities
            </p>
          </div>
        </div>
      </div>
      <div className="career w-full h-80 bg-[#B3A289] mt-28 flex flex-col items-center justify-center">
        <Image className="w-1/3 h-14 mb-10" src={CareerCatalsyt} alt="CareerCatalyst" />
        <p className="text-white font-sans font-thin text-2xl">Internships are not just about making coffee runs</p>
        <p className="text-white text-center font-thin text-2xl">
          They’re invaluable opportunities to gain real-world <br />experience,
          develop essential skills and kick-start <br /> your career Journey
        </p>
      </div>
      <div className="images my-10 ml-10">
        <Image className="size-auto" src={FooterImage} alt="footerImage" />
      </div>
    </div>
  );
};

export default Hero;
