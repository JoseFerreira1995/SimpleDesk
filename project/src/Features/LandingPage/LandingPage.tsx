import { useNavigate } from "react-router-dom";

import Footer from "./Footer/Footer";

import AppsCard from "../../components/AppsCard";

import { ModeToggle } from "../../components/modeToggle";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <div className="flex justify-between items-center m- sm:m-6 gap-6 ">
          <ModeToggle></ModeToggle>
        </div>
        <div className="flex justify-center mt-4 sm:mt-12">
          <h1 className=" text-4xl sm:text-7xl font-landing font-bold">
            Simple Desk
          </h1>
        </div>
      </header>

      <section>
        <div className=" flex flex-col sm:flex-row justify-center mt-8 p-4 sm:p-12 gap-4 sm:gap-8 ">
          <div
            onClick={() => navigate("/todo")}
            className=" w-full sm:size-25  bg-[#ffec99] rounded-2xl hover:rotate-3 hover:scale-150 hover:cursor-pointer transition-all animate-bounce animation-duration-[3s]"
          >
            <AppsCard title="Todo List"></AppsCard>
          </div>
          <div
            onClick={() => navigate("/weather")}
            className=" w-full sm:size-25 bg-[#a5d8ff] rounded-2xl hover:-rotate-3 hover:scale-150 hover:cursor-pointer transition-all animate-bounce animation-duration-[3.2s]"
          >
            <AppsCard title="Weather"></AppsCard>
          </div>
          <div
            onClick={() => navigate("/calculator")}
            className=" w-full sm:size-25 bg-[#b2f2bb] rounded-2xl hover:rotate-3 hover:scale-150 hover:cursor-pointer transition-all animate-bounce animation-duration-[3.4s]"
          >
            <AppsCard title="Calculator"></AppsCard>
          </div>
          <div
            onClick={() => navigate("/freespace")}
            className=" w-full sm:size-25 bg-[#ffc9c9] rounded-2xl hover:-rotate-3 hover:scale-150 hover:cursor-pointer transition-all animate-bounce animation-duration-[3.6s]"
          >
            <AppsCard title="FreeSpace"></AppsCard>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
