import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../Context/auth";
import { toast } from "react-toastify";

const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });
  // const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  console.log("params single user: ", params);
  const { AuthorizationToken, API } = useAuth();

  //   get single user data
  const getSingleUserData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`, {
        method:"GET",
                headers:{
                    Authorization:AuthorizationToken
                },
      });
      if(response.ok){
        // console.log("response is ok");
        const user = await response.json();
        console.log(`User data: ${JSON.stringify(user, null, 2)}`);
        // console.log(user.data.username);
        setData(user.data);
        // if(response.ok){
          //   const user = await response.json();
          //   // console.log(userdata.username)
          //   setData(user);
          
          // alert(data)
          
          // setIsLoading(false); 
        }else{
            console.log("error fetch user data");
          }
          
          // if (response.ok) {
          //     getSingleUserData();
          //   }
            } catch (error) {
              console.log(error);
              }
              };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  // to udpate the data dynamically
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${API}/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: AuthorizationToken,
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        toast.success("Updated successfully");
      } else {
        toast.error("Not Updated ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // if (isLoading) {
  //   return <div>Loading...</div>;  // Show loading indicator while data is being fetched
  // }

  return (
    <section className="section-contact">
      <div className="contact-content container">
        <h1 className="main-heading">Update User Data</h1>
      </div>
      {/* contact page main  */}
      <div className="container grid grid-two-cols">
        {/* contact form content actual  */}
        <section className="section-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">username</label>
              <input type="text" name="username" id="username" autoComplete="off" value={data.username} onChange={handleInput} required
              />
            </div>
            <div>
              <label htmlFor="email">email</label>
              <input type="email" name="email" id="email" autoComplete="off" value={data.email} onChange={handleInput} required
              />
            </div>
            <div>
              <label htmlFor="phone">Mobile</label>
              <input type="phone" name="phone" id="phone" autoComplete="off" value={data.phone} onChange={handleInput} required
              />
            </div>
            <div>
              <button type="submit">Update</button>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};

export default AdminUpdate;
