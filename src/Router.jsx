import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import HuffmanVisualizer from "./pages/huffman/Visualizer";
import HuffmanLearn from "./pages/huffman/Learn";

import CeasersLearn from "./pages/cipher/Learn.jsx";
import CeasersVisualizer from "./pages/cipher/Visualizer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/visualize/huffman",
    element: <HuffmanVisualizer />,
  },

  {
    path: "/learn/huffman",
    element: <HuffmanLearn />,
  },

  {
    path: "/learn/caesar-cipher",
    element: <CeasersLearn />,
  },

  {
    path: "/visualize/caesar-cipher",
    element: <CeasersVisualizer />,
  },
]);

export default router;