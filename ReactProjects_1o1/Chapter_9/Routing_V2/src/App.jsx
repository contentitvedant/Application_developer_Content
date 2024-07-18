
import './App.css'
import Contactus from './Components/ContactUs/Contactus'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Blogs from './Components/Blogs/Blogs'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ApiFetch from './Components/ApiFetching/ApiFetch'
import Items from './Components/Items/Items'
import ItemDetails from './Components/Items/ItemDetails'

function App() {

const routers=createBrowserRouter([
  {
    path:"/" ,
    element:<Navbar/>,
    children:[
      { index:true,
        element:<Home/>
      },
      {
        path:"/blogs",
        element:<Blogs/>,
      },{
        path:"/apifetch",
        element:<ApiFetch/>,
      },
      {
        path:"/contactus",
        element:<Contactus/>
      },
      {
        path:'items',
        children:[
          {
            index:true,
            element:<Items/>
          },{
            path:':id',
            element:<ItemDetails/>,
          }
        ]
      }
        ]
  }
])
  return (
    <>
      <RouterProvider router={routers}/>   
    </>
  )
}

export default App
