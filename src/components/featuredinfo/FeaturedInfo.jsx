import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import PropTypes from "prop-types";
import FeaturedInfoCSS from "./featuredInfo.module.css";

const FeaturedInfo = ({ id }) => {
    return (
        <div className={FeaturedInfoCSS.featured} id={id}>
            <div className={FeaturedInfoCSS.featuredItem}>
                <span className={FeaturedInfoCSS.featuredTitle}>📥Applications</span>
                <div className={FeaturedInfoCSS.featuredMoneyContainer}>
                    <span className={FeaturedInfoCSS.featuredMoney}>2,415</span>
                    <span className={FeaturedInfoCSS.featuredMoneyRate}>
                        -11.4 <ArrowDownward className={FeaturedInfoCSS.featuredIcon + " " + FeaturedInfoCSS.negative} />
                    </span>
                </div>
                <span className={FeaturedInfoCSS.featuredSub}>Compared to last month</span>
            </div>
            <div className={FeaturedInfoCSS.featuredItem}>
                <span className={FeaturedInfoCSS.featuredTitle}>📌Posts</span>
                <div className={FeaturedInfoCSS.featuredMoneyContainer}>
                    <span className={FeaturedInfoCSS.featuredMoney}>415</span>
                    <span className={FeaturedInfoCSS.featuredMoneyRate}>
                        -1.4 <ArrowDownward className={FeaturedInfoCSS.featuredIcon + " " + FeaturedInfoCSS.negative} />
                    </span>
                </div>
                <span className={FeaturedInfoCSS.featuredSub}>Compared to last month</span>
            </div>
            <div className={FeaturedInfoCSS.featuredItem}>
                <span className={FeaturedInfoCSS.featuredTitle}>🏅Recruited</span>
                <div className={FeaturedInfoCSS.featuredMoneyContainer}>
                    <span className={FeaturedInfoCSS.featuredMoney}>2,225</span>
                    <span className={FeaturedInfoCSS.featuredMoneyRate}>
                        +2.4 <ArrowUpward className={FeaturedInfoCSS.featuredIcon} />
                    </span>
                </div>
                <span className={FeaturedInfoCSS.featuredSub}>Compared to last month</span>
            </div>
        </div>
    )
}

FeaturedInfo.propTypes = {
    id: PropTypes.string
}

export default FeaturedInfo