import "./topbar.css";
import {
  Search as SearchIcon,
  Person as PersonIcon,
  Chat as ChatIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Facebook Replica</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon />
          <input
            placeholder="Search Facebook Replica"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLink">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem ">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem ">
            <ChatIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem ">
            <NotificationsIcon />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <img
          src="/assets/person/1.jpeg"
          alt=""
          className="topbarImg"
        />
      </div>
    </div>
  );
}
