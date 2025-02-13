import React, { useState } from 'react';
import styles from './MainPage.module.scss';
import { cardsData } from '../../utils/cards.ts';
import MainCard from '../MainCard/MainCard.tsx';
import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter.tsx';

const MainPage: React.FC = () => {

  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  return (
    <>
      <AppHeader />
      <div className={`${styles.overlay} ${hoveredCardId ? styles.visible : ''}`} />
      <main className={styles.main}>
        <ul className={styles.list}>
          {cardsData.map((data) => {
            return (
              <li>
                <MainCard
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  description={data.description}
                  author={data.author}
                  imageUrl={data.imageUrl}
                  imageAlt={data.imageAlt}
                  isUrban={data.isUrban}
                  hoveredCardId={hoveredCardId}
                  onMouseEnter={() => setHoveredCardId(data.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                />
              </li>

            )
          }
          )}
        </ul>
      </main>
      <AppFooter />
    </>

  )
}

export default MainPage;
