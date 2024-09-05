import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

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
    <html lang="en" className="font-sans">
      <body className="min-h-full flex justify-center items-center bg-gradient-to-br from-rose-950 to to-slate-950">
        <div className="border-2 max-w-3xl w-full min-h-[45rem] flex flex-row rounded-lg dark:bg-black/30 bg-white/40 p-4">
          <div className="w-1/3 border-r-2 pr-3">
            <Link href="/about-me">
              <h1 className="font-bold">Nathan Newberry</h1>
            </Link>
            <h2>Software Developer</h2>
            <ul className="mt-4">
              <li>
                <Link href="/about-me">
                  <h3>About Me</h3>
                </Link>
              </li>
              <li className="pt-3">
                <Link href="/about-me">
                  <h3>Professional Projects</h3>
                </Link>
              </li>
              <li className="pt-3">
                <Link href="/about-me">
                  <h3>Personal Projects</h3>
                </Link>
              </li>
              <li className="pt-3">
                <Link href="/about-me">
                  <h3>Front End Work</h3>
                </Link>
              </li>
              <li className="pt-3">
                <Link href="/about-me">
                  <h3>Back End Work</h3>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-2/3 pl-3">{children}</div>
        </div>
      </body>
    </html>
  );
}
