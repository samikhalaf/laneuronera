import React from "react";

import Article from "../../shared/Article/Article";
import ArticleSelector from "../../shared/ArticleSelector/ArticleSelector";

export default function HomePage() {
  return (
    <div className="homepage-container">
      <ArticleSelector></ArticleSelector>
      <Article></Article>
    </div>
  );
}
