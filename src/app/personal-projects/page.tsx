import { ContentBlock } from "@/components/ContentBlock";

export default function Page() {
  return (
    <section>
      <h1 className="mb-2">Personal Projects</h1>
      <ContentBlock tags={["personal"]} />
    </section>
  );
}
