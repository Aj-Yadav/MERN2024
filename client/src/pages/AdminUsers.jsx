import { useState, useEffect } from "react";
import { useAuth } from "../Context/auth";
import "./AdminUsers.css";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const AdminUsers = ({ currUser }) => {
  const [users, setUsers] = useState([]);
  const { AuthorizationToken,API } = useAuth();

  
  }
  const getAllContactsData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/users`, {
        method: "GET",
        headers: {
          // Authorization:Auth,
          Authorization: AuthorizationToken,
        },
      });
      console.log(`Response data user ${response}`);
      const data = await response.json();
      console.log(`users ${data}`);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllContactsData();
  }, [getAllContactsData]);
  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/delete/${id}`,
        {
          method: "Delete",
          headers: {
            Authorization: AuthorizationToken,
          },
        });
      console.log(`Response data user ${response}`);
      const data = await response.json();
      console.log(`users after delete ${data}`);
      if (response.ok) {
        getAllContactsData();
      } else {
        toast("Your have no Admin access");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="AdminUser">
      <table className="Table">
        <tr className="THRow">
          <th className="Thead Tbody">userName</th>
          <th className="Thead Tbody">email</th>
          <th className="Thead Tbody">phoneNumber</th>
          <th className="Thead Tbody">Edit</th>
          <th className="Thead Tbody">Del</th>
        </tr>
        {users.map((currUser, index) => {
          return (
            <tr className="THRow">
              {/* <td className="Tbody" key={index}>{currUser._id}</td> */}
              <td className="Tbody" key={index}>
                {currUser.username}
              </td>
              <td className="Tbody">{currUser.email}</td>
              <td className="Tbody">{currUser.phone}</td>
              <td className="Tbody">
                <Link to={`/admin/users/${currUser._id}/edit`}>Edit</Link>
              </td>
              <td className="Tbody">
                <button onClick={() => deleteUser(currUser._id)}>Del</button>
              </td>
            </tr>
          );
        })}
      </table>
      {/* <Outlet/> */}
    </div>
  );
};
export default AdminUsers;
