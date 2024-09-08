import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Avatar, { genConfig } from "react-nice-avatar";
import WidgetLgCSS from "./widgetlg.module.css";

const Button = ({ type }) => {
    return <button className={WidgetLgCSS.widgetLgButton + " " + WidgetLgCSS[type]}>{type}</button>
}

Button.propTypes = {
    type: PropTypes.oneOf(["Accepted", "Rejected", "In-Review"])
};

const WidgetLg = () => {
    const applications = useSelector((state) => state.applications.applications)

    return (
        <div className={WidgetLgCSS.widgetLg}>
            <h3 className={WidgetLgCSS.widgetLgTitle}>Latest applications</h3>
            <table className={WidgetLgCSS.widgetLgTable}>
                <thead className={WidgetLgCSS.widgetLgTr}>
                    <tr>
                        <th className={WidgetLgCSS.widgetLgTh}>Applicants</th>
                        <th className={WidgetLgCSS.widgetLgTh}>Date</th>
                        <th className={WidgetLgCSS.widgetLgTh}>Role</th>
                        <th className={WidgetLgCSS.widgetLgTh}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {applications.map((application) => {
                        const avatarConfig = genConfig(application.email)

                        return (
                            <tr className={WidgetLgCSS.widgetLgTr} key={application.email}>
                                <td className={WidgetLgCSS.widgetLgUser}>
                                    <Avatar className={WidgetLgCSS.widgetLgImg} {...avatarConfig} />
                                    <span className={WidgetLgCSS.widgetLgName}>{application.fullname}</span>
                                </td>
                                <td className={WidgetLgCSS.widgetLgDate}>{application.date}</td>
                                <td className={WidgetLgCSS.widgetLgAmount}>{application.title}</td>
                                <td className={WidgetLgCSS.widgetLgStatus}>
                                    <Button type={application.status} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default WidgetLg