const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Lemon Blog</h1>
            <div className="links">
              <a href="/">Home page</a>  
              <a href="/create" style={{
              color: "white",
              backgroundColor: '#f1356d',
              borderRadius: '8px'

              }}>New Blog</a>  
            </div>
        </nav>
    );
}
 
export default Navbar;