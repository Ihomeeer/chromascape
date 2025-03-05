import React, { useEffect, useState, useRef } from "react";
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
  const [isLoaded, setIsLoaded] = useState(false); // Состояние загрузки данных, для регулировки работы обсервера
  const observerRef = useRef<IntersectionObserver | null>(null);
  const contentNodesRef = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const images = await searchImages('forest');
        setImages(images);
        setIsLoaded(true); // Данные загружены, все ок
      } catch (error) {
        console.error('Ошибка загрузки изображений:', error);
      }
    };

    loadImages();

    // Инициализация обсервера
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            if (target.classList.contains(articleStyles.title) ||
              target.classList.contains(articleStyles.text) ||
              target.classList.contains(articleStyles.pictureContainer) ||
              target.classList.contains(articleStyles.titledText)) {
              target.classList.add(articleStyles.active);
            } else if (target.classList.contains(galleryStyles.listItem)) {
              target.classList.add(galleryStyles.active);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0, // Нулевой порог, чтобы срабатывало при любом пересечении
        rootMargin: '0px 0px 300px 0px', // Чтобы было видно работу анимации
      }
    );

    observerRef.current = observer;

    // Функция для наблюдения за элементами
    const observeElements = () => {
      const contentNodes = document.querySelectorAll(
        `.${articleStyles.title}, .${articleStyles.text}, .${articleStyles.pictureContainer}, .${articleStyles.titledText}, .${galleryStyles.listItem}`
      );
      contentNodes.forEach((node) => {
        observer.observe(node);
      });
      contentNodesRef.current = contentNodes;
    };

    // Наблюдение за существующими элементами - это текст и изображения в коротки статьях в начале страницы
    observeElements();

    // Проверка и перезапуск наблюдения, если данные загружены (для галереи)
    const checkAndObserve = () => {
      if (isLoaded) {
        observeElements(); // Повторная проверка и слежение за всеми элементами
      }
    };

    const interval = setInterval(checkAndObserve, 100); // Проверка каждые 100 мс, чтобы все не ломалось по мере прогрузки новых компонент изображенийв DOM

    // Очистка наблюдателя и интервала при размонтировании
    return () => {
      if (observerRef.current) {
        contentNodesRef.current?.forEach((node) => {
          observerRef.current?.unobserve(node);
        });
        observerRef.current.disconnect();
      }
      clearInterval(interval);
    };
  }, [isLoaded]); // Зависимость от состояния загрузки необходима, так как без нее ломается обсервер (из-за асинхронной загрузки картинок из Unsplash)

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
