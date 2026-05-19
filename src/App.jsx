import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Cart from "./pages/Cart/Cart.jsx";
import Products from "./pages/Products/Products.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import Home from "./pages/Home/Home.jsx";
import FormRegular from "./pages/FormRegular/FormRegular.jsx";
import FormFormik from "./pages/FormFormik/FormFormik.jsx";
import Posts from "./pages/Posts/Posts.jsx";
import PostDetails from "./pages/PostDetails/PostDetails.jsx";
import CreatePost from "./pages/CreatePost/CreatePost.jsx";
import AboutMe from "./pages/AboutMe/AboutMe.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

export default function App() {
    return (
        <div className="app">
            <Header />

            <main className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDetails />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/about-me" element={<AboutMe />} />
                    <Route path="/posts/:id" element={<PostDetails />} />
                    <Route path="/create-post" element={<CreatePost />} />
                    <Route path="/form-regular" element={<FormRegular />} />
                    <Route path="/form-formik" element={<FormFormik />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>

            <Footer />
        </div>
    )
}