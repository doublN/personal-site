import { ContentBlock } from "@/components/ContentBlock";

export default function Page() {
  return (
    <section>
      <h1 className="mb-2">Back End Projects</h1>
      <ContentBlock tags={["backend"]} />
    </section>
  );
}
