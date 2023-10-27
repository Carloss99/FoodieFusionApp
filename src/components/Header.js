import { Link } from "react-router-dom"

const Header = (props) => {
    return(
        <div className="header">
            <nav>
                <Link to="/">
                    <div>Home</div>
                </Link>
                <Link to="/about">
                    <div>About</div>
                </Link>
                <Link to="/profile">
                    <div>Profile</div>
                </Link>
            </nav>
        </div>
    )
}

export default Header