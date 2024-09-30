import { ReactNode, useState } from "react";

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
    <div className="w-full p-3 rounded-md bg-rose-950 transition-all">
      <button
        onClick={handleHeaderClick}
        className="w-full flex items-center justify-between "
      >
        {props.header}
        <div>{isOpen ? "^" : "v"}</div>
      </button>
      {
        <div
          className={`${
            isOpen ? "h-[350px] overflow-y-auto" : "h-0"
          } overflow-hidden transition-all scrollbar-thin scrollbar-color scrollbar-track-rose-950 scrollbar-thumb-rose-300`}
        >
          {props.children}
        </div>
      }
    </div>
  );
}
