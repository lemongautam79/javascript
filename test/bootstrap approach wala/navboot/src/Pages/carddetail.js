const carddetail = () => {
    return ( 
        <div>
            <section id="prodetails" class="section-p1">

<div class="single-pro-image">
    <img src="images/beautifulbook.jpg " width="100%" id="MainImg" alt=""/>

</div>


<div class="single-pro-details">
    <h5>Home / Books</h5>
    <h2>Think and Grow rich</h2>
    <b>
        <h2>$234</h2>
    </b>
    <select>
        <option>Select Books</option>
        <option>New Books</option>
        <option>Used Books</option>
    </select>
    <input type="number" value="1"/>
    <button class="normal">Add To Cart</button>
    <h2>Product Details</h2>
    <span>Reading could help you live longer. People who read books live for around two years longer than
        those who don't, irrespective of gender, wealth, education or health, according to a Yale University
        study. While a similar association was found among readers of newspapers, it was weaker</span>

</div>
</section>

        </div>
     );
}
 
export default carddetail;