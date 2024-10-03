"use client";

import { Article, getArticles } from "@/api/db";
import { useEffect, useState } from "react";
import { Accordion } from "../Accordion";
import { TechItem } from "../TechItem";
import { Icon } from "../Icon/Icon";
import { useGetArticles } from "@/hooks/useGetArticles";

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

  const { articles, isLoading } = useGetArticles(props.tags);

  const render = () => {
    if (isLoading) {
      return <p className="text-center">...loading</p>;
    }

    if (isLoading === false && (articles === null || articles.length === 0)) {
      return (
        <p className="text-center">
          Oops! Cannot find anything ⚠ Try selecting an option or searching
          something else to get back on track 🚆
        </p>
      );
    }

    if (articles !== null) {
      return (
        <div className="flex flex-col gap-2">
          {articles.map((article) => (
            <Accordion
              key={article.header}
              header={
                <div>
                  <div className="flex flex-row gap-5 items-center mb-2">
                    <h2 className="text-left mb-1">{article.header}</h2>
                    {article.links
                      ? article.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            onClick={(event) => {
                              event.stopPropagation();
                            }}
                          >
                            <Icon name={link.icon} size="small" />
                          </a>
                        ))
                      : null}
                  </div>
                  <div className="flex gap-4">
                    {article.tech.map((value) => (
                      <TechItem key={value} text={value} />
                    ))}
                  </div>
                </div>
              }
            >
              {article.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mb-2 mt-2">
                  {paragraph}
                </p>
              ))}
            </Accordion>
          ))}
        </div>
      );
    }
  };

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
      {render()}
    </section>
  );
}
