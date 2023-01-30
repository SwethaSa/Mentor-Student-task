import { client } from '../index.js';

export async function newMentor(data) {
    return await client
        .db("mentorstask")
        .collection("mentors")
        .updateOne(
            { mentor_name: data.new_mentor },
            { $push: { students_assigned: data.student_name } }
        );
}
export async function studentName(data) {
    await client
        .db("mentorstask")
        .collection("students")
        .updateOne(
            { student_name: data.student_name },
            { $set: { mentor_name: data.new_mentor } }
        );
}
export async function previousMentor(data) {
    await client
        .db("mentorstask")
        .collection("mentors")
        .updateOne(
            { mentor_name: data.previous_mentor },
            { $pull: { students_assigned: data.student_name } }
        );
}
