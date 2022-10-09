import Tag from "./Tag";

const TagList = ({ tags, handleRemoveTag }) => {
  return (
    <div className="flex flex-row flex-wrap justify-start gap-1">
      {tags.map((tag, key) => (
        <Tag handleRemoveTag={handleRemoveTag} tag={tag} key={key} />
      ))}
    </div>
  );
};

export default TagList;
