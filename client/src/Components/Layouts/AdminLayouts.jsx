
import { NavLink, Outlet } from "react-router-dom";
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
                <NavLink to="/admin/users" activeClassName="active">
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts" activeClassName="active">
                  Contacts
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/adminservices" activeClassName="active">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/" activeClassName="active">
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
