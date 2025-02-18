import React from "react";
import styles from './ForestArticle.module.scss';

interface ForestArticleProps {
  text: string;
  title?: string;
  imageURL: string;
  imageAlt: string;
  align: string;
}

const ForestArticle: React.FC<ForestArticleProps> = ({
  text,
  title,
  imageURL,
  imageAlt,
  align,
}) => {
  const avifSrc = `${imageURL}.avif`;
  const jpegSrc = `${imageURL}.jpg`;
  return (
    <article className={styles.article}>
      {title && <h3 className={styles.title}>
        {title}
      </h3>}
      <p className={`${styles.text} ${title ? styles.titledText : styles.untitledText} ${align == 'left' ? styles.leftAlign : styles.rightAlign}`}>
        {text}
      </p>
      <picture className={`${styles.pictureContainer} ${align == 'left' ? styles.rightAlign : styles.leftAlign}`}>
        <source srcSet={avifSrc} type="image/avif" />
        <img className={styles.picture} src={jpegSrc} alt={imageAlt} />
      </picture>
    </article>
  )
}

export default ForestArticle;
