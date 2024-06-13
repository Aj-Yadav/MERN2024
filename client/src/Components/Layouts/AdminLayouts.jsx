
import { NavLink, Outlet } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import { FaHome } from "react-icons/fa";

import { GrServices } from "react-icons/gr";

import "./AdminLayouts.css"; // Import the CSS file for styling

const AdminLayout = () => {
  return (
    <>
      {/* <div className="Header"> 
            </div> */}
      <div className="AdminLayout">
        <div className="LeftSide">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users" className="active">
                <FaUsers />
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts" className="active">
                <IoIosContacts />
                  Contacts
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/adminservices" className="active">
                <GrServices />
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="active">
                <FaHome />
                  Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="RightSide">
          <Outlet />
        </div>
      </div>
      {/* <div className="Footer"> {/* Footer of your React component 
                {/* Your existing footer content 
            </div> */}
    </>
  );
};

export default AdminLayout;
