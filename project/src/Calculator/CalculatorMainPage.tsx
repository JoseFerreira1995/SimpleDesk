import { HomeIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CalculatorMainPage() {
  const navigate = useNavigate();
  return (
    <header>
      <HomeIcon className="m-[2%]" onClick={() => navigate("/")}></HomeIcon>
      <div className="flex justify-center mt-[5%]">
        <h1 className="text-green-600 dark:text-teal-600 text-7xl font-landing font-bold text-center">
          Calculator
        </h1>
      </div>
    </header>
  );
}
