
import './App.css'
import {/* Route */ RouterProvider, createBrowserRouter, /* createRoutesFromElements */} from 'react-router-dom';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUS/AboutUs';
import Navbar from './Components/Navbar/Navbar';


function App() {
const router = createBrowserRouter([
  {path:"/home", element:<Home/>},
  {path:"/aboutus", element:<AboutUs/>}
])



// const routes=createRoutesFromElements(<>
//     <Route path="/" element={<Home/>}/>
//     <Route path="/aboutus" element={<AboutUs/>}/>
//   </>)
// const router =createBrowserRouter(routes);

  return (
    <>
  
    <RouterProvider router={router} />
    <Navbar/>
    </>
  )
}

export default App
