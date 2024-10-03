import { ContentBlock } from "@/components/ContentBlock";

type Props = {
  readonly params: {
    searchTerm: string;
  };
};

export default function Page(props: Props) {
  return <ContentBlock tags={[props.params.searchTerm]} />;
}
