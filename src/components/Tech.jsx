import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { TechCloudCanvas } from "./canvas";
import { cloudTechnologies, extraSkills } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Compétences</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Du back-end Laravel aux applications mobiles React Native, en passant
        par les bases de données et la digitalisation des processus métiers.
      </motion.p>

      <motion.div
        variants={fadeIn("up", "spring", 0.2, 1)}
        className='relative mt-6 w-full h-[480px] sm:h-[600px] rounded-[20px] bg-black-100/60 overflow-hidden'
      >
        <TechCloudCanvas items={cloudTechnologies} />
        <p className='pointer-events-none absolute bottom-4 w-full text-center text-secondary text-[12px] tracking-wider uppercase'>
          Glissez pour faire tourner · survolez un logo
        </p>
      </motion.div>

      <motion.ul
        variants={fadeIn("", "", 0.3, 1)}
        className='mt-8 flex flex-wrap justify-center gap-3'
      >
        {extraSkills.map((skill) => (
          <li
            key={skill}
            className='bg-tertiary border border-[#915EFF]/30 text-white text-[14px] px-4 py-2 rounded-full'
          >
            {skill}
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
