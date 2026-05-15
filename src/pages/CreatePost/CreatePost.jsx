import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { createPost } from "../../store/thunks/postsThunk.js";

export default function CreatePost() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { loading, error } = useSelector(state => state.posts);

    if(error) {
        return <h1>Error: {error}</h1>
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await dispatch(createPost({
            title,
            body: description,
            userId: 1
        }));

        navigate('/posts');
    }

    return (
        <section>
            <h1 className="page-title">Create new Post</h1>

            {loading && (<h1>Wait for creation...</h1>)}

            <form onSubmit={handleSubmit}>
                <div className="products-grid">
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
                </div>

                <button className="button" type="submit" disabled={loading}>
                    {loading ? "Creating..." : "Create"}
                </button>
            </form>
        </section>
    )
}