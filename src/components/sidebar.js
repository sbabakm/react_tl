import React from "react";
import {Link} from "react-router-dom"
import getNavLinks from "../services/navLinks";
import UserInfo from "./userinfo";
class SideBar extends React.Component {
  render() {
    const navlinks = getNavLinks();
    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <UserInfo
            imgurl="https://via.placeholder.com/200x200"
            username="بابک میرحسینی"
            text="کارشناس شیرپوینت"
          />
         <hr className="shadow" />
          <ul className="nav flex-column ">
            {navlinks.map(navlink => (
              <li className="nav-item" key={navlink.id}>
                <Link className="nav-link" to={navlink.link}>
                  <span className={navlink.icon} />
                  <span className="m-2">{navlink.text}</span>
                  {navlink.count ? (
                    <span className="badge-danger badge-pill">
                      {navlink.count}
                    </span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}
export default SideBar;
