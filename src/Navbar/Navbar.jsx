import style from './Navbar.module.css'
import NavItem from "./NavItem/NavItem";

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <NavItem name='Profile' path='/profile'/>
            <NavItem name='Dialogs' path='/dialogs'/>
            <NavItem name='News' path='/news'/>
            <NavItem name='Music' path='/music'/>
            <NavItem name='Settings' path='/settings'/>
        </nav>
    )
}

export default Navbar;