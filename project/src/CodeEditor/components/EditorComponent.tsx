import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";
import LanguageMenu from "./LanguageMenu";

export default function EditorComponent() {
  const editorRef = useRef(null);
  const [value, setValue] = useState<string>("");
  const [language, setLanguage] = useState<string>("Javascript");

  function editorOnMount(editor) {
    editorRef.current = editor;
    editor.focus();
  }
  const handleMenuChange = (language: string) => {
    setLanguage(language);
  };
  return (
    <>
      <LanguageMenu
        onChange={handleMenuChange}
        language={language}
      ></LanguageMenu>
      <Editor
        height="60vh"
        theme="vs-dark"
        width="90vh"
        language={language}
        defaultLanguage="javascript"
        defaultValue="//Feel free to code"
        value={value}
        onChange={(value) => setValue(value ?? "")}
        onMount={editorOnMount}
      ></Editor>
    </>
  );
}
