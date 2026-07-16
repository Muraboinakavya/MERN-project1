import express from "express";
import studentRoutes from "./routes/studentRoutes.js";
const app = express();
// it convert the Json format into json-object(middleware)
app.use(express.json());
app.use("/students",studentRoutes);
app.use("/home",studentRoutes);
app.listen(8000,()=>{
    console.log("server is started with 8000")
})