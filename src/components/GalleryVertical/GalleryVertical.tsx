import React from "react";
import styles from './GalleryVertical.module.scss';
import { v4 as uuidv4 } from 'uuid';


interface image {
  imageUrl: string;
  imageAlt: string;
}

interface GalleryVerticalProps {
  forestGallery: image[];
}

const GalleryVertical: React.FC<GalleryVerticalProps> = ({
  forestGallery,
}) => {
  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        {forestGallery.map((data) => {

          const avifSrc = `${data.imageUrl}.avif`;
          const jpegSrc = `${data.imageUrl}.jpg`;
          const uniqueId = uuidv4();

          return (

            <li key={uniqueId} className={`${styles.listItem} ${styles.fadeIn}`}>

              <picture className={styles.pictureContainer}>
                <source srcSet={avifSrc} type="image/avif" />
                <img className={styles.picture} src={jpegSrc} alt={data.imageAlt} loading="lazy" />
              </picture>
            </li>

          )
        }
        )}
      </ul>
    </section>
  )
}

export default GalleryVertical;
