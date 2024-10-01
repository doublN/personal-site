import { ReactNode, useState } from "react";
import { Icon } from "../Icon/Icon";

type Props = {
  readonly header: ReactNode;
  readonly children: ReactNode | Array<ReactNode>;
};

export function Accordion(props: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleHeaderClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full p-3 rounded-md bg-gray-200 dark:bg-rose-950 transition-all">
      <button
        onClick={handleHeaderClick}
        className="w-full flex items-center justify-between "
      >
        {props.header}
        <div className={`${isOpen ? "rotate-180" : "rotate-0"} transition-all`}>
          <Icon name="downArrow" size="medium" />
        </div>
      </button>
      {
        <div
          className={`${
            isOpen ? "h-[350px] overflow-y-scroll" : "h-0"
          } overflow-hidden transition-all scrollbar-thin scrollbar-color scrollbar-track-gray-200 scrollbar-thumb-slate-500 dark:scrollbar-track-rose-950 dark:scrollbar-thumb-rose-300`}
        >
          {props.children}
        </div>
      }
    </div>
  );
}
