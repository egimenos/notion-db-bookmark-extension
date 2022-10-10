import { useState } from "react";
import TagList from "./TagList";

const Form = ({ originalTitle, handleSaveBookmark }) => {
  console.log("props", originalTitle);
  const [title, setTitle] = useState(originalTitle);
  const [notes, setNotes] = useState("");
  const [tags, setTags] = useState([]);

  const handleTagInputEnter = (e) => {
    if (e.keyCode === 13) {
      setTags([...tags, e.target.value]);
      e.target.value = "";
    }
  };

  const handleSubmit = (e) => {
    console.log("onsubmit");
    handleSaveBookmark(title, notes, tags);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const handleRemoveTag = (_event, tagToDelete) => {
    const updatedTags = tags.filter((tag) => tag !== tagToDelete);
    setTags([...updatedTags]);
  };

  return (
    <div className="px-8 pt-6 mb-2 w-full">
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Title
        </label>
        <input
          onChange={handleTitleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300"
          type="text"
          placeholder="Great resource I want to save"
          value={title}
        ></input>
      </div>
      <div className="mb-4">
        <label
          htmlFor="notes"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Notes
        </label>
        <textarea
          onChange={handleNotesChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300"
          type="text"
          placeholder="Some notes I want to remember about the bookmark"
        ></textarea>
      </div>
      <div className="mb-2">
        <label
          htmlFor="tag"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Add tag
        </label>
        <input
          onKeyUp={handleTagInputEnter}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300"
          type="text"
          placeholder="Typescript"
        ></input>
        <div className="mt-2">
          <TagList handleRemoveTag={handleRemoveTag} tags={tags} />
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Save
      </button>
    </div>
  );
};

export default Form;
