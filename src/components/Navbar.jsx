import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white px-6 py-3">
      <h1 className="font-semibold text-xl">My Auth App</h1>
      <div>
        {user ? (
          <button onClick={logout} className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">Logout</button>
        ) : (
          <>
            <Link to="login" className="px-4 py-2 hover:underline">Login</Link>
            <Link to="signup" className="px-4 py-2 hover:underline">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
