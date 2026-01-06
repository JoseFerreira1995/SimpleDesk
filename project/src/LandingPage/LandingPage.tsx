import { useNavigate } from "react-router-dom";
import AppsCard from "../components/AppsCard";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { ModeToggle } from "../components/modeToggle";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <ModeToggle></ModeToggle>
      <Header></Header>

      <section>
        <div className=" flex flex-col sm:flex-row justify-center mt-6 p-4 sm:p-10 gap-4 sm:gap-8 ">
          <div
            onClick={() => navigate("/todo")}
            className=" w-full sm:size-25  bg-[#ffec99] rounded-2xl hover:rotate-3 hover:scale-150 hover:cursor-pointer transition-all"
          >
            <AppsCard title="Todo List"></AppsCard>
          </div>
          <div
            onClick={() => navigate("/weather")}
            className=" w-full sm:size-25 bg-[#a5d8ff] rounded-2xl hover:-rotate-3 hover:scale-150 hover:cursor-pointer transition-all"
          >
            <AppsCard title="Weather"></AppsCard>
          </div>
          <div
            onClick={() => navigate("/calculator")}
            className=" w-full sm:size-25 bg-[#b2f2bb] rounded-2xl hover:rotate-3 hover:scale-150 hover:cursor-pointer transition-all"
          >
            <AppsCard title="Calculator"></AppsCard>
          </div>
          <div
            onClick={() => navigate("/freespace")}
            className=" w-full sm:size-25 bg-[#ffc9c9] rounded-2xl hover:-rotate-3 hover:scale-150 hover:cursor-pointer transition-all"
          >
            <AppsCard title="FreeSpace"></AppsCard>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
