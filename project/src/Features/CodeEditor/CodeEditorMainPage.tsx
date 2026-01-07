import Header from "../../components/Header";
import EditorComponent from "./components/EditorComponent";


export default function CodeEditorMainPage() {
  return (
    <>
      <Header title="Freespace" textColor="#f472b6"></Header>
      <section>
        <div className="m-5 p-10">
          <EditorComponent></EditorComponent>
        </div>
      </section>
    </>
  );
}
