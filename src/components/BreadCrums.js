import { useState } from "react"
import style from "../styles/BreadCrum.module.css"


const BreadCrums = ({ $list }) => {
    const [active, setActive] = useState(0)
    return (
        <ul className={style.breadcrum}>
            {
                $list.map((item, index) => {
                    return (
                        <li className={(active === index) ? style.active : ''} key={index} onClick={() => setActive(index)}>{item}</li>
                    );
                })
            }
        </ul>
    )
}

export default BreadCrums;