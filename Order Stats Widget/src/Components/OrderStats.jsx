export default function OrderStats({ img, name, percentage, num, status }) {
  return (
    <>
      <div className="bg-white px-3 py-2 font-semibold rounded-xl max-w-64 ">
        <div className="flex justify-between">
          <h1 className="text-xl">{name}</h1>
          {status === "+" ? (
            <p className="text-green text-md">↑ {percentage}%</p>
          ) : (
            <p className="text-red text-md">↓ {percentage}%</p>
          )}
        </div>
        <div className=" flex items-center gap-2 text-2xl mt-1">
          <img src={img} alt="" className="size-16" />
          <p className="font-bold text-3xl">{num}</p>
        </div>
      </div>
    </>
  );
}
