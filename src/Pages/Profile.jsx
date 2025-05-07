import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, setUser, updateUser } = useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    updateUser({ displayName: name, photoURL: photoURL })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoURL });
        toast.success("Profile updated!");
      })
      .catch((err) => {
        toast.error("Update failed: " + err.message);
      });
  };

  useEffect(() => {
    document.title = "Event Explore | Profile";
  }, []);

  return (
    <div className="w-11/12 md:w-9/12 lg:w-7/12 mx-auto mt-10 bg-gray-800 text-accent rounded-3xl p-5 md:p-10">
      <div className="text-center space-y-3">
        <img
          src={user?.photoURL}
          alt="User"
          className="w-32 h-32 mx-auto rounded-full border-4 border-primary"
        />
        <h2 className="text-2xl font-bold text-primary">{user?.displayName}</h2>
        <p className="text-xl">Email : {user?.email}</p>
        <p className="text-lg">Photo : {user?.photoURL}</p>
      </div>

      <form
        onSubmit={handleUpdate}
        className="space-y-4 w-full max-w-md mx-auto bg-gray-800 p-6 my-10 rounded-2xl border border-gray-700"
      >
        <h2 className="text-2xl font-bold text-center text-primary">
          Update Profile
        </h2>

        {/* Name */}
        <label className="block text-accent text-lg">Name</label>
        <input
          required
          type="text"
          name="name"
          placeholder="Enter your name"
          className="input w-full bg-base-300 text-primary border-gray-700 rounded-xl h-12"
        />

        {/* Photo URL */}
        <label className="block text-accent text-lg">Photo URL</label>
        <input
          required
          type="text"
          name="photoURL"
          placeholder="Enter your photo URL"
          className="input w-full bg-base-300 text-primary border-gray-700 rounded-xl h-12"
        />

        {/* Submit button */}
        <button
          type="submit"
          className="bg-secondary cursor-pointer text-primary text-lg font-semibold rounded-xl h-12 w-full mt-4"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
