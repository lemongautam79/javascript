
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
// import Blogs from "./Pages/Blogs";
import BuySell from "./Pages/BuySell";
import LoginSignup from "./Pages/LoginSignup";
// import RoadMaps from "./Pages/RoadMaps";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Carddetailpage from './Pages/Carddetailpage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import Blogpagedetail from "./Pages/Blogpagedetail";
import React,{useState,useEffect} from "react";
import axios from "axios";



const App = () => {


  const[addbooks,setAddbooks] = useState(null);
   let cardsdata = [
    {
        id:'1',
        image:'./images/Atomic habits.jpg',
        title:"Lemon Gautam",
        price:1250,
        download:"D:\books",
    },
    {
        id:'2',
        image:'./images/ikigai.jpg',
        title:"Azul Gautam",
        price:1250,
        download:"test"
    },
    {
        id:'3',
        image:'./images/rich dad poor dad.jpg',
        title:"Azul Gautam",
        download:"download this",
        price:1250,
    },
    {
        id:'4',
        image:'./images/sapiens.jpg',
        title:"Azul Gautam",
        download:"download this",
        price:1250,
    },
    {
        id:'4',
        image:'./images/The subtle art of not giving a fuck.jpg',
        title:"Azul Gautam",
        download:"download this",
        price:1250,
    },
    ];
    
    //!fetch API state ko muni bata use garenee

    useEffect(()=>{
      axios.get('')
      .then(res=>{console.log(res.data);
              setAddbooks(res.data);})
      .catch((err)=>{console.log(err)})
    },[]);
      //! useEffect use garda fetch halnee ani api ko loop banda garna lai [] halnee 
    // const addExpenseHandler = (expense) =>
    // {
    //     const updatedExpense = [expense, ...expenses];
    //     setExpenses(updatedExpense);
    // }

  return ( 
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home books ={cardsdata}/>}/>
        {/* <Route path="Blogs" element={<Blogs />} /> */}
        <Route path="BuySell" element={<BuySell books ={cardsdata} />} />
        <Route path="LoginSignup" element={<LoginSignup />} />
        {/* <Route path="RoadMaps" element={<RoadMaps />} /> */}
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Carddetailpage" element={< Carddetailpage/>} />
        
        {/* <Route path="Blogpagedetail" element={<Blogpagedetail />} /> */}
    </Routes>
       <Footer/>
    </div>
   );
}
 
export default App;