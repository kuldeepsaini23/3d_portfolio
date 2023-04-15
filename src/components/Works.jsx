import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";

import {  link } from "../assets";

import { styles } from "../styles";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { client, urlFor } from "../client";
import { fadeIn, textVariant } from "../utils/motion";

const Project = ({
  index,
  title,
  projectDescription,
  imgUrl,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={urlFor(imgUrl)}
            alt={title}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={link}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{title}</h3>
          <p className="mt-2 text-secondary text-[14px]">
            {projectDescription}
          </p>
        </div>

      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [projects, setProjects] = useState([])


  useEffect(()=>{
    const query = '*[_type == "projects"]';

    client.fetch(query).then((data)=>{
      setProjects(data);
     
    })
  },[])

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.div
          variants={fadeIn("", "", 0.1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I have worked for a business company and their turn over was $100k+
          but after I made a motion design ad for them, their company made more
          than before. This is the power of hiring a perfect video editor. Hire
          to get amazing results.....
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <Project key={project._id} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "work");
