import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import ChartCSS from "./chart.module.css"

const Chart = ({ title, data, grid, id }) => {

    return (
        <div className={ChartCSS.chart} id={id}>
            <h3 className={ChartCSS.chartTitle}>{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="x" stroke="#5550bd" />
                    <Line type="monotone" dataKey="y" stroke="#5550bd" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

Chart.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
        x: PropTypes.string.isRequired,
        y: PropTypes.number.isRequired,
    })).isRequired,
    grid: PropTypes.bool.isRequired,
    id: PropTypes.string
}

export default Chart