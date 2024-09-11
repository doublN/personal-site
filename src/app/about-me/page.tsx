"use client";

import { getArticles } from "@/api/db";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <main>
      <h1>About Me</h1>
      <p>Content</p>
    </main>
  );
}
