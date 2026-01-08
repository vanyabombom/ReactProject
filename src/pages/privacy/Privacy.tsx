import { useEffect } from "react";
import './ui/Privacy.css';


export default function Privacy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <>
        <h1 className="display-4"><i className="bi bi-shield-check"></i> Privacy Policy</h1>
        <div className="privacy-content" style={{ marginTop: '2rem' }}>
            <p>Last updated: January 2026</p>

            <h2>1. Introduction</h2>
            <p>Welcome to 4epuShop. We respect your privacy and are committed to protecting your personal data.</p>

            <h2>2. Data We Collect</h2>
            <p>We may collect personal identification information (Name, email address, phone number, etc.) when you visit our site or make a purchase.</p>

            <h2>3. How We Use Your Data</h2>
            <p>We use your data to process orders, manage your account, and email you with special offers on other products and services we think you might like.</p>

            <h2>4. Contact Us</h2>
            <p>If you have any questions about our privacy policy, the data we hold on you, or you would like to exercise one of your data protection rights, please do not hesitate to contact us.</p>
        </div>
    </>;
}
/*
Д.З. Впровадити у власний курсовий проєкт 
систему прелоадера
Прикладати скріншоти проєкту
*/