import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo"
import HomeCSS from "./home.module.css"
import WidgetSm from "../../components/widgetsm/WidgetSm"
import WidgetLg from "../../components/widgetlg/WidgetLg"
import { APP_HOME, PAYMENT } from "../../configs"


const Home = () => {
    const loggedInUser = useSelector((state) => state.user)
    const userChart = useSelector((state) => state.charts.userChart)
    const navigate = useNavigate()

    useEffect(() => {
        if (!loggedInUser.userid) return undefined
        if (loggedInUser.isrecruiter == false) window.location.href = APP_HOME

        const currentEPOCTime = Math.ceil(new Date().getTime() / 1000)
        const validity = loggedInUser.access.dashboardvalidity
        if (validity == null || validity < currentEPOCTime) navigate(PAYMENT)

        return undefined
    })

    return (
        <>
            <FeaturedInfo id="recruits" />
            <Chart title="Appilcants Analytics" data={userChart} grid id="analytics" />
            <div className={HomeCSS.homeWidgets}>
                <WidgetSm />
                <WidgetLg />
            </div>
        </>
    )
}

export default Home