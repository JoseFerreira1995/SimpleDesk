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
        <div className="flex justify-center mt-[5%] p-10 gap-3 ">
          <div
            onClick={() => navigate("/todo")}
            className=" size-25 bg-[#ffec99] rounded-2xl hover:rotate-3"
          >
            <AppsCard title="Todo List"></AppsCard>
          </div>
          <div
            onClick={() => navigate("/weather")}
            className=" size-25 bg-[#a5d8ff] rounded-2xl hover:rotate-3"
          >
            <AppsCard title="Weather"></AppsCard>
          </div>
          <div
            onClick={() => navigate("/calculator")}
            className=" size-25 bg-[#b2f2bb] rounded-2xl hover:rotate-3"
          >
            <AppsCard title="Calculator"></AppsCard>
          </div>
          <div
            onClick={() => navigate("/freespace")}
            className=" size-25 bg-[#ffc9c9] rounded-2xl hover:rotate-3"
          >
            <AppsCard title="FreeSpace"></AppsCard>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
