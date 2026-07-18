// frontend -->request-->5000 backend 
// fronted -->baseURL/student
import axios from "axios";
import React from "react";
const api = axios.create({
    baseURL:"http://localhost:8000"
});
export default api;

//               flow of the application URl:
                    //  React
                    //    |
                    // api.js
                    //    |
                    // backend