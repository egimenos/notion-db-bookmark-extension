import Form from "../components/Form/Form";
import useTabData from "../hooks/useTabData";
import { saveBookmarkToNotion } from "../services/notion";

const Main = () => {
  const [url, originalTitle] = useTabData();

  const handleSaveBookmark = (title, tags, notes) => {
    console.log(title, tags, url, notes);
    const bookmark = { title, tags, url, notes };
    saveBookmarkToNotion(bookmark);
  };

  return (
    url && (
      <div className="w-96 p-2 flex flex-col">
        <h1 className="text-2xl text-center mb-2">Notion bookmarks</h1>
        <Form
          originalTitle={originalTitle}
          handleSaveBookmark={handleSaveBookmark}
        />
      </div>
    )
  );
};

export default Main;
