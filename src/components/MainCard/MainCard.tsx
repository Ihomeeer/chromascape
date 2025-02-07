import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MainCard.module.scss';

interface MainCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const MainCard: React.FC<MainCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  imageAlt
}) => {
  return (
    <section className={styles.section} id={id}>
      <Link to={`/${id}`}>
        <div>
          <img src={imageUrl} alt={imageAlt} />
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </Link>
    </section>
  )
}

export default MainCard;
