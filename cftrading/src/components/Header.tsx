import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import styles from "./Header.module.scss";
import Logo from '../assets/images/eprnext-logo.png'




const activeLink = ({ isActive }: { isActive: boolean }) => (isActive ? `${styles.active}` : "")


const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const hideMenu = () => {
    setShowMenu(false)
  }

  const logoMob = (
    <div className={styles.logo}>
    <Link to="/">
      <h2>
        React<span>Starter</span>.
      </h2>
    </Link>
  </div>
  ) 
  
  return (
    <header>
    <div className={styles.header}>
    <Link to="/">
        
        <img className={styles.logo} src={Logo} alt="CF TRADING LOGO" />
         
    </Link>

    <nav
          className={
            showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
          }
        >
          <div
            className={
              showMenu
                ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                : `${styles["nav-wrapper"]}`
            }
            onClick={hideMenu}
          ></div>

          <ul onClick={hideMenu}>
            <li className={styles["logo-mobile"]}>
              {logoMob}
            
              <FaTimes size={22} color="#fff" onClick={hideMenu} />
            </li>
            <li>
              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/home" className={activeLink}>
                Dashboard
              </NavLink>
            </li>
          </ul>
          <div className={styles["header-right"]} onClick={hideMenu}>
            <span className={styles.links}>
              <NavLink to="/login" className={activeLink}>
                Login
              </NavLink>
              <NavLink to="/register" className={activeLink}>
                Register
              </NavLink>
            </span>
            <Link to="/">
              <button className="--btn --btn-primary">Get Started</button>
            </Link>
          </div>
  
  
          

          </nav>
          <div className={styles["menu-icon"]}>
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
        </div>
        </div>
      

     </header>

  
  )
}

export default Header