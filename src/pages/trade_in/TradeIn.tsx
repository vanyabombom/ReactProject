
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
        alert("Trade-in request submitted! We will contact you shortly.");
    };

    return (
        <div className="trade-in-container">
            <div className="trade-in-header" data-aos="fade-down">
                <h1>Trade-in Calculator</h1>
                <p className="hero-subtitle">Upgrade your device. Get credit for your old one.</p>
            </div>

            <div className="trade-in-content">
                <div className="trade-in-card" data-aos="fade-right">
                    <h2><i className="bi bi-phone"></i> Your Current Device</h2>
                    <div className="select-group">
                        <label>Select model</label>
                        <select
                            className="device-select"
                            value={selectedOldId}
                            onChange={(e) => setSelectedOldId(e.target.value)}
                        >
                            <option value="">Select a device...</option>
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
                                Estimated Value: <span style={{ color: '#4ade80' }}>{tradeInValue.toLocaleString()} UAH</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="trade-in-card" data-aos="fade-left">
                    <h2><i className="bi bi-bag-plus"></i> Device You Want</h2>
                    <div className="select-group">
                        <label>Select model</label>
                        <select
                            className="device-select"
                            value={selectedNewId}
                            onChange={(e) => setSelectedNewId(e.target.value)}
                        >
                            <option value="">Select a device...</option>
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
                            <div className="price-value">Store Price: {newProduct.price.toLocaleString()} UAH</div>
                        </div>
                    )}
                </div>

                {oldProduct && newProduct && (
                    <div className="trade-in-summary">
                        <h2>Summary</h2>

                        {oldProduct.price > newProduct.price ? (
                            <div className="error-message" style={{ color: '#ff4444', textAlign: 'center', padding: '1rem', border: '1px solid #ff4444', borderRadius: '8px', background: 'rgba(255, 68, 68, 0.1)' }}>
                                <i className="bi bi-exclamation-triangle" style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}></i>
                                You cannot trade-in a more expensive device for a cheaper one.
                                <br />
                                Please select a higher value device for your upgrade.
                            </div>
                        ) : (
                            <>
                                <div className="calculation-row">
                                    <span className="price-label">New Device Price</span>
                                    <span className="price-value">{newProduct.price.toLocaleString()} UAH</span>
                                </div>

                                <div className="calculation-row">
                                    <span className="price-label">Trade-in Credit (-10%)</span>
                                    <span className="price-value" style={{ color: '#4ade80' }}>- {tradeInValue.toLocaleString()} UAH</span>
                                </div>

                                <div className="calculation-row">
                                    <span className="price-label">You Pay Only</span>
                                    <span className="final-price">{finalPrice.toLocaleString()} UAH</span>
                                </div>

                                <button className="trade-btn" onClick={handleSubmit}>
                                    Request Trade-in
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
