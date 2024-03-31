import "./styles.scss";
import LogoWhite from "../../assets/LogoWhite.svg";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import { useState } from "react";
import Searchbar from "./Searchbar";

interface TopBarProps {
  handleSearch: () => void;
}

const TopBar: React.FC<TopBarProps> = () => {
  const [isSearching, setIsSearching] = useState(false);
  const handleSearch = () => {
    setIsSearching(!isSearching);
  };

  return (
    <div className="top-bar-container">
      <div className="top-bar-top">
        <div className="logo-container">
          <img className="logo" src={LogoWhite} alt="Logo" />
        </div>
        <Searchbar
          className="search__container"
          isSearching={isSearching}
          handleSearch={handleSearch}
        />
        <div className="top-r">
          <SearchIcon className="search__icon" onClick={() => handleSearch()} />
          <div className="profile-icon"></div>
        </div>
      </div>
      <div className="top-bar-bottom">
        <ExploreIcon className="explore__icon" />
      </div>
    </div>
  );
};

export default TopBar;
