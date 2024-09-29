type Props = {
  readonly text: string;
};

export function TechItem(props: Props) {
  return (
    <div className="rounded-full p-[2px] bg-gradient-to-br from-red-400 to-blue-900">
      <div className="bg-gray-950 px-3 py-1 rounded-full">{props.text}</div>
    </div>
  );
}
