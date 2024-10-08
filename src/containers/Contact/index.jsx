import React, { useEffect, useState } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import ContactForm from '@components/ContactForm';
import Container from '@components/Container';
import HeaderTitle from '@components/HeaderTitle';
import ImageBlob from '@components/ImageBlob';

const Contact = () => {
  const [width, setWidth] = useState(360);
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const animation = useAnimation();
  const formAnimation = useAnimation();

  // Animation Configuration
  useEffect(() => {
    if (inView) {
      animation.start({
        transition: { duration: 1, delay: 0.5 },
        opacity: 1,
      });
      formAnimation.start({
        transition: { duration: 0.5, delay: 0.5, ease: 'easeIn' },
        opacity: 1,
        x: 0,
      });
    } else {
      animation.start({
        transition: { duration: 1 },
        opacity: 0,
      });
      formAnimation.start({
        transition: { duration: 0.5, ease: 'easeOut' },
        opacity: 0,
        x: '-5%',
      });
    }
  }, [inView]);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  // Function to get the screen width
  // Used to handle the responsiveness of the design in smaller devices
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  return (
    <Container id="contact" fullScreen={width > 380}>
      {/* Start Title Section */}
      <div className="pt-8">
        <HeaderTitle title={'Contact'} />
      </div>
      {/* Start End Section */}

      <div
        ref={ref}
        className="grid h-4/5 grid-flow-row place-content-center justify-items-center gap-8 pt-16 lg:grid-cols-2 lg:gap-2 lg:pt-0 lg:pb-8"
      >
        {/* Start Contact Image Section */}
        <motion.div animate={animation} className="flex justify-center">
          <ImageBlob image={'/assets/memoji-contact.webp'} />
        </motion.div>
        {/* End Contact Image Section */}

        {/* Start Form Section */}
        <motion.div
          animate={formAnimation}
          className="text-center lg:row-end-1 lg:my-auto lg:text-left"
        >
          <h1 className="text-xl font-bold text-theme-primary lg:text-3xl">{`Let's Talk`}</h1>
          <p className="max-w-md pt-2 text-sm leading-4 text-theme-bg dark:text-theme-lightBg lg:text-base">
            {
              'To request a quote or want to meet up for coffee, contact us directly or fill out the form and I will get back to you promptly.'
            }
          </p>
          <div className="pt-4">
            <ContactForm />
          </div>
        </motion.div>
        {/* End Form Section */}
      </div>
    </Container>
  );
};

export default Contact;
