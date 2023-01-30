import { client } from '../index.js';

export async function getMentorByName(mentor_name) {
    return await client
        .db("mentorstask")
        .collection("mentors")
        .find({ mentor_name: mentor_name })
        .toArray();
}
export async function getMentors() {
    return await client
        .db("mentorstask")
        .collection("mentors")
        .find({})
        .toArray();
}
export async function createMentors(data) {
    return await client
        .db("mentorstask")
        .collection("mentors")
        .insertOne(data);
}
