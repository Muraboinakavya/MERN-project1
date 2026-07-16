import {Link} from "react-router-dom";
import StudentTable from "../../components/StudentTable/StudentTable"
function Students(){
    return(
        <>
        <h1>Student Management</h1>
        <p>Manage all registered students here</p>
        <Link to="/Registration">
        <button>
            Add New Student
        </button>
        </Link>
        <StudentTable/>
        </>
    );
}
export default Students;