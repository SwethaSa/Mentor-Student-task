import express from 'express';
import { updateMentor, updateList } from '../services/assignmentor.service.js';


const router = express.Router();


router.post("/",async(request,response)=>{
    const data=request.body;

    const result=await updateMentor(data)

    updateList(data);

    result.acknowledged
    ?response.status(200).send({Message:"Student assigned successfully🤩"})
    :response 
    .status(400)
    .send({Message:"OOPS!! There was an error in creating Assigning Student👀"})
})

export default router;


