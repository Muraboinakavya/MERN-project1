
let students =[{
    id:101,
    studentName:"kavya",
    email:"kavya@123",
    cgpa:9,
    contact:234567890

},
{   id:102,
    studentName:"pandhi",
    email:"pandhii@123",
    cgpa:9,
    contact:234567890222

}]
 export function  getStudents(req,res){
    res.status(200).json(students)
};
export function getstudentId(req,res){
    // Read id from url
    const id = Number(req.params.id);
    // search the student
    const student = students.find(
    (student)=>student.id === id
    );
    // return student
    res.status(200).json({
        success:true,
        student,

    });
}
// Adding student:
export function AddStudent(req,res){
    // read the json data -- react form
    const student = req.body;
    // add into the array:
    students.push(student);
    res.status(201).json({
        success:true,
        message:"student register successfully",
        student,
    });
}
//updating student 
    export function updatedstudent(req,res){
        const id = Number(req.params.id);
        const updatedstudent = req.body;
        let studentFound = false;
        students = students.map((student)=>{
            if(student.id === id){
                studentFound = true;
                return {
                    ...student,...updatedstudent
                }
            }
        });
        if(!studentFound){
            return res.status(400).json({
                success : false,
                message:"Student Not Found"
            })
        }
        res.status(200).json({
            success : true,
            meassage : "student updated successfully"
        });
    }
// Deleting the student using delete method:
export function DeleteStudent(req,res){
    // read the data:
    
    // delete student:
     // Read id from url
    const id = Number(req.params.id);
    // search the student
    const student = students.find(
    (student)=>student.id === id
    );
   if(!studentFound){
    return res.status(200).json({
        success : false,
        message:"student Not Found"
    });
   };
   students = students.filter((student)=>student.id !== id);
   res.status(200).json({
    success:true,
    message:"student delete Successfully"
   })

}