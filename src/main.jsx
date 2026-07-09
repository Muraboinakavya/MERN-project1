import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
const div =  <div>
    <h1>Hello Kavya</h1>
<p>my name is kavya iam doing project</p>
 </div>

createRoot(document.getElementById('root')).render( 
   <StrictMode>
    <App></App>
  </StrictMode>
  
 
)
