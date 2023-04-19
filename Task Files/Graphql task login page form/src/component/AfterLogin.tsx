import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Welcome() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const first_name = localStorage.getItem("firstName");
  const last_name = localStorage.getItem("lastName");

    if (!token) {
      window.location.replace("/");
      alert("Pls Login First")
    }

  
  const logoutHandler = () => {
    navigate("/"); //---back to loginpage
    toast.warning("Logout successful!");
    localStorage.removeItem("token");
  };

  return (
    <>
      <div>
        <h1>Dash-Board-Page</h1>
        <h2>Welcome user</h2>
        <h3>First Name :- {first_name}</h3>
        <h3>Last Name :- {last_name}</h3>
        <button onClick={logoutHandler}>Logout</button>
      </div>
      <ToastContainer />
    </>
  );
}

export default Welcome;

//   import { useNavigate } from "react-router-dom";
// const DashBord = () => {
//   const navigate = useNavigate();
//   const tokenData = localStorage.getItem("token");
//   const firstName = localStorage.getItem("name");
//   const lastName = localStorage.getItem("last");
//   const logoutHandler = () => {
//     navigate("/dashboard");
//     localStorage.removeItem("token");
//     localStorage.clear();
//   };
//   if (!tokenData) {
//     window.location.replace("/");
//   }

//   return (
//     <>
//       <h1>Welcome</h1>
//       <p>First Name :{firstName}</p>
//       <p>Last Name :{lastName}</p>
//       <button onClick={logoutHandler}>Logout</button>
//     </>
//   );
// };
// export default DashBord;
