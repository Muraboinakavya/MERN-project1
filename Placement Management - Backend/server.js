import express from "express";
let students=[{
    id:105,
    studentName:"Rahul",
    branch:"cse",
    cgpa:9 
},
{
    id:106,
    studentName:"kavya",
    branch:"cse",
    cgpa:9 
}]

const app = express();
// midileware convert json to js object
app.use(express.json());
app.get("/students",(req,res)=>{
    res.json(students);
});
app.get("/students/:id",(req,res)=>{
    const id = Number(req.params.id);
    const student = students.find(
        (student)=>student.id === id
    );
    res.json(student)
});
// post
app.post("/students",(req,res)=>{
    const student = req.body;
    // req.body consist of react from the data
    student.push(student);
    res.status(201).json({
        message:"student Added",
    })
})

app.listen(8000,()=>{
    console.log("server is started at 8000");

});

// app.get("/home",(request,response)=>{
//     response.send("This is my Home page is correct")
// });
// app.listen(8000,()=>{
//     console.log("server is started at 8000");
// })
