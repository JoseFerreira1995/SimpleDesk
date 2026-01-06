import { Button } from "../../components/ui/button";

export type ButtonTypes = {
  symbol: string | number;
  handleClick: (value: string | number) => void;
  bgCcolor?: string;
};

export default function CalculatorButtons({
  symbol,
  handleClick,
  bgCcolor,
}: ButtonTypes) {
  return (
    <>
      <Button
        style={{ background: bgCcolor }}
        className="h-14 sm:h-16 rounded-xl text-lg sm:text-xl font-semibold  active:scale-95 transition"
        onClick={() => handleClick(symbol)}
      >
        {symbol}
      </Button>
    </>
  );
}
