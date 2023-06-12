import Blogs from "./Blogs";
import Blog from "./components/Blogs/Blog";
import {Routes , Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./Home";

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/"  element={<Home/>} exact />
          <Route path="/blogs" element={<Blogs/>} exact />
          <Route path="/blog/:id"  element={<Blog/>} exact />
        </Routes>
    </>
  );
}

export default App;
