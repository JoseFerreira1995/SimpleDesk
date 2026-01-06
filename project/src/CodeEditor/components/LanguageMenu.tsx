import { version } from "react";
import { Button } from "../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { LANGUAGE_VERSIONS } from "../Constants";

type LanguageTypes = {
  language: string;
  onChange: (value: string) => void;
};

export default function LanguageMenu({ language, onChange }: LanguageTypes) {
  const languageVersion = Object.entries(LANGUAGE_VERSIONS);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{language}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        {languageVersion.map(([languages, version]) => (
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => onChange(languages)}>
              {languages}
              <DropdownMenuShortcut>{version}</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
