import React, { useState } from 'react';
import loginImage from "../images/register.jpg";
import { useNavigate } from "react-router-dom"


export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your login logic here
    try {
      const responce = await fetch(`https://cautious-tuna-flip-flops.cyclic.app/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
      });

      if (responce.ok) {
        alert("login Successful");
        setUser(
          {
            email: "",
            password: ""
          }
        )
        navigate("/share");
      }
      else{
        alert("Invalid Credentials")
      }
      console.log(responce);

    } catch (error) {
      console.log("login" , error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex w-screen flex-col md:flex-row">
        <div className="w-screen md:w-2/5 p-6">
          <img
            src={loginImage}
            alt="Login"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="w-screen flex justify-center md:w-3/5 h-4/6 mt-[7%]">
          <div className='w-5/6 bg-white border-2 border-[#363768] p-6 rounded-md shadow-md'>
            <h2 className="text-2xl font-semibold mb-px text-center">Login Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-px">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-1.5 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                  value={user.email}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-px">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full p-1.5 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
