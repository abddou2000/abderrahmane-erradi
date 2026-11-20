import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { education, languages } from "../constants";

const EducationCard = ({ index, title, school, place, date, image, current }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.4, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <div className='flex items-start justify-between gap-3'>
      <p className='text-[#915EFF] font-black text-[40px] leading-none'>{date}</p>
      {current && (
        <span className='shrink-0 bg-[#915EFF] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full'>
          En cours
        </span>
      )}
    </div>

    <div className='mt-4'>
      <p className='text-white tracking-wider text-[18px] font-semibold'>
        {title}
      </p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {school}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>{place}</p>
        </div>

        <img
          src={image}
          alt=''
          aria-hidden='true'
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Formation</p>
          <h2 className={styles.sectionHeadText}>Diplômes &amp; certification.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-6 ${styles.paddingX} flex flex-wrap gap-7`}>
        {education.map((item, index) => (
          <EducationCard key={`${item.title}-${index}`} index={index} {...item} />
        ))}
      </div>
      <div className={`pb-14 ${styles.paddingX}`}>
        <p className='text-secondary text-[14px] uppercase tracking-wider mb-3'>
          Langues
        </p>
        <div className='flex flex-wrap gap-3'>
          {languages.map((lang) => (
            <span
              key={lang.name}
              className='bg-tertiary text-white text-[14px] px-4 py-2 rounded-full'
            >
              {lang.name}{" "}
              <span className='text-secondary'>— {lang.level}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
