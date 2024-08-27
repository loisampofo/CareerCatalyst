import React from "react";
import background from "../public/background.svg";
import logo from "../public/logo.svg";
import Image from "next/image";
import { GoSearch } from "react-icons/go";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";
import ellipse from "../public/ellipse.png";
import CareerCatalsyt from "../public/CareerCatalyst.png";
import FooterImage from "../public/footer-image.png";
import IG from "../public/instagram.svg";
import LinkedIn from "../public/linkedIn.svg";
import Facebook from "../public/facebook.svg";
import Youtube from "../public/youtube.svg";
import HeroImage from "../public/HeroImage.svg";
const Hero = () => {
  return (
    <div
      className="bg-cover flex flex-col p-5"
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
      <div className="flex justify-around">
        <div className="discover mt-40 ml-28 space-y-5 flex flex-col text-center z-10">
          <h1 className="text-[#B3A289] font-extrabold text-5xl text-center">
            Discover Opportunities
          </h1>
          <p className="text-white text-center font-montserrat text-base leading-loose">
            {" "}
            ARE YOU LOOKING FOR AN INTERNSHIP OPPORTUNITY <br /> Discover
            internship opportunities by searching using the search engine below.
          </p>
        </div>
        <Image className="z-0 -ml-20 mt-10 size-96" src={HeroImage} alt="HeroImage" />
      </div>
      <div className="cards mt-20">
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
      <div className="career w-full h-96 mt-52 flex flex-col items-center ">
        <Image
          className="w-1/3 h-14 mb-10 mt-5"
          src={CareerCatalsyt}
          alt="CareerCatalyst"
        />
        <p className="text-white font-inter text-2xl font-light">
          Internships are not just about making coffee runs
        </p>
        <p className="text-white text-center font-inter text-2xl font-light">
          They’re invaluable opportunities to gain real-world <br />
          experience, develop essential skills and kick-start <br /> your career
          Journey
        </p>
      </div>
      <div className="images my-10 ml-10">
        <Image className="size-96" src={FooterImage} alt="footerImage" />
      </div>
      <hr className="text-white mx-60" />
      <div className="bg-[#5F70A4] w-11/12 h-auto mx-auto my-28 flex flex-col items-center p-14">
        <div className="flex justify-around space-x-60">
          <div className="">
            <ul className="space-y-6">
              <h1 className="font-poppins text-white font-bold tracking-widest text-base">
                Address
              </h1>
              <li className="font-poppins text-white font-semibold tracking-widest text-sm">
                University of Ghana
              </li>
              <li className="font-poppins text-white font-semibold tracking-widest text-sm">
                Accra, Legon
              </li>
              <li className="font-poppins text-white font-semibold tracking-widest text-sm">
                Ghana
              </li>
            </ul>
          </div>
          <div className="essentials">
            <ul className="space-y-6">
              <h1 className="font-poppins text-white font-bold tracking-widest text-base">
                Essentials
              </h1>
              <li className="font-poppins text-white font-semibold tracking-widest text-sm">
                Email
              </li>
              <li className="font-poppins text-white font-semibold tracking-widest text-sm">
                Contact Us
              </li>
              <li className="font-poppins text-white font-semibold tracking-widest text-sm">
                Jobs
              </li>
              <li className="font-poppins text-white font-semibold tracking-widest text-sm">
                Find an expert
              </li>
            </ul>
          </div>
          <div className="Legal">
            <ul className="space-y-6">
              <h1 className="font-poppins text-white font-bold tracking-widest text-base">
                Copyright
              </h1>
              <li className="font-poppins text-white font-semibold tracking-widest text-sm">
                Terms and Conditions
              </li>
              <li className="font-poppins text-white font-semibold tracking-widest text-sm">
                Posting Rules
              </li>
              <li className="font-poppins text-white font-semibold tracking-widest text-sm">
                Cookies Policy
              </li>
            </ul>
          </div>
        </div>
        <BsTwitterX className="text-5xl my-10" />
        <p className="text-white font-inter font-light text-xl">
          CareerCatalyst for the people and the very people who made it very{" "}
          <br />
          possible to do this job and make it a successful one <br />
        </p>
        {/* <p className="mt-5">#careerCatalyst</p> */}
        <div className="flex mt-10 space-x-5">
          <Image className="size-10" src={IG} alt="instagram icon" />
          <Image className="size-10" src={LinkedIn} alt="LinkedIn icon" />
          <Image className="size-10" src={Facebook} alt="Facebook icon" />
          <Image className="" src={Youtube} alt="Youtube icon" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
