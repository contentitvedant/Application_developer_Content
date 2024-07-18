import "./Navbar.css"
const Navbar = () => {
    return (
        <>
        <nav>
            <div className="branding-container">News Edge</div>
           
                <ul className="menu-container">
                    <li><a href="../Home/Home.jsx"><box-icon name='home-alt-2' type='solid'  color='#fbf7f7' ></box-icon></a> </li>
                    <li>Tech</li>
                    <li>Sports</li>
                    <li>Entertainment</li>
                    <li ><a> Article</a></li>
                    <li><box-icon name='search-alt' animation='tada' color='#ffffff' ></box-icon>
                    <box-icon name='menu' color='#fbfbfb' ></box-icon></li>
                </ul>   
            
        </nav>
        </>
    )
}

export default Navbar