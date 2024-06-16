import React, { useEffect , useState } from "react";
import { useAuth } from "../Context/auth";

const AdminContacts = () => {
  const[userData,setUserData] = useState([]);
  const {AuthorizationToken }= useAuth();
  console.log("working on contacts")
  
  const getAllUserContacts = async() =>{
    console.log(" getAllUserContacts working on contacts")
    
    try {
      
      const response = await fetch(`http://localhost:5000/api/admin/contacts`,{
        method: "GET",
        headers: {
          // Authorization:Auth,
          Authorization: AuthorizationToken,
        },
      });
      // console.log("from the response of the contact admin",response)

      const data = await response.json()
      if(response.ok){
       
        setUserData(data.contacts);
      }else{
        alert("something went wrong No response Found");
      }
    } catch (error) {
      // alert(error);
      console.log("this is error form ",error);
    }
    }


  useEffect(() =>{
    getAllUserContacts();
    // console.log("Effect is working");
  },[])

  const deleteContactById = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: AuthorizationToken,
          },
        });
      // console.log(`Response data user ${response}`);
      const data = await response.json();
      console.log(`users after delete ${data}`);
      if (response.ok) {
        setUserData(userData.filter((contact) => contact._id !== id));
        console.log("deleted successfull")
      } else {
        toast("Your have no Admin access");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // const handleDelete = () => {
  //   deleteContacts();
  // }


  
  return (
    <div className="AdminUser">
      <table className="Table">
        <thead>
        <tr className="THRow">
          <th className="Thead Tbody">userName</th>
          <th className="Thead Tbody">email</th>
          <th className="Thead Tbody">message</th>
          <th className="Thead Tbody">Delete</th>
        </tr>
        </thead>
        <tbody>
         {userData.map((currContact, index) => {
          const {username, email, message, _id} = currContact
          return (
            <tr className="THRow" key={index}> 
              <td className="Tbody" > {username}</td>
              <td className="Tbody">{email}</td>
              <td className="Tbody">{message}</td> 
              <td className="Tbody"><button onClick={() => deleteContactById(_id)}>Del</button></td>
             
            </tr>
          );
        })}
        </tbody>
      </table>
      {/* <Outlet/> */}
    </div>
  );
};

export default AdminContacts;
