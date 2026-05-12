import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { addToCart } from "../../store/cart/cartActions.js";

export default function ProductDetails() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { id } = useParams();
    const { products } = useSelector(state => state.products);

    const product = products.find(product => product.id === +id);

    const backToProducts = () => {
        navigate("/products");
    }

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));

        backToProducts();
    }

    return (
        <section className="details-page">
            <div className="card details-card">
                <div className="details-content">
                    <span className="details-label">
                        Product Information
                    </span>

                    <h1 className="details-title">
                        {product.title}
                    </h1>

                    <p className="details-description">
                        {product.description}
                    </p>

                    <div className="details-price">
                        {product.price}$
                    </div>

                    <div className="actions">
                        <button onClick={() => handleAddToCart(product)}>
                            Add to cart
                        </button>

                        <button
                            className="secondary-btn"
                            onClick={backToProducts}
                        >
                            Back to products
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}