import React from 'react';
import styles from './AppHeader.module.scss';
import logoPath from '../../images/logo/logo_white.png';

const AppHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a className={styles.logoLink}>
          <img className={styles.logo} src={logoPath} alt="ChromaScape logo" />
        </a>
        <p className={styles.title}>ChromaScape: Визуализация идей</p>
      </div>
    </header>
  )
}

export default AppHeader;
