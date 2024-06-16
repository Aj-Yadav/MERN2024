import React, { useEffect , useState } from "react";
import { useAuth } from "../Context/auth";

const AdminContacts = () => {
  const[userData,setUserData] = useState([]);
  const {AuthorizationToken }= useAuth();

  const getAllContacts = async() =>{
    try {
      
      const response = await fetch(`http://localhost:5000/api/admin/contacts`,{
        method:"get",
        headers:{
          Authorization: AuthorizationToken,
        },
      });
      const data = await response.json()
      console.log("data from contacts",data)
      if(response.ok){
        console.log("from the response of the contact admin",response)
        console.log("from the response of the contact admin",data)
        console.log("from the response of the contact admin",data.contacts)
        setUserData(data.contacts);
        console.log(userData)
      }else{
        alert("something went wrong");
      }
    } catch (error) {
      // alert(error);
      console.log("this is error form ",error);
    }
    }


  useEffect(() =>{
    getAllContacts()
  },[])
  return (
    <div className="AdminUser">
      <table className="Table">
        <thead>
        <tr className="THRow">
          <th className="Thead Tbody">userName</th>
          <th className="Thead Tbody">email</th>
          <th className="Thead Tbody">message</th>
        </tr>
        </thead>
        <tbody>
         {userData.map((mes, index) => {
          return (
            <tr className="THRow" key={index}> 
              <td className="Tbody" > {mes.username}</td>
              <td className="Tbody">{mes.email}</td>
              <td className="Tbody">{mes.message}</td> 
             
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
