import express from 'express';
import {MongoClient} from 'mongodb';
import * as dotenv from 'dotenv' 
import mentorsRoute from "./Routes/mentors.route.js";
import studentsRoute from "./Routes/students.route.js";
import assignedstudentsRoute from "./Routes/assignedstudents.route.js";
import assignmentorRoute from "./Routes/assignmentor.route.js";
import changementorRoute from "./Routes/changementor.route.js";



dotenv.config();


const app = express();
const PORT = process.env.PORT;

const MONGO_URL = process.env.MONGO_URL;
const client =  new MongoClient(MONGO_URL);
await client.connect();
console.log("Your MongoDB is connected😍👍");

app.use(express.json());

app.get("/", function (request, response) {
  response.send("MentorsList - http://localhost:1000/mentors,      MentorsByName - http://localhost:1000/mentors/Ragav,   StudentsList - http://localhost:1000/students,   AssignedStudents - http://localhost:1000/assigned_students",
  );
});


app.use("/mentors", mentorsRoute);
app.use("/students", studentsRoute);
app.use("/assigned_students", assignedstudentsRoute);
app.use("/assign_mentor", assignmentorRoute);
app.use("/change_mentor", changementorRoute);


app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

export {client};