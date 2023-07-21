import React from "react";
import { BallCanvas } from "./canvas";
import { Sectionwrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';

import { styles } from "../styles";
const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Tech Skills</p>
      </motion.div>
    <div
      className="flex flex-row flex-wrap 
    justify-center gap-10"
    >
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
           <BallCanvas icon={technology.icon} /> 
        </div>
      ))}
    </div></>
  );
};

export default Sectionwrapper(Tech, "");
