import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const pets = getStore("pets");
  await pets.set("cool cat", "meow");
  await pets.set("delightful dog", "woof");
  await pets.set("blobby blobfish", "bleep blorp");


  return new Response("blobs set");
};