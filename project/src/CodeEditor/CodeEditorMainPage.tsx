import { HomeIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import EditorComponent from "./components/EditorComponent";

export default function CodeEditorMainPage() {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <HomeIcon className="m-[2%]" onClick={() => navigate("/")}></HomeIcon>
        <div className="flex justify-center mt-[5%]">
          <h1 className="text-green-600 dark:text-rose-600 text-7xl font-landing font-bold text-center">
            Freespace
          </h1>
        </div>
      </header>
      <section>
        <div className="m-5 p-10">
          <EditorComponent></EditorComponent>
        </div>
      </section>
    </>
  );
}
