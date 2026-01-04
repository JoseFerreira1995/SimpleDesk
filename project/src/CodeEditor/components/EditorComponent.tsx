import Editor from "@monaco-editor/react";

export default function EditorComponent() {
  return (
    <Editor
      height="60vh"
      theme="vs-dark"
      width="90vh"
      defaultLanguage="javascript"
      defaultValue="//Feel free to code"
    ></Editor>
  );
}
