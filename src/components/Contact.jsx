import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { profile } from "../constants";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import SocialLinks from "./SocialLinks";

const EMAILJS = {
  serviceId: import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
};

// True only when all three EmailJS keys are set in .env (see .env.example).
const emailConfigured = Boolean(
  EMAILJS.serviceId && EMAILJS.templateId && EMAILJS.publicKey
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailConfigured) {
      alert(
        `Le formulaire arrive bientôt. En attendant, écrivez-moi à ${profile.email} ou sur LinkedIn.`
      );
      return;
    }

    setLoading(true);

    emailjs
      .send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          from_name: form.name,
          to_name: profile.name,
          from_email: form.email,
          message: form.message,
        },
        EMAILJS.publicKey
      )
      .then(
        () => {
          setLoading(false);
          alert("Merci ! Je vous réponds au plus vite.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Oups, une erreur est survenue. Merci de réessayer.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Me contacter</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <p className='mt-3 text-secondary text-[15px]'>
          Basé à {profile.location}. Ouvert aux opportunités Full Stack
          Laravel / React / React Native et aux missions freelance.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className='mt-3 inline-block text-white font-medium hover:text-[#915EFF] transition-colors'
        >
          {profile.email}
        </a>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Votre nom</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Comment vous appelez-vous ?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Votre email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Où puis-je vous répondre ?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Votre message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Parlez-moi de votre projet ou de votre offre'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Envoi..." : "Envoyer"}
          </button>
        </form>

        <div className='mt-10'>
          <p className='text-secondary text-[14px] mb-3'>Retrouvez-moi sur</p>
          <SocialLinks />
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
