import Form from "../components/Form/Form";

const Main = () => {
  const handleSaveBookmark = (title, tags) => {
    console.log(title, tags);
  };
  return (
    <div className="w-96 p-2 flex flex-col">
      <h1 className="text-2xl text-center mb-2">Notion bookmarks</h1>
      <Form handleSaveBookmark={handleSaveBookmark} />
    </div>
  );
};

export default Main;
