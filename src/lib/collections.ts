import clientPromise from "./mongodb";

export async function getUsersCollection() {
  const client = await clientPromise;
  return client.db(process.env.MONGODB_DB).collection("users");
}

// export async function getPostsCollection() {
//   const client = await clientPromise;
//   return client.db(process.env.MONGODB_DB).collection("posts");
// }
