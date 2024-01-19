import Subscribe from "../../Components/Subscribe";
import Aboutus from "../Aboutus/Aboutus";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Categories from "../Categories/Categories";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Topbar from "../Topbar/Topbar";
import Tutorial from "../Tutorial/Tutorial";

const Layout = () => {
  return (
    <div>
      <Topbar></Topbar>
      <Navbar></Navbar>
      <Banner></Banner>
      <Categories></Categories>
      <Aboutus></Aboutus>
      <Tutorial></Tutorial>
      <Subscribe></Subscribe>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
