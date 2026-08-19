import { NavLink } from 'react-router-dom';
import styles from './HeaderLink.module.css';

function HeaderLink({ url, children}) {
    return (
        <NavLink
            to={url}
            className={({ isActive }) =>
                isActive
                    ? `${styles.link}`
                    : styles.link
            }
        >
            {children}
        </NavLink>
    )
}

export default HeaderLink;