import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import loadData from './AllLoadData/AllData';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
