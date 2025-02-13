import React from 'react';
import styles from './AppFooter.module.scss';

const AppFooter: React.FC = () => {
  return (
    <footer className={styles.section}>
    <p className={styles.text}>© 2025 Mikhail Kirichkov</p>
  </footer>
  )
}

export default AppFooter;
