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
      {isOpen && <div>{props.children}</div>}
    </div>
  );
}
