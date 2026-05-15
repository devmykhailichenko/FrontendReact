import { useContext } from 'react';
import { Link } from "react-router-dom";

import { ThemeContext } from '../../context/ThemeContext.jsx';

import './Header.css';

export default function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`header header-${theme}`}>
            <span>Redux / Routing</span>

            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/create-post">New Post</Link>

            <button onClick={toggleTheme}>Light</button>
        </div>
    )
}