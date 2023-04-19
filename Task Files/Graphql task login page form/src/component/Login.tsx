import { useMutation } from "@apollo/client";
import { useState } from "react";
import { LOGIN_QUERY } from "../framework/graphql/LoginQuery/Login_Query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [createLogin, { data, loading,error }] = useMutation(LOGIN_QUERY);

  if (loading) return <p>Submitting...</p>;
    // if (error) return <p>Submission error!</p>;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      toast.error("Please enter a valid Email address and Password");
      return;
    }
 
    if (!email.includes("@")) {
      toast.error("Please enter a valid email address contains @ symbol");
      return;
    }
    createLogin({
      variables: { email: email, password: password },
    })
      .then((result) => {
        const data = result.data;
        navigate("/welcome");
        toast.success("Login Successful!");
        console.log(data);
        localStorage.setItem("token", data?.adminLogin?.data.access_token);
        localStorage.setItem(
          "lastName",
          data?.adminLogin?.data?.user?.last_name
        );
        localStorage.setItem(
          "firstName",
          data?.adminLogin?.data?.user?.first_name
        );
      })
      .catch((error) => {
        console.log(error);
        toast.error("Submission error! User Not Found");
      });
  };

  return (
    <div>
      <h1>User-Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <h2>Email</h2>
        </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="psw">
          <h2>Password</h2>
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">SIGN IN</button>
      </form>
      <ToastContainer />
      <h2>Email:- admin@brainvire.com & Password:- Admin@123</h2>
    </div>
  );
}

export default LoginPage;
