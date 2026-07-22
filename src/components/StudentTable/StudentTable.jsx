// import { useEffect, useState } from "react";
// import "./StudentTable.css";
// import { Link } from "react-router-dom";
// import api from "../../API/api";

 
// function StudentTable(){
//   const [students, setStudents] = useState([]);
//   const[page,setPage] = useState(1);
//   const limit = 5;
//   const[totalpages,setTotalPages] = useState();
//   useEffect(()=>{
//   fetchStudents(page);
    
//   },);
//   const fetchStudents =async (pageNumber) => {
//     try{
//       const res = await api.get(`/students?page=${pageNumber}&limit=${limit}`);
//       setStudents(res.data.students || [])
//       setTotalPages(res.data.totalpages || 1);
//       // setStudents(res.data.s(pageNumbertudents);
//       setPage(res.data.currentPage || pageNumber);
//     }catch(error){
//      console.log("error fectching students:",error);
//     }
//   };
//   const  deleteStudent = async (id) => {
//     try{
//       await api.delete(`/students/${id}`)
//       fetchStudents(page);
//     }catch(error){
//       console.log(error)

//     }
//   };

  
//   // Console.log(students);
//     return(
//         <div>
//          <h2>Registered Students</h2>

//         {students.length === 0 ? (
//           <p>Students are not found.</p>
//         ) : (
//           <table border="1" cellPadding="10">
//             <thead>
//               <tr>
//                 <th>SI.No</th>
//                 <th>ID</th>
//                 <th>Student Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 {/* <th>Branch</th> */}
//                 <th>CGPA</th>
//                 <th>Action</th>
//               </tr>
//             </thead>

//             <tbody>
//               {students.map((student, index) => (
//                 <tr key={student._id}>
//                   <td>{index + 1}</td> 
                  
//                   <td>{student._id}</td>
//                   <td>{student.studentName}</td>
//                   <td>{student.email}</td>
//                   <td>{student.phone}</td>
//                   {/* <td>{student.branch}</td> */}
//                   <td>{student.Cgpa}</td>
//                   <td>
//                     <Link to={`/students/edit/${student._id}`}>
//                     <button>Edit</button>
//                     </Link>
//                     <button disabled={page === 1} onClick={()=> setPage(page-1)}>
//                       Previous

//                     </button>
//                     <span>Page{page} of {totalPages}</span>
//                     <br></br>
//                     <button onClick={()=>deleteStudent (student._id)}>Delete</button>
//                   </td>
                 
//                 </tr>
//               ))
//               }
//             </tbody>
//           </table>
//         )
//     }
//     </div>
//     );
//   }

