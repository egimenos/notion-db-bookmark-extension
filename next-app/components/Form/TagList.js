const TagList = ({ tags }) => {
  return tags.map((tag, key) => <span key={key}>{tag}</span>);
};

export default TagList;
