import { useState } from "react";
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";
import api from "../../API/api";

function Registration() {
  const navigate = useNavigate();

  const [studentName, setStudentName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [Cgpa, setCGPA] = useState("");

  const registration = async (event) => {
    event.preventDefault();

    const student = {
      studentName,
      password,
      email,
      phone,
      Cgpa,
    };

    try {
      
      const res = await api.post("/students", student);

      alert(res.data.message);

      setStudentName("");
      setPassword("");
      setEmail("");
      setPhone("");
      setCGPA("");

      navigate("/studentTable");
    } catch (error) {
      console.log(error);
      alert("Registration Failed");
    }
    
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
              required
            />
          </div>

          {/* Uncomment if password is needed */}
          {/*
          <div>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          */}

          <div>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <input
              type="tel"
              placeholder="Enter Contact Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              maxLength="10"
              required
            />
          </div>

          <div>
            <input
              type="number"
              placeholder="Enter CGPA"
              value={Cgpa}
              onChange={(e) => setCGPA(e.target.value)}
              step="0.01"
              max="10"
            />
          </div>

          <button type="submit">Registration</button>
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