import { HomeIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

import * as math from "mathjs";

import { useState } from "react";

import CalculatorButtons from "./components/CalculatorButtons";
import CalculatorInput from "./components/CalculatorInput";

export default function CalculatorMainPage() {
  const navigate = useNavigate();
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
      <header>
        <HomeIcon className="m-[2%]" onClick={() => navigate("/")}></HomeIcon>
        <div className="flex justify-center mt-[5%]">
          <h1 className="text-green-600 dark:text-teal-600 text-7xl font-landing font-bold text-center">
            Calculator
          </h1>
        </div>
      </header>
      <section>
        <div className="bg-teal-900 m-25 rounded-2xl h-130 ">
          <div className="m-10 p-8">
            <CalculatorInput value={input} result={result}></CalculatorInput>
          </div>
          <div className="grid justify-center m-1">
            <div>
              <CalculatorButtons
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
        </div>
      </section>
    </>
  );
}
