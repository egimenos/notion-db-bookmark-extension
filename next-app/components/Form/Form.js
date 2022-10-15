import { useRef } from "react";
import { useState } from "react";
import Autocomplete from "./Autocomplete";
import Loader from "./Loader";
import TagList from "./TagList";

const Form = ({ originalTitle, handleSaveBookmark, tagsInDB, status }) => {
  const [title, setTitle] = useState(originalTitle);
  const [notes, setNotes] = useState("");
  const [tags, setTags] = useState([]);
  const [suggestedTags, setSuggestedTags] = useState([]);

  const tagInputRef = useRef();

  const handleTagInputChange = (e) => {
    if (e.keyCode === 13) {
      setTags([...tags, e.target.value.trim()]);
      e.target.value = "";
    }

    const filteredTags = tagsInDB.filter(
      (tag) => e.target.value.length > 0 && tag.includes(e.target.value)
    );

    setSuggestedTags([...filteredTags]);
  };

  const handleItemClick = (_e, item) => {
    setTags([...tags, item]);
    tagInputRef.current.value = "";
    setSuggestedTags([]);
  };

  const handleSubmit = (e) => {
    handleSaveBookmark({ title, notes, tags });
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
    <div className="px-8 pt-4 mb-2 w-full">
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
          placeholder="Some notes I want to remember about the bookmark"
          value={notes}
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
          onKeyUp={handleTagInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300"
          type="text"
          placeholder="Typescript"
          ref={tagInputRef}
        ></input>
        {suggestedTags.length > 0 && (
          <Autocomplete
            items={suggestedTags}
            handleItemClick={handleItemClick}
          />
        )}
        <div className="mt-2">
          <TagList handleRemoveTag={handleRemoveTag} tags={tags} />
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        {status === "pending" ? <Loader /> : "Save"}
      </button>
    </div>
  );
};

export default Form;
