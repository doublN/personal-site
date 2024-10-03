import { Article, getArticles } from "@/api/db";
import { useEffect, useState } from "react";

export const useGetArticles = (tags: Array<string>) => {
  const [articles, setArticles] = useState<Array<Article> | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles(tags).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [tags]);

  return { articles, isLoading };
};
