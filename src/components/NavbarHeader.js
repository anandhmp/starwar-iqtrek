import { NavLink } from "react-router-dom";

function Navbar() {
    return  <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <div className="navbar-brand">
        <h4>Starwar Fanpage</h4>
    </div>
    <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
        <span className="navbar-toggler-icon"></span>
    </button>
    <div
        className="collapse navbar-collapse mr-auto"
        id="navbarNav"
        style={{ float: "left" }}
    >
        <ul className="navbar-nav ml-auto" style={{ color: "#ffffff" }}>
            <li className="nav-item">
                <NavLink to={"/planets"} className="nav-link">
                    Planets
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={"/spaceship"} className="nav-link">
                    Spaceship
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={"/people"} className="nav-link">
                    People
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={"/vehicle"} className="nav-link">
                    Vehicle
                </NavLink>
            </li>
        </ul>
    </div>
</nav>
}

export default Navbar;