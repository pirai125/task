import { useEffect, useState } from "react";
import { asset } from "./assets/Asset";
import api from "./Components/api";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    api
      .get("/")
      .then((res) => {
        const updatedData = res.data.data.map((item) => ({
          ...item,
          img: asset[item.img],
        }));
        setData(updatedData);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="p-8 font-sora ">
      <div className="flex justify-between pb-4 text-xl font-semibold">
        <p>My Course</p>
        <p className="text-purple-500">View All</p>
      </div>
      <div className="p-4 overflow-x-auto">
        <table className="w-full max-w-full min-w-[800px]">
          <thead>
            <tr>
              <th>
                <p className="head">Course Name</p>
              </th>
              <th>
                <p className="head">Start Date</p>
              </th>
              <th>
                <p className="head">Lesson Completed</p>
              </th>
              <th>
                <p className="head">Duration</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((items, idx) => (
              <tr className="" key={idx}>
                <td>
                  <div className="flex gap-3 mb-4 items-center">
                    <img src={items.img} alt="" className="size-16 " />
                    <div>
                      <p>{items.name}</p>
                      <p className="text-gray-400">{items.lessons} Lesson</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="mb-4">{items.date}</p>
                </td>
                <td>
                  <p className="mb-4">
                    {items.completed}
                    <span className="text-gray-400">/{items.lessons}</span> (
                    {Math.abs((items.completed / items.lessons) * 100).toFixed(
                      0
                    )}
                    %)
                  </p>
                </td>
                <td>
                  <p className="mb-4">{items.duration}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
