"use client";

import { TechItem } from "@/components/TechItem";

export default function Home() {
  return (
    <section className="overflow-y-auto h-full scrollbar-gutter-auto scrollbar-thin scrollbar-color scrollbar-track-rose-950 scrollbar-thumb-rose-300">
      <h2>Hi, I&apos;m Nathan, a software developer from Plymouth 👋</h2>
      <p className="mt-2 bt-2">
        I started as an apprentice in 2022 where I participated in a 13 week
        bootcamp learning:
      </p>
      <div className="inline-flex gap-2 m-2 flex-wrap">
        <TechItem text="HTML" /> <TechItem text="CSS" />{" "}
        <TechItem text="JavaScript" /> <TechItem text="React" />{" "}
        <TechItem text="SQL" /> <TechItem text="JEST" />
      </div>
      <p className="mt-2 bt-2">
        After completion I joined the workplace working across multiple
        projects, picking up technologies such as:
      </p>
      <div>
        <span className="inline-flex gap-2 m-2 flex-wrap">
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
        level position.
      </p>
      <p className="mt-2 bt-2">
        While I am based in Plymouth, I am also open to relocating for
        hybrid/on-site roles as well as local and remote.
      </p>
      <section className="mt-3">
        <h2>Recommendations</h2>
        <div className="flex flex-col gap-2 mt-3">
          <em>
            Nathan combines the incredible ability of intuitive frontend
            development and speedy API creation. Ever the maintainer of high
            contribution standards, Nathan has progressed and improved at an
            accelerated rate. It&apos;s not just Nathan&apos;s technical skills
            that make him such a valued member of any team he joins, nor his
            capability to adapt and learn quickly, but the addition of great
            communication and fearlessness ensures that Nathan takes success
            with him wherever he goes. It was a pleasure to mentor and guide
            Nathan on his way to becoming the well rounded developer that he is
            today. All the best and good luck!
          </em>
          <a
            href="https://www.linkedin.com/in/benjamin-payne-hunt/"
            className="underline"
          >
            Ben Payne Hunt
          </a>
        </div>
        <div className="flex flex-col gap-2 mt-3">
          <em>
            I have had the pleasure of mentoring Nathan over the past few years,
            and I am consistently impressed by his progress and dedication.
            Starting as an apprentice, Nathan has developed into a highly
            capable software developer with a broad skill set that allows him to
            tackle most web-based development work with confidence. Nathan is
            particularly strong in frontend development, where his attention to
            detail and user-centric approach shine. However, he is also
            proficient across the full stack, making him a versatile and
            valuable team member. He regularly contributes innovative ideas to
            the design of applications, demonstrating a keen understanding of
            both the technical and user-experience aspects of development. In
            addition to his technical abilities, Nathan is an excellent team
            player. He collaborates effectively with colleagues, communicates
            clearly, and is always willing to assist others when needed. His
            positive attitude and willingness to learn make him a pleasure to
            work with. I have no doubt that Nathan will be a valuable asset to
            any team he joins. He has a bright future ahead of him, and I
            wholeheartedly recommend him.
          </em>
          <a
            href="https://www.linkedin.com/in/simon-robertson-9459a7292/"
            className="underline"
          >
            Simon Robertson
          </a>
        </div>
      </section>
    </section>
  );
}
