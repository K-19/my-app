import style from './NavItem.module.css'
import {NavLink} from "react-router-dom";

const NavItem = (props) => {
    return (
        <div>
            <NavLink to={props.path}
                     className={({ isActive }) => {
                         if (isActive) return style.active
                     }}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default NavItem;