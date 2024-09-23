"use client";

import { Article, getArticles } from "@/api/db";
import { useEffect, useState } from "react";

type Props = {
  readonly tags: Array<string>;
};

export function ContentBlock(props: Props) {
  const [content, setContent] = useState<Array<Article> | null>(null);

  useEffect(() => {
    getArticles(props.tags).then((articles) => {
      setContent(articles);
    });
  }, [props.tags]);

  return (
    <main>
      {content === null ? (
        <p>...Loading</p>
      ) : (
        <div>
          {content.map((article) => (
            <div key={article.header}>
              <h1>{article.header}</h1>
              {article.paragraphs.p.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
