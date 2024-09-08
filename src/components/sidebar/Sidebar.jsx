import { useEffect, useState } from "react";
import {
    LineStyle,
    Timeline,
    TrendingUp,
    KeyboardDoubleArrowLeftRounded,
    KeyboardDoubleArrowRightRounded
} from "@mui/icons-material";
import { NavLink, useLocation } from "react-router-dom";
import { ANALYTICS, HOME, RECRUITS } from '../../configs'
import SidebarCSS from "./sidebar.module.css";

const Sidebar = () => {
    const navLinkState = ({ isActive }) => isActive ? SidebarCSS.link + " " + SidebarCSS.active : SidebarCSS.link
    const location = useLocation()
    const hashid = location.hash

    useEffect(() => {
        if (!hashid || hashid?.length == 0) return undefined
        const element = document.querySelector(hashid);
        const remToPx = parseFloat(getComputedStyle(document.body).fontSize);
        const timeOut = setTimeout(() => { element && element.parentElement.parentElement.scrollTo(0, element.offsetTop - 6 * remToPx) }, 500)
        return () => clearTimeout(timeOut)
    }, [hashid])

    const [toggle, setToggle] = useState(true)
    useEffect(() => {
        const toggleButton = document.getElementById("toggle-button");
        setToggle(toggleButton.checkVisibility())
        const resize = () => {
            const toggleButton = document.getElementById("toggle-button")
            setToggle(toggleButton.checkVisibility())
        }
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, [])
    const toggleSidebar = () => setToggle(toggle => !toggle)

    const linkClick = () => {
        const toggleButton = document.getElementById("toggle-button");
        if (toggleButton.checkVisibility()) toggleSidebar()
    }

    const doNothing = () => { }

    return (
        <div className={SidebarCSS.sidebar}>
            <div className={SidebarCSS.sidebarWrapper + (toggle ? " " + SidebarCSS.hide : "")}>
                <div className={SidebarCSS.sidebarMenu}>
                    <h3 className={SidebarCSS.sidebarTitle}>Dashboard</h3>
                    <ul className={SidebarCSS.sidebarList}>
                        <NavLink to={HOME} className={navLinkState} onClick={linkClick}>
                            <li className={SidebarCSS.sidebarListItem}>
                                <LineStyle className={SidebarCSS.sidebarIcon} />
                                Home
                            </li>
                        </NavLink>
                        <NavLink to={ANALYTICS + "#analytics"} className={navLinkState} onClick={linkClick}>
                            <li className={SidebarCSS.sidebarListItem}>
                                <Timeline className={SidebarCSS.sidebarIcon} />
                                Analytics
                            </li>
                        </NavLink>
                        <NavLink to={RECRUITS + "#recruits"} className={navLinkState} onClick={linkClick}>
                            <li className={SidebarCSS.sidebarListItem}>
                                <TrendingUp className={SidebarCSS.sidebarIcon} />
                                Recruits
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
            <div className={SidebarCSS.toggleSideBar} id="toggle-button">
                <input type="radio" name="toggle-sidebar" id="show" checked={toggle} onChange={doNothing} />
                <label htmlFor="show" onClick={toggleSidebar}>
                    <KeyboardDoubleArrowLeftRounded fontSize="large" />
                </label>
                <input type="radio" name="toggle-sidebar" id="hide" checked={!toggle} onChange={doNothing} />
                <label htmlFor="hide" onClick={toggleSidebar}>
                    <KeyboardDoubleArrowRightRounded fontSize="large" />
                </label>
            </div>
        </div>
    )
}

export default Sidebar