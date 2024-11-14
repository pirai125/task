import { data } from "../Constants/data";

export default function TrasactionList() {
  return (
    <div className="h-screen py-8 max-w-lg mx-auto">
      <div className="font-semibold px-2">
        <div className="flex justify-between px-4 text-xl sm:text-2xl ">
          <h1>Last Transactions</h1>
          <h1 className="text-gray-1">See All</h1>
        </div>
        <div className="p-2 ">
          {data.map((items, idx) => (
            <div
              key={idx}
              className="bg-white my-4 p-4 rounded-2xl sm:flex justify-between gap-2 items-center "
            >
              <div className="flex items-center gap-2">
                <img src={items.img} alt="" className="size-16" />
                <div className="">
                  <p className="text-xl">{items.name}</p>
                  <div className="text-gray-1 flex gap-1">
                    <p>{items.date}</p>
                    <p> • { items.time}</p>
                  </div>
                </div>
              </div>
              <div className="text-end sm:block flex items-center justify-between mt-2 sm:mt-0">
                {items.amount >= 0 ? (
                  <p className="text-green text-2xl">
                    +${Math.abs(items.amount).toFixed(2)}
                  </p>
                ) : (
                  <p className="text-red text-2xl">
                    -${Math.abs(items.amount).toFixed(2)}
                  </p>
                )}

                <p>{items.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
