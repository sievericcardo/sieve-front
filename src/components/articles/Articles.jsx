import React, { useState } from 'react';

import ListArticles from './ListArticles';

const Articles = () => {
  const [article, setArticle] = useState({
    name: "",
    body: "",
  });

  return (
    <div>
      <ListArticles article={article} setArticle={setArticle} />
    </div>
  );
};

export default Articles;
