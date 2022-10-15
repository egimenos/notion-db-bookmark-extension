import Form from "../components/Form/Form";
import useTabData from "../hooks/useTabData";
import { fetchTagList, saveBookmarkToNotion } from "../services/notion";
import useAsync from "../hooks/useAsync";

const Main = () => {
  // const [url, originalTitle] = useTabData();

  const [url, originalTitle] = ["test", "test"];

  const fetchTagListOperation = useAsync(fetchTagList, true);
  const saveBookmarkOperation = useAsync(saveBookmarkToNotion, false);

  const handleSaveBookmark = ({ title, tags, notes }) => {
    const bookmark = { title, tags, url, notes };
    saveBookmarkOperation.execute(bookmark);
  };

  return (
    url && (
      <div className="w-96 p-2 flex flex-col">
        <div>{JSON.stringify(fetchTagListOperation)}</div>
        <div>{JSON.stringify(saveBookmarkOperation)}</div>
        <h1 className="text-2xl text-center">Notion bookmarks</h1>
        <Form
          status={saveBookmarkOperation.status}
          tagsInDB={fetchTagListOperation.data}
          originalTitle={originalTitle}
          handleSaveBookmark={handleSaveBookmark}
        />
      </div>
    )
  );
};

export default Main;
