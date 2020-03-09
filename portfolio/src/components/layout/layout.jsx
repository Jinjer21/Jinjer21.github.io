import React from 'react';
import { Link } from 'gatsby';
import Styles from "./layout.module.scss";

const Layout = ({ children }) => <div className={Styles.container}>
    <aside>
        <header>
            <h1>Jack O'Mahony</h1>
            <nav>
                <ul>
                    <li>
                        <Link activeClassName={Styles.active} to="/">Photos</Link>
                    </li>
                    <li>
                        <Link activeClassName={Styles.active} to="/about/">About</Link>
                    </li>
                    <li>
                        <Link activeClassName={Styles.active} to="/contact/">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>

        <footer>
            <nav>
                <ul>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/jackomahony_/">Instagram</a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/J.T.Omahony">Facebook</a>
                    </li>
                    <li>
                        <a target=" _blank" href="https://twitter.com/jacktomahony">Twitter</a>
                    </li>
                </ul>
            </nav>
        </footer>
    </aside> <main>{children}</main>
</div>

export default Layout;