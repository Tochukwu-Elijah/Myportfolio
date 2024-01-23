import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import {  SiMicrosoft, SiWordpress, SiGoogle, SiVercel } from "react-icons/si";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["An Integrated Developer and Marketer", "A Digital Solutions Engineer", "An E-commerce Technology Specialist", "A Customer-Centric Web Developer", "A Tech-Infused Customer Experience Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Eze Tochukwu</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
           <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
        I am a Professional with a diverse history in Front-End Web Development, Digital Marketing, CRM, Microsoft Office products, and Project Management, who is highly talented and results-driven. a track record of developing beautiful, user-friendly websites and putting digital marketing tactics to work. adept at making the most of CRM platforms to improve customer happiness and engagement. Strong project management abilities and a history of completing profitable projects on schedule and under budget.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find Me On
          </h2>
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
                  <a
                    href="https://vercel.com/tochukwus-projects-f2f78e3d"
                    target="_blank"
                  >
                    <span className="bannerIcon">
                      <SiVercel />
                    </span>
                  </a>
                </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiGoogle />
            </span>
            <span className="bannerIcon">
              <SiMicrosoft />
            </span>
            <span className="bannerIcon">
              <SiWordpress />
            </span>
            {/* <span className="bannerIcon">
              <SiGoogle />
            </span>
            <span className="bannerIcon">
              <SiGit />
            </span>
            <span className="bannerIcon">
              <SiZoho />
            </span>
            <span className="bannerIcon">
              <SiWordpress />
            </span> */}
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
