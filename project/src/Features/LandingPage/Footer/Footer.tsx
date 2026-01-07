import { GithubIcon, LinkedinIcon } from "lucide-react";
import { GIT_HUB, LINKEDIN } from "../../../config/env";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="flex justify-center gap-10 mt-[15%] p-[10%]">
          <a href={GIT_HUB}>
            <GithubIcon></GithubIcon>
          </a>
          <a href={LINKEDIN}>
            <LinkedinIcon></LinkedinIcon>
          </a>
        </div>
      </footer>
    </>
  );
}
