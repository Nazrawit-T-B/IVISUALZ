import { Separator } from "@/components/ui/separator";
import { IconBrandGithub } from "@tabler/icons-react";
import "./header.css";

const Header = () => {
  return (
    <>
      <header className="w-full mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <h1 className="m-0 text-2xl font-bold tracking-[-0.08em] text-black">IVISUALZ</h1>
        </div>

        <div className="header-right">
          <ul>
            <li>
              <a href="#algorithms">ALGORITHMS</a>
            </li>
            <li>
              <a href="#how-it-works">HOW IT WORKS</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>

            <Separator orientation="vertical" className="h-4 bg-black/40" />

            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-black/70 bg-transparent text-black transition-colors hover:bg-black hover:text-white"
              >
                <IconBrandGithub className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
      </header>

      <Separator className="bg-black/20 my-1" />
    </>
  );
};

export default Header;
