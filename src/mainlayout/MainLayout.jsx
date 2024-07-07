import { Outlet } from "react-router-dom";
import Navbar from "../share/Navbar";
import Footer from "../share/Footer";


const MainLayout = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar/>
            {/* outlate */}
            <Outlet/>
            {/* footer */}
            <Footer/>
        </div>
    );
};

export default MainLayout;