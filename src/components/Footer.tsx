import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { img } from "../assets";
import { FadeIn } from "./FadeIn";
import { SiVercel } from "react-icons/si";

const Footer = () => {
  return (
    <FadeIn className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={img} alt="logo" />
        <div className="flex gap-4">
          <a href="https://github.com/Tinoet" target="_blank">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/tochukwu-eze-6a466b24b/"
            target="_blank"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a href="https://vercel.com/tochukwus-projects-f2f78e3d" target="_blank">
            <span className="bannerIcon">
              <SiVercel/>
            </span>
          </a>
        </div>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
          <a href="#" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">

            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              About
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </a>
            
          </li>
          <li>
          <a href="#" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">

            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Portfolio
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
            </a>
          </li>
          <li>
          <a href="#" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">

            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Services
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
            </a>
          </li>
          <li>
  <a href="#" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
    Blog
    <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
  </a>
</li>
          <li>
          <a href="#" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">

            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Contact
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
           RESOURCES
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li >
          <a href="#" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">

            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Authentication
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
            </a>
          </li>
          <li>
          <a href="#" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">

            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              System Status
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
            </a>
          </li>
          <li>
          <a href="#" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">

            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Terms of Service
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
            </a>
          </li>
          <li>
          <a href="#" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">

            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Pricing
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
            </a>
          </li>
          <li>
          <a href="#" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">

            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Over Right
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          DEVELOPERS
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <li>
          <a href="#" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">

            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Documentations
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
            </a>
          </li>
          <li>
          <a href="#" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">

            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Authentication
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
            </a>
          </li>
          <li>
                      <a href="#" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">

            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              API Reference
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
            </a>
          </li>
          <li>
          <a href="#" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Support
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
            </a>
          </li>
          <li>
          <a href="#" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">

            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Open Source
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
            </a>
          </li>
        </ul>
      </div>
    </FadeIn>
  );
};

export default Footer;
