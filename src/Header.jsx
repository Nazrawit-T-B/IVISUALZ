import {
  InputGroup,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { IconBrandGithub,IconSun,IconMoon } from "@tabler/icons-react"
import "./header.css"
import { useTheme } from "next-themes"
const Header = () => {
    const { theme, setTheme } = useTheme()
  return (
    <>
      <header>
        <div className="flex items-center gap-1">
            <img src="./image.png" alt="Logo" className="w-10 h-10" />
            <h1>IVISUALZ</h1>
        </div>   
        <div className="header-right">
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li>
              <InputGroup align="inline-start">
                <InputGroupInput placeholder="Search..." />
              </InputGroup>
            </li>
               <Separator orientation="vertical" className="bg-gray-300 dark:bg-gray-700 my-4" />
            <li>
              <Button variant="outline" size="icon" aria-label="GitHub">
  <a href="https://github.com/Nazrawit-T-B"><IconBrandGithub className="h-4 w-4" /></a>
</Button>
            </li>
          
            <li>
              <Button
                variant="outline"
                size="icon"
                aria-label="Toggle theme"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <IconSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <IconMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </li>
          </ul>
        </div>
      </header>
      <Separator className="bg-gray-800 dark:bg-gray-900 my-4" />
    </>
  )
}

export default Header