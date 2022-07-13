import './Blogs.css';
import { Link } from "react-router-dom";
import Blogpagedetail from './Blogpagedetail';

const Blogs = () => {
    return (
        <div>
            <div class="barber_section layout_padding">
         <div class="container">
            <div class="braber_taital_main">
               <div class="row">
                  <div class="col-lg-6">
                     <div class="barber_bg_main">
                        <h1 class="barber_taital">Jhonson Barber is</h1>
                        <p class="barber_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik</p>
                        <div class="blogr_main">
                           <div class="blogr_left">
                              <p class="post_text">Post By :  Blogr</p>
                           </div>
                           <div class="blogr_right">
                              <div class="comment_text">
                                 <ul>
                                    <li><a href="#">Like<span class="padding_10"><i class="fa fa-thumbs-up"></i></span></a></li>
                                    <li><a href="#">Comment<span class="padding_10"><i class="fa fa-comment"></i></span></a></li>
                                    <li><a href="#">Share<span class="padding_10"><i class="fa fa-share-alt" aria-hidden="true"></i></span></a></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-6">
                     <div class="fashion_img">
                        <img src="images/img-1.png" class="fashion_img"/>
                        <div class="read_bt"><a href="#">04FEB</a></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
        </div>
      );
}
 
export default Blogs;