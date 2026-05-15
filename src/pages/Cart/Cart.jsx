import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { removeFromCart, clearCart } from "../../store/slices/cartSlice.js";

function CartProduct({ product, removeFromCart }) {
    return (
        <div className="card cart-card">
            <div>
                <h2>{product.title}</h2>
                <p className="cart-description">
                    Premium product with modern design and high quality materials.
                </p>
            </div>

            <div className="cart-bottom">
                <h3 className="price">{product.price}$</h3>

                <div className="actions">
                    <Link to={`/products/${product.id}`}>
                        <button className="secondary-btn">
                            View product
                        </button>
                    </Link>

                    <button onClick={() => removeFromCart(product.id)}>
                        Remove
                    </button>
                </div>
            </div>
        </div>
    )
}

export default function Cart() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { items } = useSelector(state => state.cart);
    console.log(items);

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    }

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const goBack = () => {
        navigate(-1);
    };

    return (
        <section className="cart-page">
            <h1 className="page-title">Cart Page</h1>

            {items.length === 0 && (
                <div className="empty-cart">
                    <h2>Your cart is empty</h2>
                    <p>Add some products to continue shopping.</p>
                </div>
            )}

            <div className="cart-list">
                {items.map(product => (
                    <CartProduct
                        key={product.id}
                        product={product}
                        removeFromCart={handleRemoveFromCart}
                    />
                ))}
            </div>

            {items.length > 0 && (
                <div className="cart-actions">
                    <button onClick={handleClearCart}>
                        Reset Cart
                    </button>

                    <button
                        className="secondary-btn"
                        onClick={goBack}
                    >
                        Go Back
                    </button>
                </div>
            )}
        </section>
    )
}