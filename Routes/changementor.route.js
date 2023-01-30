

import express from 'express';
import { previousMentor, studentName, newMentor } from '../services/updateMentor.service.js';


const router = express.Router();


router.post('/',async(request,response)=>{
    const data=request.body;

    await previousMentor(data);

    await studentName(data);

   const result= await newMentor(data)

    result.acknowledged
    ?response.status(200).send({Message:"Updated the Mentor successfully🤩"})
    :response 
    .status(400)
    .send({msg:"OOPS!! There was an error in Updating Mentor👀"})
})

export default router;


