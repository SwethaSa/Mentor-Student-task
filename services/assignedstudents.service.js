import { client } from '../index.js';

export async function assignedStudents() {
    return await client
        .db("mentorstask")
        .collection("students")
        .find({ mentor_assigned: "Yes" })
        .toArray();
}
