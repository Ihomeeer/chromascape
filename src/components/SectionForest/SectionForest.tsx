import React, { useEffect, useState } from "react";
import styles from './SectionForest.module.scss';
import articleStyles from '../ForestArticle/ForestArticle.module.scss';
import galleryStyles from '../GalleryVertical/GalleryVertical.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { searchImages } from '../../utils/unsplashAPI';
import { forestHeader } from '../../utils/dataForest';
import { forestArticle, forestTypes } from "../../utils/dataForest";

import AppHeader from "../AppHeader/AppHeader";
import AppFooter from "../AppFooter/AppFooter";
import ForestArticle from "../ForestArticle/ForestArticle";
import GalleryVertical from "../GalleryVertical/GalleryVertical";


const SectionForest: React.FC = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const contentNodes = document.querySelectorAll(`.${articleStyles.title}, .${articleStyles.text}, .${articleStyles.pictureContainer}, .${articleStyles.titledText}, .${galleryStyles.listItem}`);


    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            if (target.classList.contains(articleStyles.title) ||
              target.classList.contains(articleStyles.text) ||
              target.classList.contains(articleStyles.pictureContainer) ||
              target.classList.contains(articleStyles.titledText)) {
              target.classList.add(articleStyles.active); // Для элементов из articleStyles
            } else if (target.classList.contains(galleryStyles.listItem)) {
              target.classList.add(galleryStyles.active); // Для элементов из galleryStyles
            }
            observer.unobserve(entry.target); // Прекращаение наблюдения за элементом, так как не нужен уже
          }
        });
      },
      {
        threshold: 0.1, // Срабатывает при 10% видимости
        rootMargin: '0px 0px 300px 0px', // Расширение области видимости обсервера вниз на 300 пикселей
      }
    );

    // Наблюдение за всеми элементами из массива
    contentNodes.forEach((node) => {
      observer.observe(node);
    });

    const loadImages = async () => {
      const images = await searchImages('forest');
      setImages(images);
    };

    loadImages();
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

        <GalleryVertical
          forestGallery={images}
        />

      </section>
      <AppFooter />
    </>
  )
}

export default SectionForest;
