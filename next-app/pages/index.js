import Form from "../components/Form/Form";
import useTabData from "../hooks/useTabData";

const Main = () => {
  const [url, originalTitle] = useTabData();

  const handleSaveBookmark = (title, tags) => {
    console.log(title, tags, url, originalTitle);
  };

  return (
    <div className="w-96 p-2 flex flex-col">
      <h1 className="text-2xl text-center mb-2">Notion bookmarks</h1>
      <Form
        originalTitle={originalTitle}
        handleSaveBookmark={handleSaveBookmark}
      />
    </div>
  );
};

export default Main;
