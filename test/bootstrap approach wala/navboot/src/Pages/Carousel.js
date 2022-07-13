const Carousel = () => {
    return ( 
        <div>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active " data-bs-interval="200">
                <img src="./images/ikigai.jpg" className="d-block w-100 img-fluid" alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                <img src="./images/present2.jpg" className="d-block w-100 img-fluid" alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                <img src="./images/present3.jpg" className="d-block w-100 img-fluid" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
     );
}
 
export default Carousel;