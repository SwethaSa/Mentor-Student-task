import { client } from '../index.js';

export async function getStudents() {
    return await client
        .db("mentorstask")
        .collection("students")
        .find({ mentor_assigned: "No" })
        .toArray();
}
export async function createStudents(data) {
    return await client
        .db("mentorstask")
        .collection("students")
        .insertMany(data);
}
