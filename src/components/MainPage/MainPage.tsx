import React from 'react';
import styles from './MainPage.module.scss';
import { cardsData } from '../../utils/cards.ts';
import MainCard from '../MainCard/MainCard.tsx';
import AppHeader from '../AppHeader/AppHeader';

const MainPage: React.FC = () => {
  return (
    <>
      <AppHeader />
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
                />
              </li>

            )
          }
          )}
        </ul>
      </main>
    </>

  )
}

export default MainPage;
