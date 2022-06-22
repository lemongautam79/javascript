import Navbar from './navbar';
import Home from './home';
import Blog from './newblog';

function App() {
  const title = "Welcome to my blog";
  const like = 50;
  const name = "lemon"
  const link = "https://www.google.com"
  // const person = {name:"lemon", age:"19"}
  return (
    <div className="App">
      <Navbar/>

      <div className="content">
      <Home/>
      <Blog/>
      </div>
    </div>
  );
}

export default App;
