import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
    <div>
        <nav className="navbar navbar-dark navbar-expand-lg" id="top_nav">
        <div className="container-fluid">
            <Link className="navbar-brand" to ="/"><img src="./images/logo.png" height="40" width = "40"alt="Logo" className="img-fluid" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Sci Fi</a></li>
                    <li><a className="dropdown-item" href="#">Romance</a></li>
                    <li><a className="dropdown-item" href="#">Biography</a></li>                    
                    <li><a className="dropdown-item" href="#">Novels</a></li> 
                    
                </ul>
                </li> */}
                <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link> 
                </li>
               <li className="nav-item">
                <Link className="nav-link" to="/BuySell"> 2nd Buy/Sell</Link> 
                </li>

                <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link> 
                </li>
               
                <li className="nav-item">
                    <Link className="nav-link" to="/Contact">Contact</Link> 
                    </li>
                    </ul>
np
                            <form id="searchform"className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="searchbox"/>
                        <button className="btn btn-$orange" type="submit"><i class="bi bi-search "id="searchbutton"></i></button>
                    </form>
                
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item">
                <Link className="nav-link" to="/LoginSignup">Login/SignUp</Link> 
                </li>
            </ul>

           
            </div>
        </div>
        </nav>
    </div> 
    );
}
 
export default Navbar;