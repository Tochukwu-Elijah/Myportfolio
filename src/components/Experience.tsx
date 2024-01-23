import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Computing Education Specialist"
            subTitle="Dominican Sister's College - (2019 - 2020)"
            result="Anambra, Nigeria."
            des="In my role as a Computing Education Specialist, I used interactive classes 
            and practical projects to help students develop computational thinking, programming abilities, and system awareness."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle=" Pematrix Technologies - (2020 - 2022)"
            result="Lagos, Nigeria."
            des="I was responsible for developing new user-facing features, determining the structure 
            and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages."
          />
          <ResumeCard
            title="Web Developer & User Interface (UI) Development Mentor"
            subTitle=" Anchor university - (2022 - 2023)"
            result="Lagos, Nigeria."
            // des="As a front-end developer educator, I educated students about the principles and practices of designing and constructing user interfaces, 
            // with a focus on HTML, CSS, and JavaScript skills for visually appealing and interactive websites."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Trinity university (New Horizon) (2022 – 2023)"
            result="Lagos, Nigeria."
            // des="As a front-end developer educator, I educated students about the principles and practices of designing and constructing user interfaces, 
            // with a focus on HTML, CSS, and JavaScript skills for visually appealing and interactive websites."
          />
          {/* <ResumeCard
            title="Integrated Marketing Technologist"
            subTitle="Koladaisi University (2023 – Present)"
            result="Lagos, Nigeria."
            des=""
          /> */}
        </div>
      </div>
      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;
