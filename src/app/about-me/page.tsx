"use client";

import { Article, getAbout } from "@/api/db";
import { useEffect, useState } from "react";

export default function Home() {
  const [content, setContent] = useState<Article | null>(null);

  useEffect(() => {
    getAbout().then((article) => {
      setContent(article);
    });
  }, []);

  return (
    <main>
      {content === null ? (
        <p>...Loading</p>
      ) : (
        <div>
          <h1>{content.header}</h1>
          {content.paragraphs.p.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}
    </main>
  );
}
