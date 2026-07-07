import './App.css'
import Navibar from'./components/Navibar'
// import Heading from'./components/Heading'
// import Student from'./components/Student'
import Sidebar from'./components/sidebar/sidebar'
import Footer from'./components/Footer/Footer'
import Dashboard from './components/Dashboard/Dashboard'
// App.jsx:The Root component
// Intially every thing is displayed from App.jsx
// component is a subpart of webpage


// creating a root component
// js-->HTML-->JSX
// jSX code is not understand  by the browser so we use Babel
// Babel:it helps to convert the JSX  code into JS code

function App(){
  return( 
    <>
    <div>
    <Navibar/>
     <Sidebar/>
     </div>
     <Dashboard/>
     <Footer/>
    
   
    </>
  
  )
}
export default App;


