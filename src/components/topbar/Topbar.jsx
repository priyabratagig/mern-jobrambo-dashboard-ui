import { useEffect } from "react";
import { useSelector } from "react-redux";
import Avatar, { genConfig } from "react-nice-avatar";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import { setUser } from '../../redux'
import { get_loggedin_user } from '../../api';
import TopbarCSS from "./topbar.module.css";
import { APP_HOME, PROFILE } from "../../configs";

const Topbar = () => {
    const loggedInUser = useSelector((state) => state.user)
    const avatarConfig = genConfig(loggedInUser.email)

    useEffect(() => {
        if (loggedInUser?.userid != undefined) return undefined
        const onLoad = async () => {
            try {
                const user = await get_loggedin_user()

                setUser(user)
            }
            catch ({ message }) {
                console.error(message)
            }
        }

        const timeOut = setTimeout(onLoad, 150)

        return () => clearTimeout(timeOut)
    }, [loggedInUser])

    return (
        <div className={TopbarCSS.topbar}>
            <div className={TopbarCSS.topbarWrapper}>
                <div className={TopbarCSS.topLeft}>
                    <a href={APP_HOME}>
                        <span className={TopbarCSS.logo}>Job</span><span className={TopbarCSS.logoColor}>Rambo</span>
                    </a>
                </div>
                <div className={TopbarCSS.topRight}>
                    <div className={TopbarCSS.topbarIconContainer}>
                        <NotificationsNone fontSize="large" />
                        <span className={TopbarCSS.topIconBadge}>2</span>
                    </div>
                    <div className={TopbarCSS.topbarIconContainer}>
                        <Language fontSize="large" />
                        <span className={TopbarCSS.topIconBadge}>2</span>
                    </div>
                    <div className={TopbarCSS.topbarIconContainer}>
                        <Settings fontSize="large" />
                    </div>
                    <a href={PROFILE}>
                        <Avatar {...avatarConfig} className={TopbarCSS.topAvatar} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Topbar