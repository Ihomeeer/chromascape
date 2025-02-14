import React from "react";
import styles from './SectionForest.module.scss';
import { forestHeader } from '../../utils/dataForest';

import AppHeader from "../AppHeader/AppHeader";
import AppFooter from "../AppFooter/AppFooter";

interface SectiomForestProps {

}

const SectionForest: React.FC<SectiomForestProps> = () => {
  return (
    <>
      <AppHeader />
      <section className={styles.section}>
        <div className={styles.headerContainer}>
          <h1 className={styles.header}>{forestHeader}</h1>
        </div>

      </section>
      <AppFooter />
    </>
  )
}

export default SectionForest;
