import React, { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './StackSection.module.scss';
import { v4 as uuidv4 } from 'uuid';




interface StackSectionProps {
  children: ReactNode;
}


const StackSection: React.FC<StackSectionProps> = (children) => {
  const uniqueId = uuidv4();

  const { ref, inView } = useInView({
    threshold: 0.2,  // Adjust as needed, trigger when element top is near viewport top.
    triggerOnce: false,
  });

  const { scrollYProgress } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);

  const y = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1], // Define input scroll progress values.
    [0, 0, -600, -600] //  Output Y values.  Adjust -600 to control stacking position.
  );

  return (
    <motion.section className={styles.section}
      ref={containerRef}
      style={{
        position: 'relative', // Important for positioning children absolutely
        minHeight: '50vh', // Provide some height
        y: y, // Apply the transform
        opacity: inView ? 1 : 0.3,
        transition: { duration: 0.4 },
      }}
    >
      <div ref={ref}> {children}</div>
    </motion.section>
  )
}

export default StackSection;
