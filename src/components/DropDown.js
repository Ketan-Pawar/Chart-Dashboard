import style from '../styles/DropDown.module.css';

const DropDown = ({ $title, $itemlist }) => {
    return (
        <div className={style.dropdown}>
            {$title && <p className={style.title}>{$title}</p>}
            <select>
                {
                    ($itemlist != undefined) &&
                    $itemlist.map((item, index) => {
                        return (
                            <option key={index}>{item}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default DropDown;