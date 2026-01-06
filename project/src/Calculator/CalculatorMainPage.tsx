import * as math from "mathjs";

import { useState } from "react";

import CalculatorButtons from "./components/CalculatorButtons";
import CalculatorInput from "./components/CalculatorInput";
import Header from "../components/Header";

export default function CalculatorMainPage() {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState("");

  const handleAddButtons = (value: string | number) => {
    setInput((text: string) => text + value.toString());
  };

  const resetInputs = () => {
    setInput("");
    setResult("");
  };

  const calculate = () => {
    setResult(math.evaluate(input));
    setInput("");
  };

  return (
    <>
      <Header title="Calculator" textColor="#0d9488"></Header>
      <section className="flex justify-center px-4 py-10">
        <div className="w-full max-w-sm bg-teal-800 rounded-2xl shadow-xl p-4 sm:p-6 ">
          <div className="mb-6 rounded-xl bg-teal-950 p-4 shadow-inner">
            <CalculatorInput value={input} result={result}></CalculatorInput>
          </div>
          <div className="grid grid-cols-4 gap-3">
            <CalculatorButtons
            bgCcolor="#f87171"
              symbol={"AC"}
              handleClick={resetInputs}
            ></CalculatorButtons>
            <CalculatorButtons
              symbol={"+/-"}
              handleClick={handleAddButtons}
            ></CalculatorButtons>
            <CalculatorButtons
              symbol={"%"}
              handleClick={handleAddButtons}
            ></CalculatorButtons>
            <CalculatorButtons
              symbol={"/"}
              handleClick={handleAddButtons}
            ></CalculatorButtons>

            <CalculatorButtons
              symbol={7}
              handleClick={handleAddButtons}
            ></CalculatorButtons>
            <CalculatorButtons
              symbol={8}
              handleClick={handleAddButtons}
            ></CalculatorButtons>
            <CalculatorButtons
              symbol={9}
              handleClick={handleAddButtons}
            ></CalculatorButtons>
            <CalculatorButtons
              symbol={"*"}
              handleClick={handleAddButtons}
            ></CalculatorButtons>

            <CalculatorButtons
              symbol={4}
              handleClick={handleAddButtons}
            ></CalculatorButtons>
            <CalculatorButtons
              symbol={5}
              handleClick={handleAddButtons}
            ></CalculatorButtons>
            <CalculatorButtons
              symbol={6}
              handleClick={handleAddButtons}
            ></CalculatorButtons>
            <CalculatorButtons
              symbol={"-"}
              handleClick={handleAddButtons}
            ></CalculatorButtons>

            <CalculatorButtons
              symbol={1}
              handleClick={handleAddButtons}
            ></CalculatorButtons>
            <CalculatorButtons
              symbol={2}
              handleClick={handleAddButtons}
            ></CalculatorButtons>
            <CalculatorButtons
              symbol={3}
              handleClick={handleAddButtons}
            ></CalculatorButtons>
            <CalculatorButtons
              symbol={"+"}
              handleClick={handleAddButtons}
            ></CalculatorButtons>

            <CalculatorButtons
              symbol={0}
              handleClick={handleAddButtons}
            ></CalculatorButtons>
            <CalculatorButtons
              symbol={"."}
              handleClick={handleAddButtons}
            ></CalculatorButtons>
            <CalculatorButtons
              symbol={"="}
              handleClick={calculate}
            ></CalculatorButtons>
          </div>
        </div>
      </section>
    </>
  );
}
