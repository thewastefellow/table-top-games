import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"

const NavBar = () =>{
    return(<div className={styles.container}>
        <div className={styles.linkContainer}> 
            <Link  className={styles.link} to="/">Home</Link>
        </div>
        <div className={styles.linkContainer}>
        <Link className={styles.link} to="/createPlayer">Create Player</Link>
        </div>
    </div>
    )
}

export default NavBar;