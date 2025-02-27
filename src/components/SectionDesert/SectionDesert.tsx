import React from "react";
import { motion } from 'framer-motion';
import styles from './SectionDesert.module.scss';

import AppHeader from "../AppHeader/AppHeader";
import AppFooter from "../AppFooter/AppFooter";

const SectionDesert: React.FC = () => {
  return (
    <>
      <AppHeader />
      <section className={styles.section}>
        <div className={styles.headerContainer}>
          <h1 className={styles.header}>{desertHeader}</h1>
        </div>

        <ul className={styles.list}>

        </ul>

      </section>
      <AppFooter />
    </>
  )
}

export default SectionDesert;


const ParallaxPage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#f0f0f0' }}>
      <motion.div
          style={{
            height: '20vh', // Space for the stacked items at the top
            position: 'sticky',
            top: 0,
            zIndex: 100, // Ensure the stack is on top
            background: '#fff', // Background for the top bar
          }}
      >
          {/*  Placeholder where stacked items will accumulate  */}
      </motion.div>

      <ParallaxSection
        imageUrl="https://via.placeholder.com/1200x800/FF5733/FFFFFF?text=Image+1" // Replace with your image URLs
        text="This is the first section with some text content."
        speed={0.2}
      />

      <ParallaxSection
        imageUrl="https://via.placeholder.com/1200x800/33FF57/000000?text=Image+2"
        text="Another section with different content and parallax speed."
        speed={0.4}
      />

       <StackSection>
         <div style={{width:"300px", height:"200px", backgroundColor:"lightblue", margin:"30px"}}>Item 1</div>
      </StackSection>
      <StackSection>
        <div style={{width:"300px", height:"200px", backgroundColor:"lightgreen", margin:"30px"}}>Item 2</div>
      </StackSection>
        <StackSection>
        <div style={{width:"300px", height:"200px", backgroundColor:"lightcoral", margin:"30px"}}>Item 3</div>
      </StackSection>
        <StackSection>
        <div style={{width:"300px", height:"200px", backgroundColor:"gold", margin:"30px"}}>Item 4</div>
      </StackSection>

      {/* Add more sections as needed */}
    </div>
  );
};

export default ParallaxPage;
