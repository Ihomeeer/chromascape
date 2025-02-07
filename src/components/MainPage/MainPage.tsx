import React from 'react';
import styles from './MainPage.module.scss';

import AppHeader from '../AppHeader/AppHeader';

const MainPage: React.FC = () => {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>

      </main>
    </>

  )
}

export default MainPage;
