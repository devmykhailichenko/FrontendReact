import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getPosts } from "../../store/thunks/postsThunk.js";

import "./Posts.scss";

export default function Posts() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    const { items, loading, error } = useSelector(state => state.posts);

    if(loading) {
        return <h1 className="posts-message">Posts loading...</h1>
    }

    if(error) {
        return <h1 className="posts-message posts-message--error">Error: {error}</h1>
    }

    return (
        <section className="posts">
            <h1 className="posts__title">Posts</h1>

            <div className="posts__grid">
                {items.map((post) => (
                    <div key={post.id} className="posts-card">
                        <h2 className="posts-card__title">{post.title}</h2>

                        <p className="posts-card__text">{post.body}</p>

                        <Link to={`/posts/${post.id}`} className="posts-card__link">View details</Link>
                    </div>
                ))}
            </div>
        </section>
    )
}