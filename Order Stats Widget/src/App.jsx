import React, { useEffect, useState } from "react";
import { assets } from "./assets/images/Assets";
import data from "./Constant/data.json";
import WidgetOrderStats from "./Components/WidgetOrderStats";
export default function App() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const mapData = data.data.map((items) => ({
      ...items,
      img: assets[items.img],
    }));
    setStats(mapData);
  }, []);
  return (
    <>
      <div>
        <WidgetOrderStats stats={stats} />
      </div>
    </>
  );
}
