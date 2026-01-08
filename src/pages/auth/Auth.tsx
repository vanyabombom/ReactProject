import { useContext, useEffect, useState } from "react";
import SiteButton from "../../features/buttons/SiteButton";
import ButtonTypes from "../../features/buttons/types/ButtonTypes";
import UserDao from "../../entities/user/api/UserDao";
import { AppContext } from "../../features/app_context/AppContext";
import "./ui/Auth.css";

export default function Auth() {
    const { user } = useContext(AppContext);
    return user == null ? <AuthForm /> : <Profile />;
}

function AuthForm() {
    const { setUser, setBusy } = useContext(AppContext);

    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isFormValid, setFormValid] = useState<boolean>(false);
    const [remember, setRemember] = useState(true);

    useEffect(() => {
        setFormValid(login.length > 2 && password.length > 2);
    }, [login, password]);

    const onAuthClick = () => {
        setBusy(true);
        UserDao
            .authenticate(login, password)
            .then(res => {
                if (res == null) {
                    alert("У вході відмовлено");
                }
                else {
                    if (remember) {
                        window.localStorage.setItem("user-231", JSON.stringify(res));
                    }
                    setUser(res);
                }
            })
            .finally(() => {
                setBusy(false);
            });
    };

    return <div className="auth-container">
        <h1 className="auth-header">Аутентифікація</h1>

        <div className="input-wrapper">
            <i className="bi bi-key"></i>
            <input type="text" className="form-control" placeholder="Логін"
                value={login} onChange={e => setLogin(e.target.value)}
                aria-label="Login" />
        </div>

        <div className="input-wrapper">
            <i className="bi bi-unlock2"></i>
            <input type="password" className="form-control" placeholder="Пароль"
                value={password} onChange={e => setPassword(e.target.value)}
                aria-label="Password" />
        </div>

        <div className="mb-4">
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input type="checkbox" checked={remember}
                    onChange={e => setRemember(e.target.checked)} />
                <span style={{ color: 'var(--text-secondary)' }}>Запам'ятати мене</span>
            </label>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SiteButton
                text="Увійти"
                action={onAuthClick}
                buttonType={isFormValid ? ButtonTypes.Blue : ButtonTypes.Gray}
            />
        </div>
    </div>;
}

function Profile() {
    const { user, setUser } = useContext(AppContext);

    const exitAuth = () => {
        window.localStorage.removeItem("user-231");
        setUser(null);
    };

    return <div className="profile-dashboard">
        <div className="dashboard-sidebar">
            <div className="dashboard-card user-summary">
                <img src={user?.imageUrl} alt={user?.login} className="large-avatar" />
                <h2 className="user-name-large">{user?.name}</h2>
                <div className="user-email-small">{user?.email}</div>

                <SiteButton
                    text="Вийти"
                    buttonType={ButtonTypes.Gray}
                    action={exitAuth}
                />

                <div className="menu-list">
                    <div className="menu-item active">
                        <i className="bi bi-grid"></i>
                        <span>Огляд</span>
                    </div>
                    <div className="menu-item">
                        <i className="bi bi-bag"></i>
                        <span>Замовлення</span>
                    </div>
                    <div className="menu-item">
                        <i className="bi bi-heart"></i>
                        <span>Бажане</span>
                    </div>
                    <div className="menu-item">
                        <i className="bi bi-gear"></i>
                        <span>Налаштування</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="dashboard-content">
            <div className="dashboard-section-title">
                <span>Персональна інформація</span>
                <i className="bi bi-pencil-square" style={{ cursor: 'pointer', color: 'var(--primary-color)' }}></i>
            </div>

            <div className="info-grid">
                <div className="info-item">
                    <span className="info-label">Ім'я</span>
                    <div className="info-value">{user?.name}</div>
                </div>
                <div className="info-item">
                    <span className="info-label">Email</span>
                    <div className="info-value">{user?.email}</div>
                </div>
                <div className="info-item">
                    <span className="info-label">Телефон</span>
                    <div className="info-value">+380 99 123 45 67</div>
                </div>
                <div className="info-item">
                    <span className="info-label">Адреса доставки</span>
                    <div className="info-value">{user?.address}</div>
                </div>
            </div>

            <div className="dashboard-section-title">
                <span>Останні замовлення</span>
                <span style={{ fontSize: '0.9rem', color: 'var(--primary-color)', cursor: 'pointer' }}>Всі замовлення</span>
            </div>

            <div className="order-list">
                <div className="order-item">
                    <div className="order-info">
                        <h3>Замовлення #40291</h3>
                        <div className="order-meta">
                            <span>08 Січ 2026</span>
                            <span>•</span>
                            <span>3 товари</span>
                        </div>
                    </div>
                    <div className="order-total">
                        <strong>42 500 грн</strong>
                    </div>
                    <div className="order-status status-processing">
                        В обробці
                    </div>
                </div>

                <div className="order-item">
                    <div className="order-info">
                        <h3>Замовлення #39112</h3>
                        <div className="order-meta">
                            <span>25 Гру 2025</span>
                            <span>•</span>
                            <span>1 товар</span>
                        </div>
                    </div>
                    <div className="order-total">
                        <strong>1 200 грн</strong>
                    </div>
                    <div className="order-status status-delivered">
                        Доставлено
                    </div>
                </div>
            </div>
        </div>
    </div>;
}