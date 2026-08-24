import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { IconBrandGithub } from "@tabler/icons-react";
import "./header.css";

const Header = () => {
  return (
    <>
      <header className="w-full  mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <h1 className="text-xl font-bold tracking-tight m-0 text-black font-sans ">IVISUALZ</h1>
        </div>
        
        <div className="header-right">
          <ul className="flex items-center gap-6 list-none m-0 p-0">
            <li>
              <a href="#algorithms" className="text-sm text-black font-mono hover:text-amber-800 transition-colors">ALGORITHMS</a>
            </li>
            <li>
              <a href="#how-it-works" className="text-sm text-black font-mono hover:text-white transition-colors">HOW IT WORKS</a>
            </li>
            <li>
              <a href="#about" className="text-sm text-gray-300 hover:text-white transition-colors">About</a>
            </li>
            
            <Separator
              orientation="vertical"
              className="bg-gray-800 h-4"
            />
            
            <li>
              <Button variant="outline" size="icon" aria-label="GitHub" className="border-gray-800 bg-transparent hover:bg-gray-900 text-gray-300">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center justify-center">
                  <IconBrandGithub className="h-4 w-4" />
                </a>
              </Button>
            </li>
          </ul>
        </div>
      </header>
      
      <Separator className="bg-gray-900 my-1" />
    </>
  );
};

export default Header;
