import React from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from './SectionDesert.module.scss';
import { desertHeader, headerText, desertPhotos } from "../../utils/dataDesert";


import AppHeader from "../AppHeader/AppHeader";
import AppFooter from "../AppFooter/AppFooter";
import ParalaxPhoto from "../ParalaxPhoto/ParalaxPhoto";

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
          {desertPhotos.map((data) => {
            const uniqueId = uuidv4();
            return (
              <li className={styles.listItem} key={uniqueId}>
                <ParalaxPhoto
                  {...data} />
              </li>
            )
          })}
        </ul>

      </section>
      <AppFooter />
    </>
  )
}

export default SectionDesert;
