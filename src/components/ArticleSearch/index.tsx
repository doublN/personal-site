"use client";

import { useRouter } from "next/navigation";
import { Search } from "../Search";

export function ArticleSearch() {
  const router = useRouter();

  const articleSearchSubmit = (data: FormData) => {
    console.log(data.get("search") as string);
    router.push(`/search/${data.get("search") as string}`);
  };

  return (
    <Search
      label='Try searching a concept or technology! eg:"frontend" or "react"'
      action={articleSearchSubmit}
    />
  );
}
