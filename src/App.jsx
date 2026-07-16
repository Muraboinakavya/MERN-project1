import './App.css'
import Navbar from'./components/Navbar/Navbar'
// import Heading from'./components/Heading'
// import Student from'./components/Student'
import Sidebar from'./components/Siderbar/Siderbar'
// import Footer from'./components/Footer/Footer'
// import Dashboard from './components/Dashboard/Dashboard'
import Registration from './Pages/Registration/Registration';
//  import {useState} from "react";
import Login from './Pages/Login/Login';
import Dashboard from "./components/Dashboard/Dashboard"
import {Routes,Route} from "react-router-dom";
import Layout from './components/Layouts/Layout';
 import { BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NavBar from './components/Navbar/Navbar';
 import StudentTable from './components/StudentTable/StudentTable';
import Footer from './components/Footer/Footer';
import StudentDetailes from './components/StudentDetailes/StudentDetailes'
import Students from './Pages/Students/Student';
import Clock from './components/Clock/Clock'
import EditStudents from "./Pages/EditStudent/EditStudent.jsx"
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
    // function App(){
    //   return(
//         <>
//           {/* <div>
//      {/* <Navbar/>
//     <Sidebar/>
//     <Dashboard/> */}
    
//        <Registration/> 

//       </div> 
//         <Registration/> 
//        <Login/>  */}
//      </>  
//      )
// }
function App(){
      return(
        <>
        <Routes>

      <Route path="/Login" element={<Login/>}/>
      <Route path="/Registration" element={<Registration/>}/>
      
      
     
    


      <Route element={<Layout/>}>
      <Route  path="/"
      element={<Home/>}/>

      <Route path="/Dashboard"
      element={<Dashboard/>}/>
      </Route>
      <Route path="/NavBar" element={<NavBar/>}/>
      <Route path="/studentTable" element={<StudentTable/>}/>
      {/* <Route path="/Footer" element={<Footer/>}/> */}
      <Route path="/Sidebar" element={<Sidebar/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/Footer" element={<Footer/>}/>
      <Route path="/Students" element={<Students/>}/>
       <Route path="/Students/:id" element={<StudentDetailes/>}/>
       <Route path="/students/edit/:id" element={EdiStudent/>}/>
       <Route path="/editstudent" element={<EditStudent/>}/>
 
  
          
      </Routes>
      </>


     
  )
};
export default App;


