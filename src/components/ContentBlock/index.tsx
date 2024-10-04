"use client";

import { Accordion } from "../Accordion";
import { useGetArticles } from "@/hooks/useGetArticles";
import { ArticleHeader } from "../ArticleHeader";

type Props = {
  readonly tags: Array<string>;
};

export function ContentBlock(props: Props) {
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
                <ArticleHeader
                  text={article.header}
                  links={article.links}
                  tech={article.tech}
                />
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
