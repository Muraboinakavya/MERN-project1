import {Link} from "react-router-dom";
   import api from "../../API/api"; 
import StudentTable from "../components/StudentTable/StudentTable"
function Students(){
    return(
        <>
        <h1>Student Management</h1>
        <p>Manage all registered students here</p>
        <Link to="/Register">
        <button>
            Add New Student
        </button>
        </Link>
        <StudentTable/>
        </>
    );
}
export default Students;