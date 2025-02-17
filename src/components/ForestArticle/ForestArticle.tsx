import React from "react";
import styles from './ForestArticle.module.scss';

interface ForestArticleProps {
  text: string;
  title?: string;
  imageURL: string;
  imageAlt: string;
}

const ForestArticle: React.FC<ForestArticleProps> = ({
  text,
  title,
  imageURL,
  imageAlt,
}) => {
  const avifSrc = `${imageURL}.avif`;
  const jpegSrc = `${imageURL}.jpg`;
  return (
    <article className={styles.article}>
      {title && <h3 className={styles.title}>
        {title}
      </h3>}
      <p className={title ? styles.titledText : styles.text}>
        {text}
      </p>
      <picture className={styles.pictureContainer}>
        <source srcSet={avifSrc} type="image/avif" />
        <img className={styles.picture} src={jpegSrc} alt={imageAlt} />
      </picture>
    </article>
  )
}

export default ForestArticle;
