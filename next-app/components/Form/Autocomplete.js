const Autocomplete = ({ items, handleItemClick }) => {
  return (
    <div
      className="shadow
      appearance-none
      border
      rounded
      w-full
      py-2
      px-3
      text-gray-700
      leading-tight
      focus:outline-none
      focus:shadow-outline
      focus:border-blue-300"
    >
      {items.map((item) => (
        <div
          className="cursor-pointer hover:bg-blue-200 mb-1"
          onClick={(e) => handleItemClick(e, item)}
          key={item}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Autocomplete;
