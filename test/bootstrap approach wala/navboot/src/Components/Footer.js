import { Link } from "react-router-dom";
import './Footer.css';


const Footer = () => {
    return ( 
       <div>
        <section className = "footer">
          <div className="social">
            <h2 className="footerwala">Follow us:</h2>
            <a href="#"><i className="fab fa-instagram">
              </i></a>
              <a href="#"><i className="fab fa-facebook">
              </i></a>
              <a href="#"><i className="fab fa-twitter">
              </i></a>
              <a href="#"><i className="fab fa-github">
              </i></a>
          </div>
          <ul className="list">
              {/* <li><a href="./Home">Home</a></li> */}
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
              {/* <li><Link to="/Services">Services</Link></li> */}

              {/* <li><a href="./About">About</a></li>
              <li><a href="./Contact">Contact</a></li>
              <li><a href="./Services">Services</a></li> */}
              {/* <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy Policy</a></li> */}
          </ul>
          <p className="copyright">KAAL @2022</p>
        </section>
       </div>
     );
}
 
export default Footer;