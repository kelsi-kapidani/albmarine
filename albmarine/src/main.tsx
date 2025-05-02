import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router'
import App from './App'
import { About } from './pages/About';
import { Contact } from './pages/Contact';



const router = createBrowserRouter([
  {
  path: '/',
  element: <App />,
  children: [
    {
    path:'/about',
    element: <About />
    },
    {
    path:'/shipping_services',

    },
    {
    path:'/maritime_training',

    },
    {
    path:'/contact',
    element: <Contact />
    }
  ]
}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
