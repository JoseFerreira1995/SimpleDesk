import { GithubIcon, LinkedinIcon } from "lucide-react";
import AppsCard from "../components/AppsCard";
import Header from "./Header/Header";

export default function LandingPage() {
  return (
    <>
      <Header></Header>
      <section>
        <div className="flex justify-center mt-[5%] p-10 gap-3 ">
          <div className=" size-25 bg-[#ffec99] rounded-2xl hover:rotate-3">
            <AppsCard title="Todo List"></AppsCard>
          </div>
          <div className=" size-25 bg-[#a5d8ff] rounded-2xl hover:rotate-3">
            <AppsCard title="Weather"></AppsCard>
          </div>
          <div className=" size-25 bg-[#b2f2bb] rounded-2xl hover:rotate-3">
            <AppsCard title="Calculator"></AppsCard>
          </div>
          <div className=" size-25 bg-[#ffc9c9] rounded-2xl hover:rotate-3">
            <AppsCard title="FreeSpace"></AppsCard>
          </div>
        </div>
      </section>
      <footer>
        <div className="flex justify-center gap-10 mt-[15%] p-[10%]">
          <GithubIcon></GithubIcon>
          <LinkedinIcon></LinkedinIcon>
        </div>
      </footer>
    </>
  );
}
