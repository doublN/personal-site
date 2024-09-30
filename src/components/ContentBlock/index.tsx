"use client";

import { Article, getArticles } from "@/api/db";
import { useEffect, useState } from "react";
import { Accordion } from "../Accordion";
import { TechItem } from "../TechItem";

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
        <div className="flex flex-col gap-2">
          {content.map((article) => (
            <Accordion
              key={article.header}
              header={
                <div>
                  <h2 className="text-left mb-1">{article.header}</h2>
                  <div className="flex gap-4">
                    {article.tech.map((value) => (
                      <TechItem key={value} text={value} />
                    ))}
                  </div>
                </div>
              }
            >
              {article.paragraphs.p.map((paragraph) => (
                <p key={paragraph} className="mb-2 mt-2">
                  {paragraph}
                </p>
              ))}
            </Accordion>
          ))}
        </div>
      )}
    </section>
  );
}
