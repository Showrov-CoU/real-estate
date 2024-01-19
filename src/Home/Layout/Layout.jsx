import Aboutus from "../Aboutus/Aboutus";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Navbar from "../Navbar/Navbar";
import Topbar from "../Topbar/Topbar";

const Layout = () => {
  return (
    <div>
      <Topbar></Topbar>
      <Navbar></Navbar>
      <Banner></Banner>
      <Categories></Categories>
      <Aboutus></Aboutus>
    </div>
  );
};

export default Layout;
