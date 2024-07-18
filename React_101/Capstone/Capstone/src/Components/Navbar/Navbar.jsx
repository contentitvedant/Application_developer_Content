import { Link, Outlet } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return (
<>
        <div className="nav-container">
            <div className="img-container"><box-icon type='logo' height="3rem" width="3rem" color="#61677C" name='medium-old'></box-icon>BlogShelf</div>
            <Link to={"/addtask"}>
                <button className='add-btn'>
                    <ion-icon name="pencil-outline"></ion-icon>
                </button>
            </Link>
            <Link to={"/tasklist"}>
                <button className="add-btn" type="button">
                    <ion-icon name="list-outline"></ion-icon>
                </button>
            </Link>
        </div>
        <Outlet/>
        </>
    )
}

export default Navbar