"use client";

import { FormEvent } from "react";
import { Icon } from "../Icon/Icon";

type Props = {
  readonly action: (formData: FormData) => void;
  readonly label: string;
};

export function Search(props: Props) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    props.action(new FormData(event.currentTarget));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <label htmlFor="search">{props.label}</label>
      <div className="flex flex-row w-full">
        <input
          id="search"
          type="search"
          name="search"
          className="text-black p-1 rounded-md w-full"
        ></input>
        <button className="text-black ml-[-40px] hover:bg-slate-200 rounded-full">
          <Icon name="search" size="small" />
        </button>
      </div>
    </form>
  );
}
