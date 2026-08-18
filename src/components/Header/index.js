import { Link } from "react-router-dom";
import { useState } from "react";
import logo from './logo.png';
import styles from './Header.module.css';
import HeaderLink from "./HeaderLink";

function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <header className={styles.header}>
            <Link to="/">
                <img src={logo} alt="Logo do cinetag"></img>
            </Link>
            <button
                type="button"
                className={styles.botaoMenu}
                onClick={() => setMenuAberto(!menuAberto)}
            >
                <div
                    className={`${styles.animatedIcon} ${
                        menuAberto ? styles.open : ""
                    }`}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            <nav
                className={`${styles.menu} ${
                    menuAberto ? styles.aberto : ""
                }`}
            >
                <HeaderLink url="/" onClick={() => setMenuAberto(false)}>
                    Home
                </HeaderLink>
                <HeaderLink url="/favoritos" onClick={() => setMenuAberto(false)}>
                    Favoritos
                </HeaderLink>
            </nav>
        </header>
    );
}

export default Header;
