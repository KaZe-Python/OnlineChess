import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import './index.css'

// Pages
import ErrorPage from './utils/error-page';
import OnlineGame from './pages/OnlineGame';
import CPUGame from './pages/CPUGame';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
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
