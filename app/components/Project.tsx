import Tags from './Tags';

interface IProps {
  title?: string;
  descriptions: string[];
  tags: string[];
}

export default function Project({ title, descriptions, tags }: IProps) {
  return (
    <div className="flex gap-2">
      {title && (
        <div className="flex-none border-r bg-amber-600">
          <p className="text-center">{title}</p>
        </div>
      )}
      <div>
        <ul className="list-inside list-disc">
          {descriptions.map((description) => (
            <li>{description}</li>
          ))}
        </ul>
        {!!tags.length && <Tags tags={tags} />}
      </div>
    </div>
  );
}
