import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { client, urlFor } from "../client";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import AllSocialMedia from "./AllSocialMedia";



// const ServiceCard = ({ index, title, imgUrl }) => (
//   <Tilt className="xs:w-[250px] w-full">
//     <motion.div
//       variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//       className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
//     >
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
//       >

//        <img src={urlFor(imgUrl).url()} alt={title}  className="w-16 h-16 object-contain"/>

//         <h3 className="text-white text-[20px] font-bold text-center">
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   </Tilt>
// );

const About = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setServices(data);
    });
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm Dhruv Lakhera from India. I'm professional video editor and motion
        designer having years of experience in video editing. I make engaging
        videos for my clients and help people to solve their problems by editing
        their videos and rocket their views.
      </motion.p>

      <motion.div
        variants={fadeIn("", "left", 1 * 0.5, 0.75)}
        className="flex justify-center items-center mt-14 mx-auto"
      >
        <AllSocialMedia />
      </motion.div>

      {/* <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
