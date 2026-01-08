
import { useState } from 'react';
import { allProducts } from '../../entities/product/api/ProductDao';
import './ui/TradeIn.css';

export default function TradeIn() {
    const [selectedOldId, setSelectedOldId] = useState<string>("");
    const [selectedNewId, setSelectedNewId] = useState<string>("");

    const oldProduct = allProducts.find(p => p.id === selectedOldId);
    const newProduct = allProducts.find(p => p.id === selectedNewId);

    const tradeInValue = oldProduct
        ? Math.floor(oldProduct.price * 0.9)
        : 0;

    const finalPrice = newProduct
        ? newProduct.price - tradeInValue
        : 0;


    const handleSubmit = () => {
        alert("Запит на Trade-in відправлено! Ми зв'яжемося з вами найближчим часом.");
    };

    return (
        <div className="trade-in-container">
            <div className="trade-in-header" data-aos="fade-down">
                <h1>Калькулятор Trade-in</h1>
                <p className="hero-subtitle">Оновіть свій пристрій. Отримайте кредит за старий.</p>
            </div>

            <div className="trade-in-content">
                <div className="trade-in-card" data-aos="fade-right">
                    <h2><i className="bi bi-phone"></i> Ваш поточний пристрій</h2>
                    <div className="select-group">
                        <label>Оберіть модель</label>
                        <select
                            className="device-select"
                            value={selectedOldId}
                            onChange={(e) => setSelectedOldId(e.target.value)}
                        >
                            <option value="">Оберіть пристрій...</option>
                            {allProducts.map(p => (
                                <option key={p.id} value={p.id}>
                                    {p.name}
                                </option>
                            ))}
                        </select>

                    </div>

                    {oldProduct && (
                        <div className="device-preview">
                            <img src={oldProduct.imageUrl} alt={oldProduct.name} />
                            <div className="price-value">
                                Оціночна вартість: <span style={{ color: '#4ade80' }}>{tradeInValue.toLocaleString()} грн</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="trade-in-card" data-aos="fade-left">
                    <h2><i className="bi bi-bag-plus"></i> Бажаний пристрій</h2>
                    <div className="select-group">
                        <label>Оберіть модель</label>
                        <select
                            className="device-select"
                            value={selectedNewId}
                            onChange={(e) => setSelectedNewId(e.target.value)}
                        >
                            <option value="">Оберіть пристрій...</option>
                            {allProducts.map(p => (
                                <option key={p.id} value={p.id}>
                                    {p.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {newProduct && (
                        <div className="device-preview">
                            <img src={newProduct.imageUrl} alt={newProduct.name} />
                            <div className="price-value">Ціна в магазині: {newProduct.price.toLocaleString()} грн</div>
                        </div>
                    )}
                </div>

                {oldProduct && newProduct && (
                    <div className="trade-in-summary">
                        <h2>Підсумок</h2>

                        {oldProduct.price > newProduct.price ? (
                            <div className="error-message" style={{ color: '#ff4444', textAlign: 'center', padding: '1rem', border: '1px solid #ff4444', borderRadius: '8px', background: 'rgba(255, 68, 68, 0.1)' }}>
                                <i className="bi bi-exclamation-triangle" style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}></i>
                                Ви не можете обміняти дорожчий пристрій на дешевший.
                                <br />
                                Будь ласка, оберіть дорожчий пристрій для оновлення.
                            </div>
                        ) : (
                            <>
                                <div className="calculation-row">
                                    <span className="price-label">Ціна нового пристрою</span>
                                    <span className="price-value">{newProduct.price.toLocaleString()} грн</span>
                                </div>

                                <div className="calculation-row">
                                    <span className="price-label">Кредит Trade-in (-10%)</span>
                                    <span className="price-value" style={{ color: '#4ade80' }}>- {tradeInValue.toLocaleString()} грн</span>
                                </div>

                                <div className="calculation-row">
                                    <span className="price-label">До сплати</span>
                                    <span className="final-price">{finalPrice.toLocaleString()} грн</span>
                                </div>

                                <button className="trade-btn" onClick={handleSubmit}>
                                    Замовити обмін
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
