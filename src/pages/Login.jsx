import React, { useState, useContext } from "react";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async () => {
    try {
      const { data } = await api.post("/auth/login", form);
      login(data);
      window.location.href = "/";
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="w-full border p-2 mb-3 rounded" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="w-full border p-2 mb-3 rounded" />
        <p className="text-sm text-center mb-3">Don't have an account? <a href="signup" className="text-blue-500 hover:underline">Sign up</a></p>
        <button onClick={handleLogin} className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600">Login</button>
        <p className="text-sm text-gray-600 text-center mt-3">{message}</p>
      </div>
    </div>
  );
};

export default Login;
