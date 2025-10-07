import "./SearchBar.css";

function SearchBar({searchTerm, onSearchChange}) {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search todos..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="search-input"
            />
        </div>
    );
}

export default SearchBar;