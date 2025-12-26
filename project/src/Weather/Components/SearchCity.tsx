import { Input } from "../../components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "../../components/ui/toggle-group";

type Props = {
  input: string;
  onSearch: () => void;
  onInputChange: (value: string) => void;
  onEnter: () => void;
};

export default function SearchCity({
  input,
  onSearch,
  onInputChange,
  onEnter,
}: Props) {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch();
          onEnter();
        }}
      >
        <Input
          className="text-center bg-sky-50 w-150 input-secondary font-landing "
          placeholder="Location/City"
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
        ></Input>
      </form>
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="c">C°</ToggleGroupItem>
        <ToggleGroupItem value="c">F°</ToggleGroupItem>
      </ToggleGroup>
    </>
  );
}
