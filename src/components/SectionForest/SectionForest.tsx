import React from "react";
import styles from './SectionForest.module.scss';
import articleStyles from '../ForestArticle/ForestArticle.module.scss'
import { v4 as uuidv4 } from 'uuid';
import { forestHeader } from '../../utils/dataForest';
import { forestArticle, forestTypes } from "../../utils/dataForest";

import AppHeader from "../AppHeader/AppHeader";
import AppFooter from "../AppFooter/AppFooter";
import ForestArticle from "../ForestArticle/ForestArticle";

// interface SectionForestProps {

// }

const SectionForest: React.FC = () => {

  React.useEffect(() => {
    const contentNodes = document.querySelectorAll(`.${articleStyles.title}, .${articleStyles.text}, .${articleStyles.pictureContainer}, .${articleStyles.titledText}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(articleStyles.active); // Добавление класса .active
            observer.unobserve(entry.target); // Прекращаение наблюдения за элементом, так как не нужен уже
          }
        });
      },
      {
        threshold: 0.1, // Срабатывает при 10% видимости
        rootMargin: '0px 0px 300px 0px', // Расширение области видимости обсервера вниз на 700 пикселей
      }
    );

    // Наблюдение за всеми элементами из массива
    contentNodes.forEach((node) => {
      observer.observe(node);
    });

    // Очистка наблюдателя при размонтировании компонента
    return () => {
      contentNodes.forEach((node) => {
        observer.unobserve(node);
      });
    };
  }, []); // Хук запускается при монтировании
  return (
    <>
      <AppHeader />
      <section className={styles.section}>
        <div className={styles.headerContainer}>
          <h1 className={styles.header}>{forestHeader}</h1>
        </div>
        <ForestArticle
          {...forestArticle}
        />
        <ul className={styles.list}>
          {forestTypes.map((data) => {
            const uniqueId = uuidv4();
            return (
              <li className={styles.listItem} key={uniqueId}>
                <ForestArticle
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

export default SectionForest;
