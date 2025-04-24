import Tags from './Tags';

interface IProps {
  title?: string;
  descriptions: string[];
  tags: string[];
}

export default function Project({ title, descriptions, tags }: IProps) {
  return (
    <div className="flex">
      {title && (
        <div className="flex-none pr-2">
          <p className="text-center w-24 underline underline-offset-4">
            {title}
          </p>
        </div>
      )}
      <div>
        <ul className="list-inside list-disc">
          {descriptions.map((description) => (
            <li key={description}>{description}</li>
          ))}
        </ul>
        {!!tags.length && <Tags tags={tags} />}
      </div>
    </div>
  );
}
