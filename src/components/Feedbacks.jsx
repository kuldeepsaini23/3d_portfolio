import React, {useEffect, useState} from 'react'
import { styles } from "../styles";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import {client, urlFor} from '../client'

const FeedbackCard = ({ index, name, title, description, imgUrl})=>{


  return(
    <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{description}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {title}
          </p>
        </div>

        <img
          src={urlFor(imgUrl)}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
  )
} 

const Feedbacks = () => {
  
  const [feedback, setFeedback] = useState([])

  useEffect(()=>{
    const query = '*[_type == "feedback"]';

    client.fetch(query).then((data)=>{
      setFeedback(data);
     
    })
  },[])

  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What other say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {
          feedback.map((feedback, index)=>(
            <FeedbackCard
             key={feedback._id} 
             index={index}
             {...feedback} />
          ))
        }
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, '')