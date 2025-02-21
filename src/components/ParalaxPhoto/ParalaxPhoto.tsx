import React from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './ParalaxPhoto.module.scss';

interface ParalaxPhotoProps {
  id: string;
  title: string;
  text: string;
  imageURL: string;
  imageAlt: string;
  speed: number;
}

const ParalaxPhoto: React.FC<ParalaxPhotoProps> = (
  {
    id,
    text,
    title,
    imageURL,
    imageAlt,
    speed,
  }
) => {
  const avifSrc = `${imageURL}.avif`;
  const jpegSrc = `${imageURL}.jpg`;

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const { scrollYProgress } = useScroll(); // Scroll progress of the *entire* page
  const y = useTransform(scrollYProgress, [0, 1], [`0%`, `${(1 - speed) * 100}%`]); // Calculate Y position
  const textY = useTransform(scrollYProgress, [0, 1], [`0%`, `${speed * 50}%`]); // Calculate the text
  console.log(imageURL)

  return (
    <div className={styles.wrapper} id={id} ref={ref}>
      <motion.picture className={styles.pictureContainer}
        style={{
          y: y, // Apply parallax to the image
          opacity: inView ? 1 : 0, //Fade in
          // transition: { duration: 0.5 }
        }}>
        <source srcSet={avifSrc} type="image/avif" />
        <img className={styles.picture} src={jpegSrc} alt={imageAlt} />
      </motion.picture>
      <motion.h3 className={styles.title} style={{
        zIndex: 2,
        padding: '20px',
        textAlign: 'center',
        color: 'white',
        y: textY,
        fontSize: '2rem',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        opacity: inView ? 1 : 0,
        // transition: { duration: 0.5 }
      }}>
        {title}
      </motion.h3>
      {text && <p className={styles.text}>{text}</p>}
    </div>
  )
}

export default ParalaxPhoto;
