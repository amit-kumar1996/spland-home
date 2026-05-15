import React, { useState } from "react";
import api from "../services/api";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    otp: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const sendOtp = async () => {
    try {
      await api.post("/auth/send-otp", { email: form.email });
      setMessage("OTP sent to your email.");
      setStep(2);
    } catch (err) {
      setMessage(err.response?.data?.message || "Failed to send OTP.");
    }
  };

  const verifyOtp = async () => {
    try {
      await api.post("/auth/verify-otp", { email: form.email, otp: form.otp });
      await api.post("/auth/signup", form);
      setMessage("Signup successful! You can now login.");
    } catch (err) {
      setMessage(err.response?.data?.message || "Verification failed.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        {step === 1 && (
          <>
            <input name="firstName" placeholder="First Name" onChange={handleChange} className="w-full border p-2 mb-3 rounded" />
            <input name="lastName" placeholder="Last Name" onChange={handleChange} className="w-full border p-2 mb-3 rounded" />
            <input name="email" placeholder="Email" type="email" onChange={handleChange} className="w-full border p-2 mb-3 rounded" />
            <input name="mobile" placeholder="Mobile" onChange={handleChange} className="w-full border p-2 mb-3 rounded" />
            <input name="password" placeholder="Password" type="password" onChange={handleChange} className="w-full border p-2 mb-3 rounded" />
            <button onClick={sendOtp} className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600">Send OTP</button>
          </>
        )}
        {step === 2 && (
          <>
            <input name="otp" placeholder="Enter OTP" onChange={handleChange} className="w-full border p-2 mb-3 rounded" />
            <button onClick={verifyOtp} className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600">Verify OTP & Sign Up</button>
          </>
        )}
        <p className="text-sm text-gray-600 text-center mt-3">{message}</p>
        <p className="text-center mt-2">Already have an account? <a href="login" className="text-blue-500 hover:underline">Log in</a></p>
      </div>
    </div>
  );
};

export default Signup;
