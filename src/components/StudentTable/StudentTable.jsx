function StudentTable({students}){
    return(
        <div>
         <h2>Registered Students</h2>

        {students.length === 0 ? (
          <p>Students are not found.</p>
        ) : (
          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>SI.No</th>
                <th>Student Name</th>
                <th>Email</th>
                <th>Phone</th>
                {/* <th>Branch</th> */}
                <th>CGPA</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{student.studentName}</td>
                  <td>{student.email}</td>
                  <td>{student.contact}</td>
                  {/* <td>{student.branch}</td> */}
                  <td>{student.cgpa}</td>
                </tr>
              ))
              }
            </tbody>
          </table>
        )
    }
    </div>
    );
}
export default StudentTable;