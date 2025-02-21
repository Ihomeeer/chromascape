import React from "react";
import styles from './SectionDesert.module.scss';
import { desertHeader, headerText } from "../../utils/dataDesert";

import AppHeader from "../AppHeader/AppHeader";
import AppFooter from "../AppFooter/AppFooter";

const SectionDesert: React.FC = () => {

  return (
    <>
      <AppHeader />
      <section className={styles.section}>
        <div className={styles.headerContainer}>
          <h1 className={styles.header}>
            {desertHeader.map((syllable, index) => {
              const upperCaseSyllable = syllable.toUpperCase();
              return (
                <span key={index} className={styles[`syllable-${index + 1}`]}>
                  {upperCaseSyllable}
                </span>
              )
            })}
          </h1>
          <p className={styles.headerText}>{headerText}</p>
        </div>

        <ul className={styles.list}>

        </ul>

      </section>
      <AppFooter />
    </>
  )
}

export default SectionDesert;
