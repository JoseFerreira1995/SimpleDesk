import { HomeIcon } from "lucide-react";
import { ModeToggle } from "./modeToggle";
import { useNavigate } from "react-router-dom";

type TitleProp = {
  title: string;
  textColor?: string;
};

export default function Header({ title, textColor }: TitleProp) {
  const navigate = useNavigate();
  return (
    <header>
      <div className="flex justify-between items-center m-4 sm:m-6 gap-6 ">
        <ModeToggle></ModeToggle>
        <div
          className="p-2 rounded hover:bg-gray-600 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <HomeIcon className="w-6 h-6 sm:w-8 sm:h-8"></HomeIcon>
        </div>
      </div>
      <div className="flex justify-center mt-4 sm:mt-12">
        <h1
          className=" text-4xl sm:text-7xl font-landing font-bold"
          style={{ color: textColor }}
        >
          {title}
        </h1>
      </div>
    </header>
  );
}
