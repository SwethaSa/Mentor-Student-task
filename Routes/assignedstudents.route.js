

import express from 'express';
import { assignedStudents } from '../services/assignedstudents.service.js';


const router = express.Router();

router.get("/",async(request,response)=>{
    const result=await assignedStudents();
    response.send(result);
})

export default router;


