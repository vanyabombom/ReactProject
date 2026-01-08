
import './ui/Services.css';

export default function Services() {
    const handleBook = (service: string) => {
        alert(`Запит на бронювання ${service} отримано! Ми зв'яжемося з вами найближчим часом.`);
    };

    return (
        <div className="services-container">
            <div className="services-header">
                <h1 className="services-title" data-aos="fade-right">Наші послуги</h1>
                <p className="services-subtitle" data-aos="fade-left">Професійні рішення для вашої техніки</p>
            </div>

            <div className="services-grid">
                {/* Repair Service */}
                <div className="service-card" data-aos="zoom-in" data-aos-delay="0">
                    <div className="icon-wrapper">
                        <i className="bi bi-tools"></i>
                    </div>
                    <h2>Ремонт пристроїв</h2>
                    <p>Професійний ремонт iPhone, iPad, Mac та Apple Watch з використанням оригінальних запчастин.</p>
                    <div className="service-price-list">
                        <div className="price-item">
                            <span>Заміна екрану</span>
                            <span>від 1200 грн</span>
                        </div>
                        <div className="price-item">
                            <span>Заміна акумулятора</span>
                            <span>від 800 грн</span>
                        </div>
                        <div className="price-item">
                            <span>Діагностика</span>
                            <span>Безкоштовно</span>
                        </div>
                    </div>
                    <button className="book-btn" onClick={() => handleBook("Repair")}>Замовити ремонт</button>
                </div>

                {/* Setup Service */}
                <div className="service-card" data-aos="zoom-in" data-aos-delay="100">
                    <div className="icon-wrapper">
                        <i className="bi bi-gear-wide-connected"></i>
                    </div>
                    <h2>Налаштування та перенесення</h2>
                    <p>Підготуйте новий пристрій до використання. Безпечне перенесення даних та налаштування облікових записів.</p>
                    <div className="service-price-list">
                        <div className="price-item">
                            <span>Повне налаштування</span>
                            <span>500 грн</span>
                        </div>
                        <div className="price-item">
                            <span>Перенесення даних</span>
                            <span>400 грн</span>
                        </div>
                        <div className="price-item">
                            <span>Оновлення iOS</span>
                            <span>200 грн</span>
                        </div>
                    </div>
                    <button className="book-btn" onClick={() => handleBook("Setup")}>Замовити налаштування</button>
                </div>

                {/* Consultation */}
                <div className="service-card" data-aos="zoom-in" data-aos-delay="200">
                    <div className="icon-wrapper">
                        <i className="bi bi-chat-square-text"></i>
                    </div>
                    <h2>Експертна консультація</h2>
                    <p>Потрібна допомога у виборі? Наші експерти допоможуть знайти ідеальний пристрій для ваших потреб.</p>
                    <div className="service-price-list">
                        <div className="price-item">
                            <span>Підбір пристрою</span>
                            <span>Безкоштовно</span>
                        </div>
                        <div className="price-item">
                            <span>Навчання екосистемі</span>
                            <span>600 грн/год</span>
                        </div>
                        <div className="price-item">
                            <span>Технічна підтримка</span>
                            <span>300 грн</span>
                        </div>
                    </div>
                    <button className="book-btn" onClick={() => handleBook("Consultation")}>Замовити консультацію</button>
                </div>
            </div>
        </div>
    );
}
