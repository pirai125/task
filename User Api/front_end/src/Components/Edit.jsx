import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "./api";

export default function Edit() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`/read/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    api
      .put(`/edit/${id}`, data[0])
      .then((res) => {
        navigate("/");
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit User</h1>
      <Link to="/" className="text-blue-600 underline mb-4">
        Back to Home
      </Link>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-6">
        {data.map((user, index) => (
          <form onSubmit={handleSubmit} key={index} className="space-y-4">
            <div>
              <label className="form-font">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={user.name || ""}
                required
                className="form-style"
                onChange={(e) =>
                  setData([{ ...data[0], name: e.target.value }])
                }
              />
            </div>

            <div>
              <label className="form-font">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={user.email || ""}
                required
                className="form-style"
                onChange={(e) =>
                  setData([{ ...data[0], email: e.target.value }])
                }
              />
            </div>

            <div>
              <label className="form-font">
                Gender
              </label>
              <div className="flex items-center space-x-4 mt-1">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="Male"
                    name="gender"
                    checked={user.gender === "Male"}
                    required
                    className="mr-2"
                    onChange={(e) =>
                      setData([{ ...data[0], gender: e.target.value }])
                    }
                  />
                  Male
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="Female"
                    name="gender"
                    checked={user.gender === "Female"}
                    required
                    className="mr-2"
                    onChange={(e) =>
                      setData([{ ...data[0], gender: e.target.value }])
                    }
                  />
                  Female
                </label>
              </div>
            </div>

            <div>
              <label className="form-font">
                Age
              </label>
              <input
                type="number"
                name="age"
                value={user.age || ""}
                required
                className="form-style"
                onChange={(e) => setData([{ ...data[0], age: e.target.value }])}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-500 transition"
            >
              Save Changes
            </button>
          </form>
        ))}
      </div>
    </div>
  );
}
