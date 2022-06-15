import style from "../styles/Banner.module.css";
import DropDown from "./DropDown";



const $firstList = [
    'Top 10 Shopping Malls'
]


const Banner = ({ $title }) => {

    return (
        <div className={style.banner}>
            <div className={style.banner_info}>
                <p className={style.title}>
                    {$title}
                </p>
                Check the most visited places in your location!
            </div>
            <div className={style.banner_right}>
                <DropDown $itemlist={$firstList} />
                <DropDown $itemlist={['Calender date']} />
            </div>
        </div>
    )
}

export default Banner;