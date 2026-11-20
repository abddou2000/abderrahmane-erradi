import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, profile } from "../constants";
import { portrait } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='w-full sm:w-[250px]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-4 px-3 sm:py-5 sm:px-8 min-h-[180px] sm:min-h-[280px] flex justify-evenly items-center flex-col gap-3'
      >
        <img src={icon} alt={title} className='w-12 h-12 sm:w-16 sm:h-16 object-contain' />

        <h3 className='text-white text-[14px] sm:text-[20px] leading-snug font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Aperçu.</h2>
      </motion.div>

      <div className='mt-4 flex flex-col lg:flex-row lg:items-start gap-10'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='text-secondary text-[17px] max-w-3xl leading-[30px] flex-1'
        >
          Développeur full stack basé à Marrakech et futur ingénieur en
          systèmes informatiques (cycle d'ingénieur en cours à SupMTI), avec
          plus de 4 ans d'expérience en PHP/Laravel, JavaScript, React, React
          Native et SQL.
          Je conçois des solutions web et mobiles, je digitalise des processus
          métiers, j'intègre des APIs et j'optimise les flux applicatifs. Mon
          expérience ERP couvre le stock, les ventes, les achats, la finance et la
          qualité (SMQ) — des compétences directement mobilisables pour la
          conception de workflows métiers. Cette formation d'ingénieur vient
          consolider mon expérience terrain par une vision architecture, qualité
          et conduite de projet. Organisé, rigoureux et autonome, j'aime
          travailler en équipe et résoudre des problèmes concrets.
        </motion.p>

        <motion.div
          variants={fadeIn("up", "spring", 0.3, 0.9)}
          className='w-full max-w-[300px] lg:max-w-[340px] mx-auto lg:mx-0 shrink-0'
        >
          <Tilt options={{ max: 10, scale: 1.02, speed: 450 }}>
            <div className='green-pink-gradient p-[2px] rounded-[24px] shadow-card'>
              <div className='bg-tertiary rounded-[22px] p-2'>
                <img
                  src={portrait}
                  alt={`Portrait de ${profile.name}`}
                  className='w-full aspect-[4/5] object-cover rounded-[18px]'
                />
                <div className='px-2 pt-3 pb-2 text-center'>
                  <p className='text-white font-semibold text-[16px]'>{profile.name}</p>
                  <p className='text-secondary text-[13px]'>{profile.headline}</p>
                </div>
              </div>
            </div>
          </Tilt>
        </motion.div>
      </div>

      <div className='mt-12 sm:mt-20 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-center lg:justify-start sm:gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
