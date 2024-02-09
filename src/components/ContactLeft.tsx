import {FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../assets";
import { SiVercel } from "react-icons/si";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#0B1120] to-[#0B1120] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Eze Tochukwu</h3>
        <p className="text-lg font-normal text-gray-400">
        Integrated Marketing Technologist
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I am a Professional with a diverse history in Front-End Web Development, Digital Marketing, CRM, Microsoft Office products, and Project Management, who is highly talented and results-driven. a track record of developing beautiful, user-friendly websites and putting digital marketing tactics to work. adept at making the most of CRM platforms to improve customer happiness and engagement. Strong project management abilities and a
         history of completing profitable projects on schedule and under budget.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+234 9065625149</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">elijahezetochukwu@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me On</h2>
        <div className="flex gap-4">
          <a href="https://github.com/Tochukwu-Elijah" target="_blank">
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
    </div>
  );
};

export default ContactLeft;
