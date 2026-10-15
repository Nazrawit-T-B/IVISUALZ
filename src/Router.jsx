import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import HuffmanVisualizer from './pages/huffman/Visualizer';
import HuffmanLearn from './pages/huffman/Learn';
import CeasersLearn from './pages/cipher/Learn.jsx';
import CeasersVisualizer from './pages/cipher/Visualizer.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/visualize/huffman',
    element: <HuffmanVisualizer />,
  },
  {
    path: '/learn/huffman',
    element: <HuffmanLearn />,
  },
  {
    path:'/learn/ceasersCipher',
    element: <CeasersLearn/>,
  },
  {
    path: '/visualize/ceasersCipher',
    element: <CeasersVisualizer />,
  },
 
]);

export default router;
