import React from 'react';
// images
// import Image from '../assets/avatar.svg';
import Image from '../assets/Baby cheeksz.png';
// icons
import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='section' id='home'>
      <div className='container mx auto'>
        <div>
          { /* text */ }
          <div>
            <h1>
              ARMAN <span>AKTHER</span>
            </h1>
            <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation sequence={[
                'Developer',
                2000,
                'Designer',
                2000,
                'Animator',
                2000,
                'Youtuber',
                2000,
                'Jack of all trades',
                2000,
                'Master of none',
                2000,
                'Better than master of one',
                2000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              />
            </div>
          </div>

          { /* images */ }
          <div>
            <img src={Image} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
