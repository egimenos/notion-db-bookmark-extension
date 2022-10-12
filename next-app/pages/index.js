import Form from "../components/Form/Form";
import useTabData from "../hooks/useTabData";
import { fetchTagList, saveBookmarkToNotion } from "../services/notion";
import { useState, useEffect } from "react";

const Main = () => {
  const [url, originalTitle] = useTabData();
  const [tagsInDB, setTagsInDB] = useState([]);

  useEffect(() => {
    fetchTagList().then((tags) => {
      console.log(tags);
      setTagsInDB([...tags]);
    });
  }, []);

  const handleSaveBookmark = ({ title, tags, notes }) => {
    const bookmark = { title, tags, url, notes };
    saveBookmarkToNotion(bookmark);
  };

  return (
    url && (
      <div className="w-96 p-2 flex flex-col">
        <h1 className="text-2xl text-center">Notion bookmarks</h1>
        <Form
          tagsInDB={tagsInDB}
          originalTitle={originalTitle}
          handleSaveBookmark={handleSaveBookmark}
        />
      </div>
    )
  );
};

export default Main;
