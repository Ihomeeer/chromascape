import React, { useEffect, useState } from "react";
import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
  height?: string;
  color?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ height = '404px', color = 'rgba(223, 223, 223, 0.8)' }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={styles.progressBar}
      style={{ width: `${scrollProgress}%`, height, backgroundColor: color }}
    />
  );
};

export default ProgressBar;
