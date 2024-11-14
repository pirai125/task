import { useState, useEffect } from "react";
import api from "./api";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);
  const [deleted, setDeleted] = useState(true);

  useEffect(() => {
    if (deleted) {
      setDeleted(false);
    }
    api
      .get("/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, [deleted]);

  function deleteItems(id) {
    api
      .delete(`/delete/${id}`)
      .then((res) => {
        setDeleted(true);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        User Management
      </h1>
      <div className="flex justify-center mb-6">
        <Link
          to="/create"
          className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg transition"
        >
          Create New User
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((user, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col "
          >
            <p className="font-semibold text-lg text-gray-700 ">{user.name}</p>
            <p className="text-gray-500">{user.email}</p>
            <p className="text-gray-500 capitalize">{user.gender}</p>
            <p className="text-gray-500">{user.age} years old</p>
            <div className="mt-4 flex space-x-2">
              <Link
                to={`/read/${user.id}`}
                className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded-md "
              >
                Read
              </Link>
              <Link
                to={`/edit/${user.id}`}
                className="bg-yellow-600 hover:bg-yellow-500 text-white px-3 py-1 rounded-md"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteItems(user.id)}
                className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
