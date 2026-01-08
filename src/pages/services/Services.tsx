
import './ui/Services.css';

export default function Services() {
    const handleBook = (service: string) => {
        alert(`Booking request for ${service} received! We will contact you shortly.`);
    };

    return (
        <div className="services-container">
            <div className="services-header">
                <h1 className="services-title" data-aos="fade-right">Our Services</h1>
                <p className="services-subtitle" data-aos="fade-left">Professional solutions for your tech needs</p>
            </div>

            <div className="services-grid">
                <div className="service-card" data-aos="zoom-in" data-aos-delay="0">
                    <div className="icon-wrapper">
                        <i className="bi bi-tools"></i>
                    </div>
                    <h2>Device Repair</h2>
                    <p>Professional repair services for iPhone, iPad, Mac, and Apple Watch using original parts.</p>
                    <div className="service-price-list">
                        <div className="price-item">
                            <span>Screen Replacement</span>
                            <span>from 1200 UAH</span>
                        </div>
                        <div className="price-item">
                            <span>Battery Replacement</span>
                            <span>from 800 UAH</span>
                        </div>
                        <div className="price-item">
                            <span>Diagnostic</span>
                            <span>Free</span>
                        </div>
                    </div>
                    <button className="book-btn" onClick={() => handleBook("Repair")}>Book Repair</button>
                </div>

                <div className="service-card" data-aos="zoom-in" data-aos-delay="100">
                    <div className="icon-wrapper">
                        <i className="bi bi-gear-wide-connected"></i>
                    </div>
                    <h2>Setup & Transfer</h2>
                    <p>Get your new device ready to use properly. Secure data transfer and account configuration.</p>
                    <div className="service-price-list">
                        <div className="price-item">
                            <span>Full Setup</span>
                            <span>500 UAH</span>
                        </div>
                        <div className="price-item">
                            <span>Data Transfer</span>
                            <span>400 UAH</span>
                        </div>
                        <div className="price-item">
                            <span>iOS Update</span>
                            <span>200 UAH</span>
                        </div>
                    </div>
                    <button className="book-btn" onClick={() => handleBook("Setup")}>Book Setup</button>
                </div>

                <div className="service-card" data-aos="zoom-in" data-aos-delay="200">
                    <div className="icon-wrapper">
                        <i className="bi bi-chat-square-text"></i>
                    </div>
                    <h2>Expert Consultation</h2>
                    <p>Need help choosing? Our experts will help you find the perfect device for your needs.</p>
                    <div className="service-price-list">
                        <div className="price-item">
                            <span>Device Selection</span>
                            <span>Free</span>
                        </div>
                        <div className="price-item">
                            <span>Ecosystem Training</span>
                            <span>600 UAH/hr</span>
                        </div>
                        <div className="price-item">
                            <span>Technical Support</span>
                            <span>300 UAH</span>
                        </div>
                    </div>
                    <button className="book-btn" onClick={() => handleBook("Consultation")}>Book Consultation</button>
                </div>
            </div>
        </div>
    );
}
