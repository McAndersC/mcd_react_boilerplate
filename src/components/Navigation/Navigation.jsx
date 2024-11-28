import { Link, NavLink } from "react-router-dom";
import styles from './navigation.module.css'
import { useState } from "react";
import { icons } from "../../services/icons";

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false)


    const toggleNavigation = () => {

      
        setIsOpen(!isOpen)
        
    }
  
    return (
        <div className={styles.navigation}>
            {/* <a href="/">FORSIDE</a> */}

            <div>

                LOGO

            </div>
            <div className={styles.actions}>

                <div className={`${styles.nav} ${isOpen ? styles.open : ''}` }>
                    <NavLink to={"/"} className={({ isActive }) => (isActive ? styles.active : "")}>Home</NavLink>
                    <NavLink to={"/subscribers"} className={({ isActive }) => (isActive ? styles.active : "")}>Subscribers</NavLink>
                    <NavLink to={"/users"} className={({ isActive }) => (isActive ? styles.active : "")}>Users</NavLink>
                    <NavLink to={"/backoffice/subscribers"} className={({ isActive }) => (isActive ? styles.active : "")}>Backoffice Subscribers</NavLink>
                </div>
                
                <div onClick={toggleNavigation}>
                    {icons["FaBurger"]}
                </div>

            
         

            </div>
         

        </div>
    );
};
export default Navigation;