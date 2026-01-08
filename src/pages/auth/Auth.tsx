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
        <h1 className="auth-header">Authentication</h1>

        <div className="input-wrapper">
            <i className="bi bi-key"></i>
            <input type="text" className="form-control" placeholder="Login"
                value={login} onChange={e => setLogin(e.target.value)}
                aria-label="Login" />
        </div>

        <div className="input-wrapper">
            <i className="bi bi-unlock2"></i>
            <input type="password" className="form-control" placeholder="Password"
                value={password} onChange={e => setPassword(e.target.value)}
                aria-label="Password" />
        </div>

        <div className="mb-4">
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input type="checkbox" checked={remember}
                    onChange={e => setRemember(e.target.checked)} />
                <span style={{ color: 'var(--text-secondary)' }}>Remember me</span>
            </label>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SiteButton
                text="Sign In"
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

    return <div className="auth-container profile-card">
        <h1 className="auth-header">User Profile</h1>

        <img src={user?.imageUrl} alt={user?.login} className="profile-avatar" />
        <h2 className="profile-name">{user?.name}</h2>

        <div className="profile-details">
            <div className="profile-row">
                <span className="profile-label">Name</span>
                <span className="profile-value">{user?.name} <i className="bi bi-pencil ms-2"></i></span>
            </div>
            <div className="profile-row">
                <span className="profile-label">Email</span>
                <span className="profile-value">{user?.email} <i className="bi bi-pencil ms-2"></i></span>
            </div>
            <div className="profile-row">
                <span className="profile-label">Address</span>
                <span className="profile-value">{user?.address} <i className="bi bi-pencil ms-2"></i></span>
            </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SiteButton
                text="Sign Out"
                buttonType={ButtonTypes.Blue}
                action={exitAuth} />
        </div>
    </div>;
}