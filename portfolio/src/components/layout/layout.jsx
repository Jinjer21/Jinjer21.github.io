import React from 'react';
import { Link } from 'gatsby';
import Styles from "./layout.module.scss";
import { useState } from 'react';
import { useEffect } from 'react';
import Bolt from '../../assets/bolt-solid.svg';
import Ban from '../../assets/ban-solid.svg';
import Menu from '../../assets/bars-light.svg';
import Facebook from '../../assets/facebook-square-brands.svg';
import Instagram from '../../assets/instagram-brands.svg';
import Twitter from '../../assets/twitter-brands.svg';
import { useStaticQuery, graphql } from 'gatsby';

const DarkModeToggle = ({ className }) => {
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')));

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
        }
    }, [darkMode]);

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode])


    return (<button className={`${Styles.toggleButton} ${className}`} onClick={() => setDarkMode(!darkMode)}><div>{darkMode && <Ban />}<Bolt /></div></button>);
}

const Layout = ({ children }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const folders = useStaticQuery(graphql`
     {
        allDirectory(sort: {fields: base}, filter: {base: {nin: "photos"}}) {
          edges {
            node {
              id
              base
            }
          }
        }
      }     
    `);

    return (<div className={Styles.container}>
        <DarkModeToggle className={Styles.headerThemeToggle} />

        <aside className={mobileMenuOpen ? Styles.mobileMenuOpen : Styles.mobileMenuClosed}>
            <header>
                <h1><Link to="/">Jack O'Mahony</Link><button className={Styles.menuButton} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}><Menu /></button>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <Link activeClassName={Styles.active} to="/">Photos</Link>
                        </li>
                        <ul className={Styles.subMenu}>
                            {
                                folders.allDirectory.edges.map(({ node }) => <li key={node.id}><Link activeClassName={Styles.active} to={`/${node.base}/`}>{node.base}</Link></li>)
                            }
                        </ul>
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
                    <DarkModeToggle className={Styles.footerThemeToggle} />
                </nav>
            </footer>
        </aside>
        <main>
            {children}
        </main>
    </div>)
}

export default Layout;