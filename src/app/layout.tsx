import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Icon } from "@/components/Icon/Icon";
import { ArticleSearch } from "@/components/ArticleSearch";

export const metadata: Metadata = {
  title: "Nathan Newberry",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-sans fadeIn">
      <body className="min-h-full flex justify-center items-center bg-gradient-to-br dark:from-rose-950 to dark:to-slate-950 from-rose-300 to-slate-400">
        <div className="sm:border-2 dark:border-white border-black lg:w-[75%] w-full sm:h-[45rem] flex flex-col sm:flex-row rounded-lg dark:bg-black/30 bg-white/40 shadow-lg">
          <div className="sm:w-1/3 border-b-2 sm:border-r-2 dark:border-white border-black p-4 md:overflow-y-auto scrollbar-thin scrollbar-color scrollbar-track-gray-200 scrollbar-thumb-slate-500 dark:scrollbar-track-rose-950 dark:scrollbar-thumb-rose-300">
            <Link href="/about-me">
              <h1 className="font-bold">Nathan Newberry</h1>
            </Link>
            <div className="flex flex-row items-center gap-4">
              <h2 className="font-semibold">Software Developer</h2>
              <a href="https://github.com/doublN" target="_blank">
                <Icon name="github" size="small" />
              </a>
            </div>
            <div className="mt-4">
              <ArticleSearch />
            </div>
            <nav className="mt-4 flex flex-row sm:flex-col gap-4 overflow-x-auto">
              <Link
                className="dark:hover:bg-rose-800 hover:bg-gray-200 pl-3 pt-2 pb-2 rounded-full text-nowrap sm:text-wrap"
                href="/about-me"
              >
                <h3>About Me 👋</h3>
              </Link>
              <Link
                href="/professional-projects"
                className="dark:hover:bg-rose-800 hover:bg-gray-200 pl-3 pt-2 pb-2 rounded-full text-nowrap sm:text-wrap"
              >
                <h3>Professional Projects 🐱‍💻</h3>
              </Link>
              <Link
                href="/personal-projects"
                className="dark:hover:bg-rose-800 hover:bg-gray-200 pl-3 pt-2 pb-2 rounded-full text-nowrap sm:text-wrap"
              >
                <h3>Personal Projects 💻</h3>
              </Link>
              <Link
                href="/front-end"
                className="dark:hover:bg-rose-800 hover:bg-gray-200 pl-3 pt-2 pb-2 rounded-full text-nowrap sm:text-wrap"
              >
                <h3>Front End Work 🖼</h3>
              </Link>
              <Link
                href="/back-end"
                className="dark:hover:bg-rose-800 hover:bg-gray-200 pl-3 pt-2 pb-2 rounded-full text-nowrap sm:text-wrap"
              >
                <h3>Back End Work 📊</h3>
              </Link>
            </nav>
          </div>
          <main className="w-screen sm:w-2/3 p-4 h-full overflow-auto scrollbar-thin scrollbar-color scrollbar-track-gray-200 scrollbar-thumb-slate-500 dark:scrollbar-track-rose-950 dark:scrollbar-thumb-rose-300">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
