const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or phone..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
