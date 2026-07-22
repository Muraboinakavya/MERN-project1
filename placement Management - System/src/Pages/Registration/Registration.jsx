// import { useState } from "react";
// import './Registration.css' // 1. CSS import chey
// import { Link,useNavigate } from "react-router-dom";
 

// function Registration() {

//   const [studentName, setStudentName] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [contact, setContact] = useState("");
//   const [cgpa, setCGPA] = useState("");
//   const [errors,setErrors] = useState("");
//   const [image,setImage] = useState(null);
//   const validationError ={};
//   //  const [students,setStudents] = useState([])
//    const navigate = useNavigate();
//   // Array to store all register students

//   function handleChange(event) {
//     setStudentName(event.target.value);
//   }
//   const formData = new FormData();


//   function registration(event) {
//     event.preventDefault();
//     if(studentName.trim() === "" ){
//         // alert("Please enter a valid username.");
//         validationError.studentName = "Name is not reqired"

//         return;
//     }
//     // if(password.trim() === "" ){
//     //     alert("Please enter a valid password.");
//     //     return;
//     // }
//     const emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if(!emailpattern.test(email) ){
//         alert("Please enter a valid email.");
//         return;
//     }
//     if(contact.trim() === "" || contact.length !== 10){
//         alert("Please enter a valid 10 digit contact number.");
//         return;
//     }
//     const passwordpattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     if(!passwordpattern.test(password)){
//         alert("Enter correct password")
//     }
//     // cgp validation:
//     if(cgpa <0 || cgpa >10){
//         alert("Invalid cgpa")
//     }
// // Add students to Array
//     const student ={ 
//       id:Date.now(),
//       studentName, 
//       password, 
//       email, 
//       contact, 
//       cgpa
//     };
//     const existingStudents = JSON.parse(localStorage.getItem("students")) || []
// // Add students to Array
// // spread operator
// existingStudents.push(student);
// localStorage.setItem(
//   "students",
//   JSON.stringify(existingStudents)
// );
// alert("Registration Successfull");
//   // Clear form
//     setStudentName("");
//     setEmail("");
//     setContact("");
//     setCGPA("");
//     setPassword("");
   
//   }
//   // navigate("/StudentTable");


  

//   return (
//     <div className="register-container"> {/* 2. inline style ni class ga marchu */}
//       <div className="register-box">
//         <h1>Register Page</h1>
        
//         <form onSubmit={registration}>
//           <div>
//             <input 
//               type="text" 
//               placeholder="Enter Username"
//               value={studentName}
//               onChange={handleChange} 
              
//             />
            
//            </div>
          
//           <div>
//             <input 
//               type="password" 
//               placeholder="Enter the Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)} 
//             />
//           </div>
          
//           <div>
//             <input 
//               type="email" 
//               placeholder="Enter the Email id"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)} 
//             />
//           </div>
          
//           <div>
//             <input 
//               type="tel" // tel ki marcham
//               placeholder="Enter the contact number"
//               value={contact}
//               onChange={(e) => setContact(e.target.value)}
//               maxLength="10" 
//             />
//           </div>
          
//           <div>
//             <input 
//               type="number" // number ki marcham
//               placeholder="Enter the CGPA"
//               value={cgpa}
//               onChange={(e) => setCGPA(e.target.value)}
//               step="0.01"
//               max="10"
//             />
//           </div>
          
          
//           <button type="submit">Register</button><br></br>

//         </form>
//           <p style={{ marginTop: "15px" }}>
//           Already Have An Account?{" "}
//           <Link to="/Login">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

      
      
// export default Registration; 
import { useState } from "react";
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();

  const [studentName, setStudentName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [cgpa, setCGPA] = useState("");

  const [errors, setErrors] = useState({});

  const registration = (event) => {
    event.preventDefault();

    let validationErrors = {};

    // Username Validation
    if (studentName.trim() === "") {
      validationErrors.studentName = "Username is required";
    }

    // Email Validation
    const emailPattern =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
      validationErrors.email = "Enter a valid email";
    }

    // Contact Validation
    if (!/^\d{10}$/.test(contact)) {
      validationErrors.contact = "Enter a valid 10-digit contact number";
    }

    // Password Validation
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordPattern.test(password)) {
      validationErrors.password =
        "Password must contain 8 characters, uppercase, lowercase, number and special character";
    }

    // CGPA Validation
    if (cgpa === "" || Number(cgpa) < 0 || Number(cgpa) > 10) {
      validationErrors.cgpa = "CGPA must be between 0 and 10";
    }

    // Stop if errors exist
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    const student = {
      id: Date.now(),
      studentName,
      password,
      email,
      contact,
      cgpa,
    };

    const existingStudents =
      JSON.parse(localStorage.getItem("students")) || [];

    existingStudents.push(student);

    localStorage.setItem(
      "students",
      JSON.stringify(existingStudents)
    );

    alert("Registration Successful!");

    // Clear Form
    setStudentName("");
    setPassword("");
    setEmail("");
    setContact("");
    setCGPA("");

    // Navigate to Student Table
    navigate("/StudentTable");
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Register Page</h1>

        <form onSubmit={registration}>
          <div>
            <input
              type="text"
              placeholder="Enter Username"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
            {errors.studentName && (
              <p className="error">{errors.studentName}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="error">{errors.password}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="error">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="tel"
              placeholder="Enter Contact Number"
              value={contact}
              maxLength={10}
              onChange={(e) => setContact(e.target.value)}
            />
            {errors.contact && (
              <p className="error">{errors.contact}</p>
            )}
          </div>

          <div>
            <input
              type="number"
              placeholder="Enter CGPA"
              value={cgpa}
              step="0.01"
              min="0"
              max="10"
              onChange={(e) => setCGPA(e.target.value)}
            />
            {errors.cgpa && (
              <p className="error">{errors.cgpa}</p>
            )}
          </div>

          <button type="submit">Register</button>
        </form>

        <p style={{ marginTop: "15px" }}>
          Already Have An Account?{" "}
          <Link to="/Login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Registration;