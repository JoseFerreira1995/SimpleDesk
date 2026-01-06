import { Input } from "../../components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "../../components/ui/toggle-group";

type Props = {
  input: string;
  onSearch: () => void;
  onInputChange: (value: string) => void;
  openDropdown: () => void;
};

export default function SearchCity({
  input,
  onSearch,
  onInputChange,
  openDropdown,
}: Props) {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch();
        }}
      >
        <Input
          className="bg-sky-50 dark:bg-sky-400 rounded-lg shadow-sm text-center w-full sm:w-64 input-secondary focus:ouline-none focus:ring-2 focus:ring-sky-500 transition-all  "
          placeholder="Location/City"
          value={input}
          onChange={(e) => {
            onInputChange(e.target.value);
            openDropdown();
          }}
        ></Input>
      </form>
    </>
  );
}
