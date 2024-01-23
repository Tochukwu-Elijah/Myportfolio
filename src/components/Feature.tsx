import { FaGlobe, FaAd, FaHouseUser , FaProjectDiagram } from "react-icons/fa";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";
import { SiMicrosoft } from "react-icons/si";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Web Development"
            des="As a dev, I craft sleek sites with HTML,CSS,and React,using Bootstrap for style,ensuring function,and tracking tech trends."
            icon={null}
          />
          <Card
            title="Digital Marketing "
            des="I market brands online with SEO, PPC, and SMM. I analyze data, optimize strategies, and stay updated on digital trends."
            icon={<FaAd />}
          />
          <Card
            title="Office Proficient"
            des="I can complete jobs with MS Office programs with ease. I can generate, analyze, and present work while being up to date on the latest developments and effective methods."
            icon={<SiMicrosoft />}
          />
          <Card
            title="Interpersonal Skills"
            des="In project positions, I lead activities utilizing plans, tools, and Scrum to ensure goals are met while tracking progress and changing to keep projects on schedule."
            icon={<FaHouseUser />}
          />
          <Card
            title="Project Management"
            des="As part of my project leadership responsibilities,I oversee tasks utilizing plans,resources,and Scrum,monitoring 
            progress to make project delivery on schedule."
            icon={<FaProjectDiagram />}
          />
          <Card
            title="Hosting Websites"
            des="As a host, I administer web spaces, assuring availability with server expertise in DNS, SSL, and FTP, while also monitoring security and optimizing performance."
            icon={<FaGlobe />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
