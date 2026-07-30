import { useState } from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './Pages/Home';
import Layout from './Pages/Layout';
import Menu from './Pages/Menu';
import OrderSection from './Pages/OrderSection';
import FeedbackSection from './Pages/FeedbackSection';
function App() {
     const routings=createBrowserRouter([{
      path:"/",
      element:<Layout />,
      children:[{
        index: true,
        element:<Home/>
      },{
        path:"/Menu",
        element:<Menu/>
      },{
        path:"/OrderSection",
        element:<OrderSection/>
      },{
        path:"/FeedbackSection",
        element:<FeedbackSection/>
      }]
     }])
  return (
    <>
    <RouterProvider router={routings}></RouterProvider>
    </>
  )
}
export default App
