import React from 'react';
import styles from './AppHeader.module.scss';
import logoPath from '../../images/logo/logo_white.png';
import { Link } from 'react-router-dom';

const AppHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.logoLink} to="/">
          <img className={styles.logo} src={logoPath} alt="ChromaScape logo"  />
        </Link>
        <p className={styles.title}>ChromaScape: Визуализация идей</p>
      </div>
    </header>
  )
}

export default AppHeader;
