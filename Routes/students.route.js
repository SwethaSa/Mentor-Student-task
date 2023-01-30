



import express from 'express';
import { createStudents, getStudents } from '../services/students.service.js';


const router = express.Router();


router.post("/",async(request,response)=>{
    const data=request.body;

    const result=await createStudents(data);
    result.acknowledged
    ?response.status(200).send({Message:"Student created successfully🤩"})
    :response.status(400).send({Message:"OOPS!! There was an error in creating Student"});
})



router.get("/",async(request,response)=>{
    const result=await getStudents();
    response.send(result);
})

export default router;

