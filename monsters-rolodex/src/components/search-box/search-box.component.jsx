import "./search-box.styles.css";

const SearchBox = ({ className, placeholder, onchangehandler }) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onchangehandler}
    />
  );
};

export default SearchBox;
