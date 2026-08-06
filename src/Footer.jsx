import ProductCard from "src/components/shadcn-space/card/card-03.jsx";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 text-gray-400">
  <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
    
    {/* Top Section */}
    <div className="grid gap-10 md:grid-cols-4">
      
      {/* Brand */}
      <div className="md:col-span-2">
        <div className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
          <span className="rounded-full" />
          IVISUALZ
        </div>

        <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
          A quiet, precise way to see how algorithms actually work.
        </p>

        <p className="mt-6 font-mono text-xs text-gray-500">
          Visualize • Understand • Build
        </p>
      </div>

      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
          Algorithms
        </h4>

        <ul className="space-y-3 text-sm">
          {[
            "Huffman Coding",
            "Caesar's Cipher",
            "Sorting",
            "Hashing",
            "Dijkstra's",
            "Path Finding",
          ].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="transition-colors hover:text-white"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
          Company
        </h4>

        <ul className="space-y-3 text-sm">
          <li>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition-colors">
              Changelog
            </a>
          </li>
          <li>
            <a
              href="mailto:hello@ivisualz.app"
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
          Legal
        </h4>

        <ul className="space-y-3 text-sm">
          <li>
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </li>
        </ul>
      </div>

    </div>

    <div className="mt-12 flex flex-col gap-3 border-t border-gray-800 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
      <span>
        © 2026 IVISUALZ. All rights reserved.
      </span>

      <span className="font-mono text-xs text-gray-500">
        v1.0
      </span>
    </div>

  </div>
</footer>
  );
};
export default Footer;
