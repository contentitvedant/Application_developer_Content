import "./Navbar.css";
import {Link, Outlet} from "react-router-dom";

const Navbar = () => {
  const url="https://itv-contentbucket.s3.ap-south-1.amazonaws.com/Web+Development+Assets/React/Assets/logo2.png";
  return (
    <div>
        <nav className="nav-container">
            <ul className="nav-list">
            <li className="nav-img-container">
                  <img src={url} alt="Logo" />
                </li>
                <li className="nav-btn"> <Link to="/home" >Home</Link></li>
                <li className="nav-btn"><Link to="/apifetch" >ApiFetch</Link></li>
                <li className="nav-btn"><Link to="/blogs" >Blogs</Link></li>
                <li className="nav-btn">
                <Link to="/contactus" >Contactus</Link></li>
                <li className="nav-btn">  <Link to="/items" >items</Link></li>
            </ul> 
        </nav>
        <Outlet/>
    </div>
  );
}

export default Navbar;
