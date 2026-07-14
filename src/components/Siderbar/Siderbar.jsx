import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";
import "./sidebar.css"
function Sidebar(){
    return(
        <div className="side">
        <ul>
            <NavLink to="/Dashboard"
            className={({isActive}) =>
            isActive ? "active" : ""}>
            <li>Dashboard</li>
            </NavLink>
            <br></br>
            <Link to="/Student">
            <li>Student</li><br></br>
            </Link>
            <Link to="/Companies">
            <li>Companies</li><br></br>
            </Link>
             <Link to="/Placement">
            <li>Placement</li><br></br>
            </Link>
            <Link to="/Reports">
            <li>Reports</li><br></br>
            </Link>
            <Link to="/Setting">
            <li>Setting</li><br></br>
            </Link>
            <Link to="/login">
            <li>Login</li>
            </Link>
            <Link to="/login">
            <li>Logout</li>
            </Link>
            <Link to="/Registration">
            <li>Registration</li>
            </Link>
        </ul>
        </div>
    );
}
export default Sidebar;