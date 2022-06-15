import style from '../styles/ButtonGroup.module.css';
import { useState } from 'react';

const ButtonGroup = ({ $buttongroup} ) => {
    const [activeButton, setActiveButton] = useState(0)

    return (
        <div className={style.button_group}>
            {
                $buttongroup.map((item, index) => {
                    return (
                        <button
                            key={index}
                            className={style.btn + ' ' + ((activeButton === index) && style.active)}
                            onClick={() => setActiveButton(index)}
                        >
                            {item}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default ButtonGroup;