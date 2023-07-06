import { ContactDetails } from "@/lib/props";
import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    return;
  }

  const { email, name, message } = req.body;

  console.log(req);

  if (
    !email ||
    !email.includes("@") ||
    !name ||
    name.trim() === "" ||
    !message ||
    message.trim === ""
  ) {
    res.status(422).json({ message: "Invalid input." });
    return;
  }

  const newMessage: ContactDetails = {
    id: undefined,
    email,
    name,
    message,
  };

  let client;
  const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.kfc6amq.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

  try {
    client = await MongoClient.connect(connectionString);
  } catch (error) {
    res.status(500).json({ message: "Could not connect to database." });
    return;
  }

  const db = client.db();

  try {
    const result = await db.collection("messages").insertOne(newMessage);
    newMessage.id = result.insertedId;
  } catch (error) {
    client.close();
    res.status(500).json({ message: "Could not store message." });
    return;
  }

  client.close();

  res
    .status(201)
    .json({ message: "Succesfully stored message", content: newMessage });
}

export default handler;
