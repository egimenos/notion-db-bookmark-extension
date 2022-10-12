const Autocomplete = ({ items, handleItemClick }) => {
  return (
    <div>
      {items.map((item) => (
        <div onClick={handleItemClick} key={item}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Autocomplete;
