import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logout } from "../slices/userSlice";

const Profile = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("userInfo")).token
            }`,
          },
        };
        const { data } = await axios.get("/api/users/profile", config);
        setUser(data);
      } catch (error) {
        setError("Error fetching user data");
      }
    };

    fetchUserProfile();
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = "/";
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-6 rounded shadow-md w-80">
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <h1 className="text-2xl mb-4">Welcome, {user.username}</h1>
          <button
            onClick={handleLogout}
            className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
