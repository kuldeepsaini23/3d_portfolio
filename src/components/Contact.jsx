import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailJs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2'

import { client } from "../client";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });



  function handleChange(e) {
   const {name, value} = e.target;
   
   setForm({...form, [name]:value})
  }

  function handleSubmit(e) {
    e.preventDefault();

    const contact = {
      _type: 'contact',
      name: form.name,
      email: form.email,
      message: form.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
        setTimeout(() => {
          toast.success("Message Sent!");
        }, 1000);
        
      })
      .catch((err) => console.log(err));

    emailJs.send(
      'service_kh126n8',
      'template_ka5nqeq',
      {
        from_name: form.name,
        to_name: 'Diago',
        email_id: form.email,
        message: form.message
      },
      'Lr3ymNFSZg_9lhZmA'
    ).then(()=>{
      toast.success("Message Sent Successfully")
      Swal.fire(
        'Thanks For Submitting Request!',
        'I will get back to you as soon as Possible!',
        'success'
      )
      setForm({
        name:'',
        email:'',
        message:'',
      }, (error)=>{
        toast.error("Something Went Wrong.")
      })
    }).catch((error)=>{
      toast.error("Something Went Wrong.");
    })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get In touch from anywhere in the the World</p>
        <h3 className={styles.sectionHeadText}>Hire Me</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="YOUR NAME"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none 
            font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              required
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="YOUR EMAIL"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none 
            font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What Do you want to Say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none 
            font-medium"
            />
          </label>

            <button
              className="btn-pink flex items-center gap-3 mx-auto"
              id="submit-btn"
              type="submit"
            >
              Send Message
              <i className="submit-icon fa-solid fa-paper-plane"></i>
            </button>
            <Toaster/>

        </form>
      </motion.div>

      <motion.div
         variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
      <EarthCanvas/>

      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
