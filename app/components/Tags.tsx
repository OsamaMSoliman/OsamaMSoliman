interface IProps {
  tags: string[];
}

export default function Tags({ tags }: IProps) {
  return (
    <div className="flex gap-2 flex-wrap ml-4">
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </div>
  );
}

function Tag({ tag }: { tag: string }) {
  return (
    <div className="w-fit rounded-md px-1 shadow-sm text-blue-300">{tag}</div>
  );
  return <div className="w-fit rounded px-1 ring">{tag}</div>;
  return <div className="w-fit rounded-md px-1 inset-shadow-sm">{tag}</div>;
}
