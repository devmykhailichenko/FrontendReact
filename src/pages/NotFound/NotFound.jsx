import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            404 – Not found :(
            <Link to="/">Back to home</Link>
        </div>
    )
}