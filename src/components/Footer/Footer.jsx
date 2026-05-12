import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext.jsx';

import './Footer.css';

export default function Footer() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`footer footer-${theme}`}>
            <span>Footer</span>
            <button onClick={toggleTheme}>Light</button>
        </div>
    )
}