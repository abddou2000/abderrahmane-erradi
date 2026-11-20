import { motion } from "framer-motion";

import { styles } from "../styles";
import { profile } from "../constants";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='min-w-0 flex-1'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Salut, je suis{" "}
            <span className='text-[#915EFF]'>{profile.firstName}</span>
          </h1>
          {profile.badge && (
            <span className='inline-flex max-w-full items-center gap-2 mt-3 bg-[#915EFF]/15 border border-[#915EFF]/60 text-[#dfd9ff] text-[13px] sm:text-[14px] font-medium px-4 py-1.5 rounded-full'>
              <span className='w-2 h-2 rounded-full bg-[#915EFF] animate-pulse' />
              {profile.badge}
            </span>
          )}
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {profile.headline}
            <br className='sm:block hidden' />
            <span className='text-secondary sm:text-[20px] text-[14px] font-normal block mt-2 max-w-xl'>
              {profile.intro}
            </span>
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about' aria-label='Scroll to about section'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
