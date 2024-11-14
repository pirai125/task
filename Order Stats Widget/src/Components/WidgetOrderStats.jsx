import OrderStats from "./OrderStats";

export default function WidgetOrderStats({ stats }) {
  return (
    <div className="bg-gray-2 h-screen">
      <div className="mx-auto  grid sm:grid-cols-2 lg:grid-cols-4 h-fit p-10 gap-3">
        {stats.map((stats, index) => (
          <OrderStats key={index} {...stats} />
        ))}
      </div>
    </div>
  );
}
