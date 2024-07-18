import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <>
    <ul>
        <li className="menu-btn">
            <Link>Home</Link>
        </li>
        <li className="menu-btn">
            <Link>Articles</Link>
        </li>
        <li className="menu-btn">
            <Link>Tech</Link>
        </li>
        <li className="menu-btn">
            <Link>Entertainment</Link>
        </li>
        <li className="menu-btn">
            <Link>Search</Link>
        </li><li className="menu-btn">
            <Link>Subscribe</Link>
        </li>
      
    </ul>
    </>
  )
}

export default Navbar