import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { motion, useScroll, useTransform } from "framer-motion";
import styles from './SectionDesert.module.scss';
import { desertHeader, headerText, desertPhotos } from "../../utils/dataDesert";


import AppHeader from "../AppHeader/AppHeader";
import AppFooter from "../AppFooter/AppFooter";
import ParallaxPicture from "../ParallaxPicture/ParallaxPicture";

const SectionDesert: React.FC = () => {
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 600], [0, -150]);
  const textY = useTransform(scrollY, [0, 600], [0, -250]);
  const pictureY = useTransform(scrollY, [0, 600], [0, -100]);

  return (
    <>
      <AppHeader />
      <section className={styles.section}>
        <motion.div className={styles.headerContainer} style={{ y: pictureY }}>
          <motion.h1 className={styles.header} style={{ y: titleY }}>
            {desertHeader.map((syllable, index) => {
              const upperCaseSyllable = syllable.toUpperCase();
              return (
                <span key={index} className={styles[`syllable-${index + 1}`]}>
                  {upperCaseSyllable}
                </span>
              )
            })}
          </motion.h1>
          <motion.p className={styles.headerText} style={{ y: textY }}> {headerText}</motion.p>
        </motion.div>

        <ul className={styles.list}>
          {desertPhotos.map((data) => {
            const uniqueId = uuidv4();
            return (
              <li className={styles.listItem} key={uniqueId}>

                  <ParallaxPicture {...data} />

              </li>
            )
          })}
        </ul>

      </section >
      <AppFooter />
    </>
  )
}

export default SectionDesert;
