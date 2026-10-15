import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { IconBrandGithub } from "@tabler/icons-react";
import "./header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-logo">
      <h1 className="logo-text">IVISUALZ</h1>
    
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
            <a href="#about">CONTACT</a>
          </li>

          <Separator
            orientation="vertical"
            className="h-4 bg-black/40"
          />

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
  );
};

export default Header;