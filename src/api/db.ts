"use server";

import { createClient } from "@libsql/client";

export type Article = {
  id: string;
  header: string;
  paragraphs: {
    p: Array<string>;
  };
  tags: {
    t: Array<string>;
  };
  link: string | null;
};

const client = createClient({
  url: "file:db/personal.db",
});

export const getArticles = async () => {
  const results = await client.execute("SELECT * FROM articles");
  console.log(results.rows);
};
