type InputTypes = {
  value: string;
  result: string;
};

export default function CalculatorInput({ value, result }: InputTypes) {
  return (
    <>
      <div className="border-s-amber-400 rounded-2xl bg-gray-100   ">
        <div className="h-10 text-black p-3">
          <h1>{result}</h1>
        </div>
        <div className="h-10 text-teal-900 p-3">
          <h1>{value}</h1>
        </div>
      </div>
    </>
  );
}
