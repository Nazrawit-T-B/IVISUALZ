import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { IconBrandGithub, IconSun, IconMoon } from "@tabler/icons-react";
import "./header.css";
import { useTheme } from "next-themes";
const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <header>
        <div className="flex items-center gap-1">
          <h1>IVISUALZ</h1>
        </div>
        <div className="header-right">
          <ul>
            <li>
              <a href="#">Algorithms</a>
            </li>
            <li>
              <a href="#">How it Works</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <Separator
              orientation="vertical"
              className="bg-gray-300 dark:bg-gray-700 my-4"
            />
            <li>
              <Button variant="outline" size="icon" aria-label="GitHub">
                <a href="https://github.com/Nazrawit-T-B">
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
