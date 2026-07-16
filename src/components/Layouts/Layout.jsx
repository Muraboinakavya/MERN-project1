import {Outlet} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Siderbar/Siderbar";
import Footer from "../Footer/Footer";
function Layout(){
    return(
        <>
        <Navbar/>
        <div className="main">
        <Sidebar/>
        <div className="content">
            <Outlet/>
        </div>
        </div>
        </>
    )
}
export default Layout;