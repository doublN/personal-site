import { ArticleLink } from "@/api/db";
import { Icon } from "../Icon/Icon";
import { TechItem } from "../TechItem";

type Props = {
  readonly text: string;
  readonly links: Array<ArticleLink> | null;
  readonly tech: Array<string>;
};

export function ArticleHeader(props: Props) {
  return (
    <div>
      <div className="flex flex-row gap-5 items-center mb-2">
        <h2 className="text-left mb-1">{props.text}</h2>
        {props.links
          ? props.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                <Icon name={link.icon} size="small" />
              </a>
            ))
          : null}
      </div>
      <div className="flex gap-4 flex-wrap">
        {props.tech.map((value) => (
          <TechItem key={value} text={value} />
        ))}
      </div>
    </div>
  );
}
