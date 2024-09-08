import PropTypes from 'prop-types'
import { Outlet } from "react-router-dom";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import LayoutCSS from "./layout.module.css";

const Layout = ({ withNavBar, withSideBar }) => {
    return (
        <section className={LayoutCSS.container}>
            {withNavBar && <Topbar />}
            {withSideBar ? <Sidebar /> : <div></div>}
            <div>
                <Outlet />
            </div>
        </section>
    )
}

Layout.propTypes = {
    withNavBar: PropTypes.bool,
    withSideBar: PropTypes.bool,
}

export default Layout