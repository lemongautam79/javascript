import { Link } from "react-router-dom";
import './Card.css';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Carddetailpage from "../Pages/Carddetailpage";
const Card = (props) => {


    // let image = props.image;
    // let title = props.title;

    return ( 
        <div>
            {/* <img src="./images/present1.jpg" alt="" />
            <img src="./images/present2.jpg" alt="" />n
            <img src="./images/present3.jpg" alt="" /> */}

            {/* <div className="index-post">
            <div className="contener">
            <div className="image-contener">
                <img src="./images/present1.jpg" alt=""/>
            </div>
            <div className="meta-contener">
                <h2 className="title">Nature World.</h2>
                <span className="desc">Nature World News brings out the science geek in every reader, fostering an improved appreciation of our environment...</span>
            </div>
            <div className="button-contener">
                <a href="#" className="button">Read More →</a>
            </div>
            </div>
            <div className="contener">
            <div className="image-contener">
                <img src="./images/present1.jpg" alt=""/>
            </div>
            <div className="meta-contener">
                <h2 className="title">Nature World.</h2>
                <span className="desc">Nature World News brings out the science geek in every reader, fostering an improved appreciation of our environment...</span>
            </div>
            <div className="button-contener">
                <a href="#" className="button">Read More →</a>
            </div>
            </div>
            <div className="contener">
            <div className="image-contener">
                <img src="./images/present1.jpg" alt=""/>
            </div>
            <div className="meta-contener">
                <h2 className="title">Nature World.</h2>
                <span className="desc">Nature World News brings out the science geek in every reader, fostering an improved appreciation of our environment...</span>
            </div>
            <div className="button-contener">
                <a href="#" className="button">Read More →</a>
            </div>
            </div>
            <div className="contener">
            <div className="image-contener">
                <img src="./images/present1.jpg" alt=""/>
            </div>
            <div className="meta-contener">
                <h2 className="title">Nature World.</h2>
                <span className="desc">Nature World News brings out the science geek in every reader, fostering an improved appreciation of our environment...</span>
            </div>
            <div className="button-contener">
                <a href="#" className="button">Read More →</a>
            </div>
            </div>
            <div className="contener">
            <div className="image-contener">
                <img src="./images/present1.jpg" alt=""/>
            </div>
            <div className="meta-contener">
                <h2 className="title">Nature World.</h2>
                <span className="desc">Nature World News brings out the science geek in every reader, fostering an improved appreciation of our environment...</span>
            </div>
            <div className="button-contener">
                <a href="#" className="button">Read More →</a>
            </div>
            </div>
        </div> */}

        {/* <div className="bodyjastai"> */}
         <div class="card">
      <img src={props.image} />
      <div class="card-info">
        <h6>{props.title}</h6>
               <button>Rs.{props.price}</button>
                {/* <Link to="/Carddetailpage">
                ReadMore
                </Link> */}
      </div>
    </div>
    </div>
        // </div>
     );
}
 
export default Card;