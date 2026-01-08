import { useContext } from "react";
import type CartItem from "../../../entities/cart/model/CartItem";
import './CartItemCard.css';
import { AppContext } from "../../../features/app_context/AppContext";
import CartDao from "../../../entities/cart/api/CartDao";
import ButtonTypes from "../../../features/buttons/types/ButtonTypes";

export default function CartItemCard({ cartItem }: { cartItem: CartItem }) {
    const { cart, setCart, showModal } = useContext(AppContext);

    const incClick = () => {
        // задача: змінити кількість замовлення у {cartItem} та внести зміни
        // до загального кошику через виклик {setCart}
        if (cartItem.product.stock && cartItem.product.stock <= cartItem.cnt) {
            return;
        }
        let newCart = { ...cart };
        let item = newCart.items.find(ci => ci.product.id == cartItem.product.id);
        if (item) {
            item.cnt += 1;
            CartDao.calcPrices(newCart);
            // item.price = item.product.price * item.cnt;
            // newCart.price = newCart.items.reduce((s,ci) => s + ci.price, 0.0);
            setCart(newCart);
        }
    };
    const decClick = () => {
        // задача: реалізувати обмеження: кількість не можна зменшити до 0, а також
        // збільшити понад {stock} якщо його зазначено
        if (cartItem.cnt <= 1) {
            return;
        }
        let newCart = { ...cart };
        let item = newCart.items.find(ci => ci.product.id == cartItem.product.id);
        if (item) {
            item.cnt -= 1;
            CartDao.calcPrices(newCart);
            setCart(newCart);
        }
    };
    const removeClick = () => {
        showModal({
            title: "Незворотня дія",
            message: "Після видалення відновити позицію можна лише з прайсу. Підтверджуєте видалення?",
            buttons: [
                {
                    title: "Так", callback: () => {
                        setCart({
                            ...cart,
                            items: cart.items.filter(ci => ci.product.id !== cartItem.product.id),
                            price: cart.price - cartItem.price
                        });
                    }
                },
                { title: "Ні", type: ButtonTypes.Gray },
            ]
        });
    };

    return <div className="cart-item">
        <img
            src={cartItem.product.imageUrl}
            alt={cartItem.product.name}
            className="cart-item-img"
        />

        <div className="cart-item-info">
            <h3>{cartItem.product.name}</h3>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Гарантія 1 рік: {Math.round(cartItem.price * 0.1).toMoney()} грн</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Гарантія 2 роки: {Math.round(cartItem.price * 0.15).toMoney()} грн</div>
        </div>

        <div className="cart-item-actions">
            <button className="qty-btn" onClick={decClick}>-</button>
            <span style={{ fontWeight: 600, minWidth: '20px', textAlign: 'center' }}>{cartItem.cnt}</span>
            <button className="qty-btn" onClick={incClick}>+</button>
        </div>

        <div className="cart-item-price">
            <div>{cartItem.price.toMoney()} грн</div>
            {cartItem.product.discount &&
                <div style={{ textDecoration: 'line-through', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    {(cartItem.price + (cartItem.product.discount ?? 0) * cartItem.cnt).toMoney()} грн
                </div>
            }
        </div>

        <i className="bi bi-trash3" role="button" onClick={removeClick} style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', cursor: 'pointer' }}></i>
    </div>;
}