import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router'
import App from './App'
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Services } from './pages/Services';
import { Trainings } from './pages/Trainings';



const router = createBrowserRouter([
  
//   {
//   path: '/',
//   element: <App />,
//   children: [
//     {
//     path:'/about',
//     element: <About />
//     },
//     {
//     path:'/shipping_services',
//     element: <Services />,
//     },
//     {
//     path:'/maritime_training',
//     element: <Trainings />,
//     },
//     {
//     path:'/contact',
//     element: <Contact />
//     }
//   ]
// }
// ]);
{
  path: '/',
  element: <App />,
  children: [
    {
      path: 'about',
      element: <About />,
    },
    {
      path: 'shipping_services',
      element: <Services />,
    },
    {
      path: 'maritime_training',
      element: <Trainings />,
    },
    {
      path: 'contact',
      element: <Contact />,
    },
  ],
},
],
{
basename: '/albmarine', // ✅ This fixes GitHub Pages 404
}
);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
