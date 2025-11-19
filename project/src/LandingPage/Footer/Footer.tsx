import { GithubIcon, LinkedinIcon } from "lucide-react";

export default function Footer() {
  const gitHubURL: string = "https://github.com/JoseFerreira1995/SimpleDesk";
  const linkedinURL: string = "https://www.linkedin.com/in/jose-pferreira/";
  return (
    <>
      <footer>
        <div className="flex justify-center gap-10 mt-[15%] p-[10%]">
          <a href={gitHubURL}>
            <GithubIcon></GithubIcon>
          </a>
          <a href={linkedinURL}>
            <LinkedinIcon></LinkedinIcon>
          </a>
        </div>
      </footer>
    </>
  );
}
