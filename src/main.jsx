import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import './index.css'

// Pages
import ErrorPage from './utils/error-page';
import OnlineGame from './pages/OnlineGame';
import CPUGame from './pages/CPUGame';
import Root from './root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/o/:id",
        element: <OnlineGame />
      },
      {
        path: "/cpu",
        element: <CPUGame/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
