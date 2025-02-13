import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MainCard.module.scss';

interface MainCardProps {
  id: string;
  title: string;
  description: string;
  author: string;
  imageUrl: string;
  imageAlt: string;
  isUrban: boolean;
}

const MainCard: React.FC<MainCardProps> = ({
  id,
  title,
  description,
  author,
  imageUrl,
  imageAlt,
  isUrban
}) => {
  const avifSrc = `${imageUrl}.avif`;
  const jpegSrc = `${imageUrl}.jpg`;

  return (
    <section className={styles.section} id={id}>
      <Link className={styles.link} to={`/${id}`}>
        <div className={styles.cardContainer}>


          <picture className={styles.pictureContainer}>
            <source srcSet={avifSrc} type="image/avif" />
            <img className={styles.picture} src={jpegSrc} alt={imageAlt} />
          </picture>
          <div className={`${styles.text} ${isUrban ? styles.textUrban : styles.textNature}`}>
            <h2 className={styles.header}>{title}</h2>
            <div className={styles.quotation}>
              <p className={styles.quotationText}>{description}</p>
              <p className={styles.quotationAuthor}>— {author}</p>
            </div>
          </div>


        </div>
      </Link>
    </section>
  )
}

export default MainCard;
