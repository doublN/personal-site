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
    <section
      className="
      overflow-y-auto
      h-full
      scrollbar-gutter-auto
      scrollbar-thin
      scrollbar-color
      scrollbar-track-rose-950
      scrollbar-thumb-rose-300"
    >
      {content === null ? (
        <p>...Loading</p>
      ) : (
        <div>
          {content.map((article) => (
            <div key={article.header}>
              <h1>{article.header}</h1>
              {article.paragraphs.p.map((paragraph) => (
                <p key={paragraph} className="mb-2 mt-2">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
