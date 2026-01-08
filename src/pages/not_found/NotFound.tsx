import { Link } from "react-router-dom";
import "./ui/NotFound.css";

export default function NotFound() {
    return (
        <div className="not-found-wrapper">
            <h1 className="not-found-404">404</h1>
            <h2 className="not-found-title">Page Not Found</h2>
            <p className="not-found-text">
                Oops! The page you are looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="btn btn-primary">
                <i className="bi bi-house-door" style={{ marginRight: '8px' }}></i>
                Back to Home
            </Link>
        </div>
    );
}