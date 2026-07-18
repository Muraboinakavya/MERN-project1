import {Link} from "react-router-dom";
import StudentTable from "../../components/StudentTable/StudentTable"
function Students(){
    const [search,setSearch] = useState("");
    const filteredStudents = 
    Students.filter((student)=>
        studentName.toLowerCase().includes(search.toLowerCase())
    ||  student.email.toLowerCase().includes(search.toLowerCase())
    ||  student.cgpa.toLowerCase().includes(search.toLowerCase())
)
    return(
        <>
        <h1>Student Management</h1>
        <p>Manage all registered students here</p>
        <Link to="/Registration">
        <button>
            Add New Student
        </button>
        
        </Link>
        <input type="text"
        placeholder="Search Student...."
        value ={search}
        onChange={(e)=>setSearch(e.target.value)}/>
        <StudentTable/>
        <studentTable student ={ filteredStudents } deletestudent/>
        </>
    );
}
export default Students;