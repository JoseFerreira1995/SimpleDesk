import { Button } from "../../components/ui/button";

export type ButtonTypes = {
  symbol: string | number;
  handleClick: (value: string | number) => void;
};

export default function CalculatorButtons({
  symbol,
  handleClick,
}: ButtonTypes) {
  return (
    <>
      <Button className="m-2" onClick={() => handleClick(symbol)}>
        {symbol}
      </Button>
    </>
  );
}
