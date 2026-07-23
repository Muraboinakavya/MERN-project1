// frontend --> req -->5000 backend 
// backend -->localhost:8000/students:id

// it transforms too 
// frontend -->baseURL/students/:id

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000"
});

export default api;

// backend -->localhost:8000/students:id -->changes to this 
// api.get("/students/:id")
                // React 
                // |
                // api.js
                // |
                // backend  





                