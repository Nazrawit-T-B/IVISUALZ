import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './Router.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    {/* RouterProvider injects the entire routing configuration into your app */}
    <RouterProvider router={router} />
  </React.StrictMode>
);