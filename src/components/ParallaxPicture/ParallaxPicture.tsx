import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from './ParallaxPicture.module.scss';

interface ParallaxPictureProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
}

const ParallaxPicture: React.FC<ParallaxPictureProps> = ({
  title,
  imageUrl,
  imageAlt
}) => {
  const avifSrc = `${imageUrl}.avif`;
  const jpegSrc = `${imageUrl}.jpg`;
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Динамическое смещение для параллакса
  const pictureY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -600]);

  return (
    <motion.div ref={ref} className={styles.wrapper} style={{ y: pictureY }}>
      <motion.picture className={styles.pictureContainer}>
        <source srcSet={avifSrc} type="image/avif" />
        <img className={styles.picture} src={jpegSrc} alt={imageAlt} />
      </motion.picture>
      <motion.h2 className={styles.title} style={{ y: textY }}>
        {title}
      </motion.h2>
    </motion.div>
  )
}

export default ParallaxPicture;
