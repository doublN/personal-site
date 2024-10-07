import { FunctionComponent } from "react";
import { DownArrow } from "./svg/DownArrow";
import { GitHub } from "./svg/Github";
import { LinkChain } from "./svg/LinkChain";
import { Search } from "./svg/search";
import { LinkedIn } from "./svg/LinkedIn";

export type IconName = "downArrow" | "github" | "link" | "search" | "linkedIn";

export type IconSize = "small" | "medium" | "large";

type Props = {
  readonly name: IconName;
  readonly size: IconSize;
};

const icons = new Map<IconName, FunctionComponent>([
  ["downArrow", DownArrow],
  ["github", GitHub],
  ["link", LinkChain],
  ["search", Search],
  ["linkedIn", LinkedIn],
]);

export function Icon(props: Props) {
  const IconComponent = icons.get(props.name) ?? DownArrow;

  const classes = {
    small: "w-[32px] [&svg]:w-[24px] [&svg]:h-[24px]",
    medium: "w-[48px] [&svg]:w-[32px] [&svg]:h-[32px]",
    large: "w-[64px] [&svg]:w-[56px] [&svg]:h-[56px]",
  }[props.size];

  return (
    <div className={classes}>
      <IconComponent />
    </div>
  );
}
