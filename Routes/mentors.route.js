import express from 'express';
import { createMentors, getMentors, getMentorByName } from '../services/mentors.service.js';


const router = express.Router();
router.post("/mentors",async(request,response)=>{
    const data=request.body;
    const result=await createMentors(data);

    result.acknowledged
    ?response.status(200).send({Message:"Mentor created successfully🤩"})
    :response.status(400).send({Message:"OOPS!! There was an error in creating Mentor👀"});
})

router.get("/",async(request,response)=>{
    const result=await getMentors();
    response.send(result);
})

router.get("/:mentor_name",async(request,response)=>{
    const {mentor_name} = request.params;
    const result=await getMentorByName(mentor_name);
    response.send(result);
})

export default router;


