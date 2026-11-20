import { motion } from "framer-motion";

import { styles } from "../styles";
import { profile } from "../constants";
import { computer } from "../assets";

const Hero = () => {
  return (
    <section className='relative w-full min-h-screen mx-auto overflow-hidden'>
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} pt-[110px] lg:pt-0 lg:min-h-screen flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8`}
      >
        {/* Colonne gauche : texte (jamais recouvert par la 3D) */}
        <div className='flex flex-row items-start gap-5 lg:w-1/2 lg:pt-10'>
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

        {/* Colonne droite : rendu statique de l'ordinateur (la scène 3D WebGL
            est désactivée pour la performance ; voir canvas/Computers.jsx) */}
        <div className='w-full lg:w-1/2 flex items-center justify-center lg:justify-end py-6 lg:py-0 lg:self-center'>
          <div className='relative w-full max-w-[560px] lg:max-w-none'>
            <div
              aria-hidden='true'
              className='absolute inset-x-10 bottom-2 h-16 rounded-full bg-[#915EFF]/40 blur-3xl'
            />
            <motion.img
              src={computer}
              alt="Poste de travail de développeur avec l'écran affichant le profil LinkedIn"
              className='relative w-full h-auto select-none drop-shadow-[0_25px_40px_rgba(145,94,255,0.25)]'
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { duration: 0.8, delay: 0.2 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
              }}
              draggable={false}
            />
          </div>
        </div>
      </div>

      <div className='absolute bottom-5 w-full flex justify-center items-center'>
        <a href='#about' aria-label='Aller à la section À propos'>
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
