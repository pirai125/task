import { assets } from "./assets/assets";

export default function App() {
  return (
    <div className="max-w-sm  h-fit mx-auto  p-1 font-poppins">
      <section className="flex justify-between ">
        <div>
          <div className="overflow-hidden">
            <div className="size-8 bg-black rounded-full -ml-4"></div>
          </div>
        </div>
        <div className="flex gap-6">
          <img src={assets.Search} alt="" className="size-8" />
          <img src={assets.Menu} alt="" className="size-8" />
        </div>
      </section>

      <section className="flex flex-col gap-4 mt-8">
        <p className="bg-[#0174D7] w-fit px-3 py-0.5 text-white rounded-xl font-semibold">
          #Top
        </p>
        <h1 className="text-5xl font-bold leading-normal ">
          A Responsibly As Tech Leading Global Company
        </h1>
        <p className="font-semibold text-xl">
          Creating Superior Products & Services
        </p>

        <div className="flex gap-2">
          <img src={assets.StarImage} alt="" className="size-12" />
          <div>
            <p className="font-bold text-md">Trust Pilot</p>
            <p>
              Rated Best <span className="font-semibold">12.6k</span> Reviews
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex gap-2 my-8">
          <img src={assets.MainImage} alt="" className="rounded-xl w-[80%]" />
          <div className="flex flex-col flex-1 border bg-[#0174D7] border-white rounded-xl ">
            <div className=" basis-[72%] rounded-t-xl flex items-center justify-center text-white font-bold text-2xl  ">
              <p>72%</p>
            </div>
            <div className="bg-black basis-[28%] rounded-xl flex items-center justify-center text-white font-bold text-2xl">
              <p>28%</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <button className="w-full border-2 border-black py-2 font-semibold rounded-lg hover:bg-black hover:text-white hover:border-white">
          Signup to Get 50% OFF
        </button>
        <button className="text-white mt-6 w-full bg-black  py-2 font-semibold rounded-lg  hover:bg-white hover:text-black hover:border-black border-2">
          Explore New Products
        </button>
      </section>
    </div>
  );
}
