"use client";

import { TechItem } from "@/components/TechItem";

export default function Home() {
  return (
    <section className="overflow-y-auto h-full scrollbar-gutter-auto scrollbar-thin scrollbar-color scrollbar-track-rose-950 scrollbar-thumb-rose-300">
      <h2>Hi, I'm Nathan, a software developer from Plymouth 👋</h2>
      <p className="mt-2 bt-2">
        I started as an apprentice in 2022 where I participated in a 13 week
        bootcamp learning:
      </p>
      <div className="inline-flex gap-2 m-2">
        <TechItem text="HTML" /> <TechItem text="CSS" />{" "}
        <TechItem text="JavaScript" /> <TechItem text="React" />{" "}
        <TechItem text="SQL" /> <TechItem text="JEST" />
      </div>
      <p className="mt-2 bt-2">
        After completion I joined the workplace working across multiple
        projects, picking up technologies such as:
      </p>
      <div>
        <span className="inline-flex gap-2 m-2">
          <TechItem text="Redux" /> <TechItem text="MaterialUI" />{" "}
          <TechItem text="Cypress" /> <TechItem text="PHP" />{" "}
          <TechItem text="Laravel" /> <TechItem text="MongoDB" />
        </span>
      </div>
      <p className="mt-2 bt-2">
        Over time I have become confident working on front end and back end
        tasks, including taking ownership over full features and contributing to
        the planning and building of new projects.
      </p>
      <p className="mt-2 bt-2">
        Click an option in the navigation section or try searching a technology
        to see the projects I have worked on!
      </p>
      <p className="mt-2 bt-2">
        I am currently seeking new challenges and opportunities in a junior-mid
        level position 🐱‍💻.
      </p>
    </section>
  );
}
