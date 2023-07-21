import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { Sectionwrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { e } from "maath/dist/index-43782085.esm";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm({...form, [name]: value})
  };
  const handleSubmit = (e) => {;
 e.preventDefault();
 setLoading(true);

 emailjs.send(
  'service_kvqngxn', 
  'template_dfq7bxc',
  {
    from_name: form.name,
    to_name:'Datche APP',
    from_email:form.email,
    to_email:'Frithdav@gmail.com',
    message: form.message,
  },
  'jSI1zKb0AfH-WmB3t'
  )
  .then(()=>{
    setLoading(false);
    alert('Thank you. I will get back to you as soon as possible.');

    setForm({
      name:'',
      email:'',
      message:'',
      })
  }, (error)=>{
    setLoading(false)

    console.log(error);

    alert('Oups! Something went wrong!')
  }
  )
}
  return (
    <div
      className="xl:mt-12 xl:flex-row 
    flex flex-col-reverse gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "twin", 0.2, 1)}
        className="bg-black-100 p-8 flex-0.75 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.heroHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 ">Your Name</span>
            <input 
            type="text"
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="bg-tertiary py-4 px-6
            placeholder;text-secondary text-white rounded-lg outline-none
            border-none font-medium"/>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 ">Your Name</span>
            <input 
            type="email"
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="bg-tertiary py-4 px-6
            placeholder;text-secondary text-white rounded-lg outline-none
            border-none font-medium"/>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 ">Your Name</span>
            <textarea
            rows="7"
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="bg-tertiary py-4 px-6
            placeholder;text-secondary text-white rounded-lg outline-none
            border-none font-medium"/>
          </label>
          <button
          type="submit"
          className="bg-tertiary py-3 px-8 w-fit
          font-bold shadow-primary shadow-md
          text-white outline-none rounded-xl">
            {loading ? "sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
      variants={slideIn('right',"twin",0.2,1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default Sectionwrapper(Contact, "contact")
