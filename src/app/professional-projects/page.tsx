import { ContentBlock } from "@/components/ContentBlock";

export default function Page() {
  return (
    <section>
      <h1 className="mb-2">Professional Projects</h1>
      <ContentBlock tags={["professional"]} />
    </section>
  );
}
