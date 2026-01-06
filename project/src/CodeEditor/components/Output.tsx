import { Button } from "../../components/ui/button";
import { useRunCode } from "../../hooks/useRunCode";

export default function Output({ language, editorRef }) {
  const { mutate, data, isPending } = useRunCode();

  const handleCode = () => {
    const code = editorRef.current.getValue() ?? " ";
    mutate({ language, sourceCode: code });
  };
  return (
    <>
      <div className="flex flex-col h-full rounded-xl border bg-gray-900">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
          <Button onClick={handleCode} disabled={isPending}>
            {isPending ? "Running..." : "▶ Run"}
          </Button>
          <span className="text-sm font-medium text-gray-300">Output</span>
        </div>

        <div className="flex-1 p-4 overflow-auto text-sm font-mono">
          {!data && (
            <p className="text-gray-500 italic">
              Run your code to see the output
            </p>
          )}

          {data?.run?.stdout && (
            <pre className="text-gray-100 whitespace-pre-wrap">
              {data.run.stdout}
            </pre>
          )}

          {data?.run?.stderr && (
            <pre className="mt-3 text-red-400 whitespace-pre-wrap">
              {data.run.stderr}
            </pre>
          )}
        </div>
      </div>
    </>
  );
}
