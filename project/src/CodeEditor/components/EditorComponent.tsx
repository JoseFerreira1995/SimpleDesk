import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";
import LanguageMenu from "./LanguageMenu";
import Output from "./Output";

export default function EditorComponent() {
  const editorRef = useRef(null);
  const [value, setValue] = useState<string>("");
  const [language, setLanguage] = useState<string>("javascript");

  function editorOnMount(editor) {
    editorRef.current = editor;
    editor.focus();
  }
  const handleMenuChange = (language: string) => {
    setLanguage(language);
  };
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <LanguageMenu onChange={handleMenuChange} language={language} />
        </div>

        <div className="grid grid-cols-2 gap-4 h-[60vh]">
          <div className="rounded-xl overflow-hidden border">
            <Editor
              height="100%"
              theme="vs-dark"
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
