import { useEffect, useState } from "react";
import "./StudentTable.css";
import { Link } from "react-router-dom";
import api from "../../API/api"; // ✅ Import api

function StudentTable() {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(1); // ✅ Add page state
  const [totalPages, setTotalPages] = useState(1);
  const limit = 5;

  useEffect(() => {
    fetchStudents(page); // ✅ Call the right function
  }, ); // ✅ Fixed: added  dependency

  const fetchStudents = async (pageNumber) => {
    try {
      const res = await api.get(`/students?page=${pageNumber}&limit=${limit}`);
      setStudents(res.data.students || []);
      setTotalPages(res.data.totalPages || 1); // ✅ Capital P
      setPage(res.data.currentPage || pageNumber);
    } catch (error) {
      console.log("error fetching students:", error);
    }
  };

  return (
    <div>
      <h2>Registered Students</h2>

      {students.length === 0 ? (
        <p>Students are not found.</p>
      ) : (
        <>
          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>SI.No</th>
                <th>ID</th>
                <th>Student Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>CGPA</th>
                <th>Profile</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student, index) => (
                <tr key={student._id}> {/* ✅ MongoDB uses _id */}
                  <td>{(page - 1) * limit + index + 1}</td>
                  <td>{student._id}</td> {/* ✅ _id not id */}
                  <td>{student.studentName}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td> {/* ✅ phone not contact */}
                  <td>{student.Cgpa}</td> {/* ✅ Match your DB field */}
                  <td>
                    <img
                      src={`http://localhost:5000/uploads/${student.image}`} // ✅ Check port + folder name
                      width="80"
                      height="80" // ✅ Fixed typo: heigth
                      alt={student.studentName}
                    />
                  </td>
                  <td>
                    <Link to={`/student/${student._id}`}> {/* ✅ _id not id */}
                      <button>View</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>
              Previous
            </button>
            <span> Page {page} of {totalPages} </span>
            <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
export default StudentTable;