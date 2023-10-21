import { Link } from "react-router-dom"

const Header = (props) => {
    return(
        <div className="header">
            <nav>
                <Link to="/">
                    <div>Home</div>
                </Link>
                <Link to="/reviews">
                    <div>Reviews</div>
                </Link>
                <Link to="/userreviews/login">
                    <div>Profile</div>
                </Link>
            </nav>
        </div>
    )
}

export default Header