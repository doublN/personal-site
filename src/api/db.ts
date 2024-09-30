"use server";

import { createClient } from "@libsql/client";

export type Article = {
  header: string;
  paragraphs: Array<string>;
  links: Array<{
    icon: string;
    url: string;
  }> | null;
  tech: Array<string>;
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

  const results = await client.execute(
    `SELECT header, paragraphs, links, tech FROM articles WHERE ${where} ORDER BY date DESC`
  );
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
