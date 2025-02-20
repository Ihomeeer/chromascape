import React from "react";
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
