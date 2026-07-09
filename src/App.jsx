import './App.css'
import Navbar from'./components/Navbar/Navbar'
// import Heading from'./components/Heading'
// import Student from'./components/Student'
import Sidebar from'./components/sidebar/sidebar'
// import Footer from'./components/Footer/Footer'
// import Dashboard from './components/Dashboard/Dashboard'
import Registration from './Pages/Registration/Registration';
 import {useState} from "react";
import Login from './Pages/Login/Login';
import Dashboard from "./components/Dashboard/Dashboard"
// App.jsx:The Root component
// Intially every thing is displayed from App.jsx
// component is a subpart of webpage


// creating a root component
// js-->HTML-->JSX
// jSX code is not understand  by the browser so we use Babel
// Babel:it helps to convert the JSX  code into JS code

// function App(){
// // const[student,setStudent] = useState(250)
// //   function addstudents(){
// //     setStudent(student+1)
// //     console.log(student)
// //   }
//   return( 
//     <>
//     {/* <h1>{student}</h1>
//     <button onClick={addstudents}>Add Student</button> */}
//     <div>
//      <Navbar/>
//     <Sidebar/>
//     <Dashboard/>
    
//       <Registration/> 
//        {/* <Login/> */}
//      {/* <Footer/> */}
     
//      </div>
//      <Login/>
//      {/* <Dashboard/> */}
//      {/* <Registration/> */}
//      {/* <Login/>
//      <Footer/>
//        */}
    
   
//     </>
    function App(){
      return(
        <>
         {/* <div>
     <Navbar/>
    <Sidebar/>
    <Dashboard/>
    
       <Registration/> 

      </div> */}
       <Registration/> 
       <Login/> 
     </> 
     )
}
export default App;


