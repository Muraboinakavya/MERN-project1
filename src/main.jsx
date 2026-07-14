
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
const div =<div>
  <h1>Welcome to project</h1>
  <p1>This is my first project</p1>
</div>


createRoot(document.getElementById('root')).render( 
  // enable to detect changes in url and not

   <BrowserRouter>
    <App/>
  </BrowserRouter>
 
  
 
)
