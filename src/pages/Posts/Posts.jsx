import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getPosts } from "../../store/thunks/postsThunk.js";

export default function Posts() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    const { items, loading, error } = useSelector(state => state.posts);

    if(loading) {
        return <h1>Posts loading...</h1>
    }

    if(error) {
        return <h1>Error: {error}</h1>
    }

    return (
        <section>
            <h1 className="page-title">Posts</h1>

            <div className="products-grid">
                {items.map((post) => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>

                        <p>{post.body}</p>

                        <Link to={`/posts/${post.id}`}>View details</Link>
                    </div>
                ))}
            </div>
        </section>
    )
}