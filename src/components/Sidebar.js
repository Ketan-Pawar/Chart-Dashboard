import { useState } from "react";
import style from '../styles/Sidebar.module.css';
import DropDown from "./DropDown";


const province = [
    'DKI Jakarta',
    'Jakarta'
];

const cities = [
    'All cities',
    'Jakarta'
]

const Sidebar = () => {
    const [active, setActive] = useState(0)
    return (
        <div className={style.sidebar}>
            <div className={style.tabsbar} >
                <p className={style.tab + ' ' + ((active === 0) && style.active)} onClick={() => setActive(0)}>Point of Interset</p>
                <p className={style.tab + ' ' + ((active === 1) && style.active)} onClick={() => setActive(1)}>Topography</p>
            </div>
            <div className={style.tabs}>
                <DropDown $title={'Province'} $itemlist={province} />
                <DropDown $title={'City'} $itemlist={cities} />
                <div className={style.map}>
                    Open Map
                </div>
            </div>
        </div>
    )
}

export default Sidebar;