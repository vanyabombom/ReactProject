import { useContext } from 'react';
import './ui/Cart.css';
import { AppContext } from '../../features/app_context/AppContext';
import CartItemCard from './ui/CartItemCard';

export default function Cart() {
    const { cart } = useContext(AppContext);

    return <>
        <div className="cart-header">
            <h1 className="cart-title">
                <i className="bi bi-cart"></i>&thinsp;My Cart
            </h1>
            <div className="cart-stats">
                <span>{cart.items.length} items</span>
                <span>{cart.items.reduce((s, ci) => s + ci.cnt, 0)} total units</span>
                <span className="cart-stat-highlight">Total: {cart.items.reduce((s, ci) => s + ci.price, 0).toMoney()} UAH</span>
            </div>
        </div>

        <div>
            {cart.items.map(cartItem => <CartItemCard key={cartItem.product.id} cartItem={cartItem} />)}
        </div>
    </>;
}