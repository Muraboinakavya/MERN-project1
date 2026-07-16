
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";


createRoot(document.getElementById('root')).render( 
  // enable to detect changes in url and not

   <BrowserRouter>
    <App/>
  </BrowserRouter>
 
  
 
)
