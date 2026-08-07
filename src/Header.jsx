import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { IconBrandGithub } from "@tabler/icons-react";
import "./header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="flex items-center gap-1">
          <h1>IVISUALZ</h1>
        </div>
        <div className="header-right">
          <ul>
            <li>
              {/* Point directly to the #algorithms id element */}
              <a href="#algorithms">Algorithms</a>
            </li>
            <li>
              {/* Point directly to the #how-it-works id element */}
              <a href="#how-it-works">How it works</a>
            </li>
            <li>
              {/* Point directly to the #about id element */}
              <a href="#about">About</a>
            </li>
            <Separator
              orientation="vertical"
              className="bg-gray-300 dark:bg-gray-700 my-4"
            />
            <li>
              <Button variant="outline" size="icon" aria-label="GitHub">
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  <IconBrandGithub className="h-4 w-4" />
                </a>
              </Button>
            </li>
          </ul>
        </div>
      </header>
      <Separator className="bg-gray-800 dark:bg-gray-900 my-4" />
    </>
  );
};

export default Header;
