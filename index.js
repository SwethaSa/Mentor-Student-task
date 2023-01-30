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
        MentorsList - <a href="http://localhost:1000/mentors" style="color: white;">http://localhost:1000/mentors</a><br>
        MentorsByName - <a href="http://localhost:1000/mentors/Ragav" style="color: white;">http://localhost:1000/mentors/Ragav</a><br>
        StudentsList - <a href="http://localhost:1000/students" style="color: white;">http://localhost:1000/students</a><br>
        AssignedStudents - <a href="http://localhost:1000/assigned_students" style="color: white;">http://localhost:1000/assigned_students</a>
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