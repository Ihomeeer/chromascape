import React from "react";
import styles from './ForestArticle.module.scss';

interface ForestArticleProps {
  text: string;
}

const ForestArticle: React.FC<ForestArticleProps> = ({text}) => {
  return (
    <p>
      {text}
    </p>
  )
}

export default ForestArticle;
