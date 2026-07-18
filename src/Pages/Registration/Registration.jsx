import { useState } from "react";
import './Registration.css' // 1. CSS import chey
import { Link,useNavigate } from "react-router-dom";
 

function Registration() {

  const [studentName, setStudentName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [cgpa, setCGPA] = useState("");
  const [errors,setErrors] = useState("");
  const validationError ={};
  //  const [students,setStudents] = useState([])
   const navigate = useNavigate();
  // Array to store all register students

  function handleChange(event) {
    setStudentName(event.target.value);
  }

  function registration(event) {
    event.preventDefault();
    if(studentName.trim() === "" ){
        // alert("Please enter a valid username.");
        validationError.studentName = "Name is not reqired"

        return;
    }
    // if(password.trim() === "" ){
    //     alert("Please enter a valid password.");
    //     return;
    // }
    const emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailpattern.test(email) ){
        alert("Please enter a valid email.");
        return;
    }
    if(contact.trim() === "" || contact.length !== 10){
        alert("Please enter a valid 10 digit contact number.");
        return;
    }
    const passwordpattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!passwordpattern.test(password)){
        alert("Enter correct password")
    }
    // cgp validation:
    if(cgpa <0 || cgpa >10){
        alert("Invalid cgpa")
    }
    function handlesubmit(){
      e.preventDefault();
    }
// Add students to Array
    const student ={ 
      id:Date.now(),
      studentName, 
      password, 
      email, 
      phone, 
      Cgpa
    };
    const existingStudents = JSON.parse(localStorage.getItem("students")) || []
// Add students to Array
// spread operator
existingStudents.push(student);
localStorage.setItem(
  "students",
  JSON.stringify(existingStudents)
);
// alert("Registration Successfull");
  // Clear form
    setStudentName("");
    setEmail("");
    setPhone("");
    setCgpa("");
    setPassword("");
   
  }
  navigate("/StudentTable");


  

  return (
    <div className="register-container"> {/* 2. inline style ni class ga marchu */}
      <div className="register-box">
        <h1>Register Page</h1>
        
        <form onSubmit={registration}>
          <div>
            <input 
              type="text" 
              placeholder="Enter Username"
              value={studentName}
              onChange={handleChange} 
              
            />
            
           </div>
          
          <div>
            <input 
              type="password" 
              placeholder="Enter the Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          
          <div>
            <input 
              type="email" 
              placeholder="Enter the Email id"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          
          <div>
            <input 
              type="tel" // tel ki marcham
              placeholder="Enter the contact number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              maxLength="10" 
            />
          </div>
          
          <div>
            <input 
              type="number" // number ki marcham
              placeholder="Enter the CGPA"
              value={cgpa}
              onChange={(e) => setCGPA(e.target.value)}
              step="0.01"
              max="10"
            />
          </div>
          
          
          <button type="button">Register</button><br></br>

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