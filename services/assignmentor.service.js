import { client } from '../index.js';

export function updateList(data) {
    data.students_assigned.map(async (student) => {
        await client
            .db("mentorstask")
            .collection("students")
            .updateOne(
                { student_name: student },
                { $set: { mentor_assigned: "Yes", mentor_name: data.mentor_name } }
            );
    });
}
export async function updateMentor(data) {
    return await client
        .db("mentorstask")
        .collection("mentors")
        .updateOne(
            { mentor_name: data.mentor_name },
            { $set: { students_assigned: data.students_assigned } }
        );
}
