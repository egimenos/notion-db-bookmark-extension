import Form from "../components/Form/Form";
import useTabData from "../hooks/useTabData";
import {
  fetchTagList,
  isAlreadySaved,
  saveBookmarkToNotion,
} from "../services/notion";
import useAsync from "../hooks/useAsync";
import Alert from "../components/Alert";
import { useEffect } from "react";

const Main = () => {
  const [url, originalTitle] = useTabData();

  const fetchTagListOperation = useAsync(fetchTagList, true);
  const saveBookmarkOperation = useAsync(saveBookmarkToNotion, false);
  const isAlreadyInDB = useAsync(isAlreadySaved, false);

  useEffect(() => {
    isAlreadyInDB.execute(url);
  }, [url]);

  const handleSaveBookmark = ({ title, tags, notes }) => {
    const bookmark = { title, tags, url, notes };
    saveBookmarkOperation.execute(bookmark);
  };

  return (
    <div className="w-96 p-2 flex flex-col">
      <h1 className="text-2xl text-center">Notion bookmarks</h1>
      {isAlreadyInDB.data && (
        <Alert
          title="Info"
          message="This URL is already saved in the database"
          type="info"
        />
      )}
      {saveBookmarkOperation.status === "success" ? (
        <Alert
          title="Success!"
          message="Bookmark successfully saved"
          type="success"
        />
      ) : null}
      {saveBookmarkOperation.status === "error" ? (
        <Alert
          title="Oops!"
          message="Error, couldn't save the bookmark"
          type="error"
        />
      ) : null}
      {url && (
        <Form
          status={saveBookmarkOperation.status}
          tagsInDB={fetchTagListOperation.data}
          originalTitle={originalTitle}
          handleSaveBookmark={handleSaveBookmark}
        />
      )}
    </div>
  );
};

export default Main;
