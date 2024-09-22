"use server";

import { createClient } from "@libsql/client";

export type Article = {
  id: string;
  header: string;
  paragraphs: {
    p: Array<string>;
  };
  tags: Array<string>;
  link: {
    icon: string;
    url: string;
  } | null;
};

const client = createClient(
  process.env.NODE_ENV === "development"
    ? {
        url: process.env.DB_CONNECTION ?? "",
      }
    : { url: "" }
);

export const getArticles = async (
  tags: Array<string>
): Promise<Array<Article>> => {
  const where = tags.map((tag, index) => {
    if (index === 0) {
      return `tags LIKE '%${tag}%' `;
    } else {
      return `OR tags LIKE '%${tag}%' `;
    }
  });

  const results = await client.execute(`SELECT * FROM articles WHERE ${where}`);
  const rows = results.rows;

  return rows.map((row): Article => {
    const entry: Article = <Article>{};

    entry.id = row.id as string;
    entry.header = row.header as string;
    entry.paragraphs = JSON.parse(row.paragraphs as string);
    entry.tags = typeof row.tags === "string" ? row.tags.split(" ") : [""];
    entry.link = JSON.parse(row.link as string);

    return entry;
  });
};

export const getAbout = async (): Promise<Article> => {
  const article = await getArticles(["about"]);

  return article[0];
};
