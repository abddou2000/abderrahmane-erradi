import React from "react";

import { styles } from "../styles";
import { profile } from "../constants";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`${styles.paddingX} w-full bg-primary border-t border-tertiary py-8 relative z-10`}
    >
      <div className='max-w-7xl mx-auto flex sm:flex-row flex-col justify-between items-center gap-6'>
        <div className='text-center sm:text-left'>
          <p className='text-white font-bold text-[16px]'>{profile.name}</p>
          <p className='text-secondary text-[14px]'>{profile.headline}</p>
          <p className='text-secondary text-[14px] mt-1'>
            Basé à {profile.location} · {profile.email}
          </p>
        </div>

        <SocialLinks />
      </div>
      <p className='max-w-7xl mx-auto mt-6 text-secondary text-[12px] text-center sm:text-left'>
        &copy; {year} {profile.name}. Construit avec React, Three.js et
        Tailwind CSS.
      </p>
    </footer>
  );
};

export default Footer;
