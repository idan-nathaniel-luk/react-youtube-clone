import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MicIcon from "@mui/icons-material/Mic";
import "./styles.scss";
interface SearchbarProps {
  handleSearch: () => void;
}
const Searchbar: React.FC<SearchbarProps> = ({ handleSearch }) => {
  return (
    <div className="search__container">
      <ArrowBackIcon onClick={() => handleSearch()} className="arrow__icon" />
      <div className="search__bar">
        <input
          type="text"
          className="search__bar__input"
          placeholder="Search Youtube"
        />
        <SearchIcon className="search__icon" />
      </div>
      <MicIcon className="mic__icon" />
    </div>
  );
};

export default Searchbar;
