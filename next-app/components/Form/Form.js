import { useState } from "react";
import TagList from "./TagList";

const Form = ({ handleSaveBookmark }) => {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);

  const handleTagInputEnter = (e) => {
    if (e.keyCode === 13) {
      setTags([...tags, e.target.value]);
      e.target.value = "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSaveBookmark(title, tags);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Title
          </label>
          <input
            onChange={handleTitleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Great resource I want to save"
          ></input>
        </div>
        <div className="mb-4">
          <label
            htmlFor="tag"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Add tag
          </label>
          <input
            onKeyUp={handleTagInputEnter}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Typescript"
          ></input>
          <TagList tags={tags} />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Form;
