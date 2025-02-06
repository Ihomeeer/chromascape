import React from 'react';
import styles from './AppHeader.module.scss';
import logoPath from '../../images/logo/logo_white.png';

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a className={styles.logoLink}>
          <img className={styles.logo} src={logoPath} alt="ChromaScape logo" />
        </a>
        <h1 className={styles.title}>ChromaScape: Визуализация идей</h1>
      </div>
    </header>
  )
}

export default AppHeader;
