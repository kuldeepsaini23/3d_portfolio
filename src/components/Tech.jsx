import React, {useState, useEffect} from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
// import { technologies } from '../constants'
import { client, urlFor } from '../client'
//! Modify this technlgy

const Tech = () => {
  const [tech, setTech] = useState([])


  useEffect(()=>{
    const query = '*[_type == "tech"]';

    client.fetch(query).then((data)=>{
      setTech(data);
     
    })
  },[])
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {
        tech.map((technology)=>(
          <div className='w-28 h-28' key={technology.title}>
            <BallCanvas icon={urlFor(technology.imgUrl)}/>
          </div>
        ))
      }
    </div>
  )
}

export default SectionWrapper(Tech, '')