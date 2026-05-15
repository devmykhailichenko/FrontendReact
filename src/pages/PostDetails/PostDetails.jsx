import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getPostById } from "../../store/thunks/postsThunk.js";

export default function PostDetails() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { id } = useParams();
    const { selectedPost, loading, error } = useSelector(state => state.posts);
    const state = useSelector(state => state);
    console.log(state, loading, error);

    useEffect(() => {
        if(id) {
            dispatch(getPostById(id));
        }
    }, [id]);

    const backToPosts = () => {
        navigate("/posts");
    }

    if(loading) {
        return <h1>Post loading...</h1>
    }

    if(error) {
        return <h1>Error: {error}</h1>
    }

    return (
        <section className="details-page">
            <div className="card details-card">
                <div className="details-content">
                    <span className="details-label">
                        Post details
                    </span>

                    <h1 className="details-title">
                        {selectedPost?.title}
                    </h1>

                    <p className="details-description">
                        {selectedPost?.body}
                    </p>

                    <div className="actions">
                        <button
                            className="secondary-btn"
                            onClick={backToPosts}
                        >
                            Back to post
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}