import LogoDark from "../../../../../assets/LogoDark.svg";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./styles.scss";
interface TopBarProps {
  sidebarWidth: number;
  updateSidebarWidth: () => void;
  updateNotificationState: () => void;
  handleSettings: () => void;
  notificationState: boolean;
  isSearching: boolean;
}
const DesktopLayout: React.FC<TopBarProps> = ({
  updateSidebarWidth,
  notificationState,
  updateNotificationState,
  handleSettings,
}) => {
  return (
    <div className="top-bar-container">
      <div className="top-bar-top">
        <div className="top-l">
          <MenuIcon
            className="menu__icon"
            onClick={() => updateSidebarWidth()}
            style={{ color: "white" }}
          />
          <div className="logo-container">
            <img className="logo" src={LogoDark} alt="Logo" />
          </div>
        </div>
        <div className="top__middle">
          <input className="desktop__searchbar" type="text" />
          <div className="icon__container">
            <SearchIcon
              className="search__icon"
              style={{ color: "white", fontFamily: "Roboto" }}
              fontSize="medium"
            />
          </div>
        </div>
        <div className="top-r">
          <VideoCallIcon
            className="create__video__icon"
            style={{ color: "white" }}
          />
          {!notificationState ? (
            <NotificationsNoneIcon
              style={{ color: "white" }}
              className="notifications__icon"
              onClick={() => updateNotificationState()}
            />
          ) : (
            <NotificationsIcon
              style={{ color: "white" }}
              className="notifications__icon"
              onClick={() => updateNotificationState()}
            />
          )}
          <div className="profile-icon" onClick={() => handleSettings()}></div>
        </div>
      </div>
    </div>
  );
};

export default DesktopLayout;
