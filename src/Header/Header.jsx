import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
          <img className={style.logo} src='https://flyclipart.com/thumb2/png-logo-design-transparent-logo-design-images-489321.png' alt='logo'/>
        </header>
    )
}

export default Header;