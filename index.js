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
    response.send(`
      <style>
      body{
        background-color: black;

      }
        h1 {
          font-family: sans-serif;
          color: white;
          text-align: center;
          text-shadow: 0 0 5px white;
          box-shadow: 2px 2px 50px grey;
          padding: 20px;
          margin-top:6cm;
        }
      </style>
      <h1>
        MentorsList - <a href="https://mentor-student-task-jyqdw3c6g-swethasa.vercel.app/mentors" style="color: #00BFFF; text-shadow:none">https://mentor-student-task-jyqdw3c6g-swethasa.vercel.app/mentors</a><br><br>
        MentorsByName - <a href="https://mentor-student-task-jyqdw3c6g-swethasa.vercel.app/mentors/Ragav" style="color: #00BFFF; text-shadow:none">https://mentor-student-task-jyqdw3c6g-swethasa.vercel.app/mentors/Ragav</a><br><br>
        StudentsList - <a href="https://mentor-student-task-jyqdw3c6g-swethasa.vercel.app/students" style="color: #00BFFF; text-shadow:none">https://mentor-student-task-jyqdw3c6g-swethasa.vercel.app/students</a><br><br>
        AssignedStudents - <a href="https://mentor-student-task-jyqdw3c6g-swethasa.vercel.app/assigned_students" style="color: #00BFFF; text-shadow:none">https://mentor-student-task-jyqdw3c6g-swethasa.vercel.app/assigned_students</a>
      </h1>
    `);
  });
  


app.use("/mentors", mentorsRoute);
app.use("/students", studentsRoute);
app.use("/assigned_students", assignedstudentsRoute);
app.use("/assign_mentor", assignmentorRoute);
app.use("/change_mentor", changementorRoute);


app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

export {client};