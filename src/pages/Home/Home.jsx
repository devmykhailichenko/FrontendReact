import Counter from '../../components/Counter/Counter.jsx';

import logo from "../../assets/img/Vite.png";
import react_svg from "../../assets/img/React.svg";

import ReactLogo from "../../assets/img/React.svg?react";

export default function Home() {
    return (
        <div>
            Products for entire family
            <img src={logo} alt="logo" />
            <img src={react_svg} alt="logo" />
            <ReactLogo />

            <Counter />
        </div>
    )
}