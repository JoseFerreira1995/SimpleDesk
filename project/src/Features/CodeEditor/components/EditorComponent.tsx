import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";
import LanguageMenu from "./LanguageMenu";
import Output from "./Output";
import { useTheme } from "../../../components/themeProvider";

export default function EditorComponent() {
  const editorRef = useRef(null);
  const [value, setValue] = useState<string>("");
  const [language, setLanguage] = useState<string>("javascript");
  const mode = useTheme();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function editorOnMount(editor: any) {
    editorRef.current = editor;
    editor.focus();
  }
  const handleMenuChange = (language: string) => {
    setLanguage(language);
  };
  return (
    <>
      <div className="sm:flex-row flex-col gap-4">
        <div className="flex items-center justify-between">
          <LanguageMenu onChange={handleMenuChange} language={language} />
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mt-2 h-[60vh]">
          <div className="rounded-xl overflow-hidden border">
            <Editor
              height="100%"
              theme={mode.theme === "dark" ? "vs-dark" : "light"}
              language={language}
              value={value}
              onChange={(value) => setValue(value ?? "")}
              onMount={editorOnMount}
            />
          </div>

          <Output language={language} editorRef={editorRef} />
        </div>
      </div>
    </>
  );
}
