import { Link } from "react-router-dom";

export function NavBar() {
    return <nav>
        <ul>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/form'}>Post something</Link></li>
        </ul>

    </nav>;
}