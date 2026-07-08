import {useState} from "react";

import "./Dashboard.css"
function Dashboard(){
    const [student,setStudent] = useState(250);
    const [companies,setCompanies] = useState(50);
    const [placed,setPlaced] = useState(30);
    // Hooks with boolean:
    const [login,setLogin] = useState(false);
    // Hooks with arrays
    const [name,setNames] = useState([]);
    function changes(){
        setNames([
            "kavya","meher","vijaya",
        ])
    }
    // Hooks with objects:
    const [student,setStudent] = useState({
        name:"kavya",
        course:"ai"

    })
    function dashboard(){
        setStudent(student+1);
        console.log(student)

    }
    function addcompany(){
        setCompanies(companies+1);
        console.log(companies);
    }
    return(
        <div className="dashboard">
            <h1 className="head">Welcome Back👋</h1><br></br>
        
        <div className="cards">
            <div className="card1">
                {/* <h3>250</h3> */}
                <p>Total Students</p>
                <h3>{student}</h3>
                <button onClick={dashboard} className="btn">Add Student</button>
            </div>
            <div className="card2">
                <p>Total companies</p>
                <h3>{companies}</h3>
                <button onClick={addcompany} className="btn">Add btn</button>
                {/* <button onClick={()=>setTotalmember(250)} className="btn">Add btn</button> */}


                </div>
                <div className="card3">
                    <h3>180</h3>
                    <p>Placed</p>
                    </div>
                <div className="card4">
                    <h3>70</h3>
                    <p>Pending</p>

                </div>
            </div>
            

        </div>
    );
}
export default Dashboard;