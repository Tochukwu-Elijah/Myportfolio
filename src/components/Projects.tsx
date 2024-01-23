import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectTwo, projecteight, projectfive, projectfour, projectsix, } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="Digital Canvas: A Showcase of My Web Development and Hosting Endeavors"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="SOCIAL MEDIA CLONE"
            des=" I created this React-powered social media clone by copying features from prominent platforms to provide a flexible base for a user-friendly social networking experience."
            src={projectOne}
          />
          <ProjectsCard
            title="E-commerce Website"
            des="I developed this E-commerce website using React, delivering a user-friendly interface with dynamic content updates for a seamless online shopping experience.
            The modular structure facilitates efficient development and future scalability."
            src={projectTwo}
          />
          <ProjectsCard
            title="Chatting App"
            des="I Constructed this chat app website using React to guarantee smooth user interaction
             and instant chatting. a responsive and interesting interface by utilizing contemporary design concepts."
            src={projectfour}
          />
          <ProjectsCard
            title="Courier Website"
            des=" I created this Courier Website using WordPress, providing smooth delivery 
            operations with user-friendly navigation and customisable features for effective logistics administration."
            src={projectfive}
          />
          <ProjectsCard
            title="Quiz App"
            des=" I created this quiz app with React, providing an interactive
             experience with dynamic questions and a modern, responsive interface to make learning exciting and fun."
            src={projectsix}
          />
          <ProjectsCard
            title="Portfolio Website"
            des=" Using React, I created a portfolio application that dynamically displays my work and abilities. It is an interactive portfolio that, 
            through its smooth navigation and well-presented information, showcases my development skills."
            src={projecteight}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
