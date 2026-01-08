import { Link, Outlet, useLocation } from "react-router-dom";
import './ui/Layout.css';
import { useContext, useEffect, } from "react";
import { AppContext } from "../app_context/AppContext";

export default function Layout() {
    const { user, cart } = useContext(AppContext);
    const profileTitle = user == null ? "Вхід" : "Кабінет";
    const location = useLocation();


    useEffect(() => {
        // @ts-ignore
        if (window.AOS) {
            // @ts-ignore
            window.AOS.init({
                duration: 800,
                once: true,
                offset: 50
            });
        }
    }, [location]);

    return <>
        <header className="app-header">
            <Link to="/" className="brand-logo">
                <img src="/img/black-logo.png" alt="4epuShop Logo" className="logo-img" />
            </Link>

            {/* Search Bar */}


            {/* Navigation Actions */}
            <nav className="nav-actions">
                <Link to="/trade-in" className="nav-link-custom">
                    Trade-In
                </Link>

                <Link to="/services" className="nav-link-custom">
                    Послуги
                </Link>

                <Link to="/auth" className="nav-link-custom" title={profileTitle}>
                    <i className="bi bi-person-circle" style={{ fontSize: '1.2rem', marginRight: '5px' }}></i>
                    {user ? user.name : "Увійти"}
                </Link>

                <Link to="/cart" className="nav-link-custom position-relative" title="Кошик">
                    <i className="bi bi-bag" style={{ fontSize: '1.2rem' }}></i>
                    {cart.items.length > 0 &&
                        <span style={{
                            position: 'absolute', top: -5, right: -10,
                            background: 'var(--primary-color)', color: 'white',
                            fontSize: '0.7rem', padding: '2px 6px', borderRadius: '10px'
                        }}>
                            {cart.items.reduce((n, item) => n + item.cnt, 0)}
                        </span>
                    }
                </Link>
            </nav>
        </header>

        <main className="container">
            <Outlet />
        </main>

        <footer className="app-footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <img src="/img/black-logo.png" alt="4epuShop Logo" className="footer-logo" />
                        <p className="footer-desc">
                            Ваше місце для преміальної електроніки. Відкрийте для себе найновіші пристрої та послуги ремонту в 4epuShop.
                        </p>
                        <div className="social-links">
                            <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                            <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                            <a href="#" aria-label="Telegram"><i className="bi bi-telegram"></i></a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h3>Магазин</h3>
                        <ul>
                            <li><Link to="/section/iphone">iPhone</Link></li>
                            <li><Link to="/section/mac">Mac</Link></li>
                            <li><Link to="/section/ipad">iPad</Link></li>
                            <li><Link to="/section/watch">Watch</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Компанія</h3>
                        <ul>
                            <li><Link to="/services">Послуги</Link></li>
                            <li><Link to="/trade-in">Trade-In</Link></li>
                            <li><Link to="/about">Про нас</Link></li>
                            <li><Link to="/contact">Контакти</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Інформація</h3>
                        <ul>
                            <li><Link to="/privacy">Політика конфіденційності</Link></li>
                            <li><Link to="/terms">Умови обслуговування</Link></li>
                            <li><Link to="/warranty">Гарантія</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 4epuShop. Всі права захищено.</p>
                </div>
            </div>
        </footer>
    </>;
}