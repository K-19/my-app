import style from './Dialog.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div>
            <NavLink to={props.personId} className={style.dialog}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default Dialog;