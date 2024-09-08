import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Visibility } from "@mui/icons-material";
import WidgetsmCSS from "./widgetsm.module.css";
import { setCompanyImages } from "../../redux";

export default function WidgetSm() {
    const jobs = useSelector((state) => state.jobs)


    useEffect(() => {
        if (jobs.some(({ logo }) => (!logo))) {
            const timeOut = setTimeout(() => setCompanyImages(jobs), 500)
            return () => clearTimeout(timeOut)
        }
    }, [jobs])

    return (
        <div className={WidgetsmCSS.widgetSm}>
            <span className={WidgetsmCSS.widgetSmTitle}>New Job Posts</span>
            <ul className={WidgetsmCSS.widgetSmList}>
                {jobs.map((job) => (
                    <li key={job.jobid} className={WidgetsmCSS.widgetSmListItem} >
                        <img src={job.logo} title='logo' className={WidgetsmCSS.widgetSmImg} />
                        <div className={WidgetsmCSS.widgetSmUser}>
                            <span className={WidgetsmCSS.widgetSmUsername}>{job.title}</span>
                            <span className={WidgetsmCSS.widgetSmUserTitle}>{job.company}</span>
                        </div>
                        <button className={WidgetsmCSS.widgetSmButton}>
                            <Visibility className={WidgetsmCSS.widgetSmIcon} />
                            Display
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}