import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "./api";

export default function Read() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/read/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="min-h-screen  bg-gray-100 p-6">
      <div className="flex justify-between items-center w-full max-w-4xl mb-8">
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-6 rounded-lg transition"
        >
          Back to Home
        </Link>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg space-y-6">
        {data.map((student, index) => (
          <div key={index} className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              {student.name}
            </h2>
            <p className="text-gray-600">
              <strong>Email: </strong>
              {student.email}
            </p>
            <p className="text-gray-600">
              <strong>Gender: </strong>
              {student.gender}
            </p>
            <p className="text-gray-600">
              <strong>Age: </strong>
              {student.age} years old
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
