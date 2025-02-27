"use server";

import { createClient } from "@libsql/client";

export type Article = {
  header: string;
  paragraphs: Array<string>;
  links: Array<ArticleLink> | null;
  tech: Array<string>;
};

export type ArticleLink = {
  icon: "github" | "link";
  url: string;
};

const client = createClient(
  process.env.NODE_ENV === "development"
    ? {
        url: process.env.DB_CONNECTION ?? "",
      }
    : {
        url: process.env.TURSO_DATABASE_URL ?? "",
        authToken: process.env.TURSO_AUTH_TOKEN,
      }
);

export const getArticles = async (
  tags: Array<string>
): Promise<Array<Article>> => {
  const where = tags
    .map((tag, index) => {
      if (index === 0) {
        return `tags LIKE '%'||?||'%' `;
      } else {
        return `OR tags LIKE '%'||?||'%' `;
      }
    })
    .join("");

  const results = await client.execute({
    sql: `SELECT header, paragraphs, links, tech FROM articles WHERE ${where} ORDER BY date DESC`,
    args: tags,
  });

  const rows = results.rows;

  return rows.map((row): Article => {
    const entry: Article = <Article>{};

    entry.header = row.header as string;
    entry.paragraphs = JSON.parse(row.paragraphs as string).p;

    if (row.links === null) {
      entry.links = null;
    } else {
      entry.links = JSON.parse(row.links as string).l;
    }

    if (typeof row.tech === "string") {
      entry.tech = row.tech.split(" ");
    }

    return entry;
  });
};
