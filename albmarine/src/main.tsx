import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router'
import App from './App'



const router = createBrowserRouter([
  {
  path: '/',
  element: <App />,
  children: [
    {
    path:'/about',
    },
    {
    path:'/shipping_services',

    },
    {
    path:'/maritime_training',

    },
    {
    path:'/contact',

    }
  ]
}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
