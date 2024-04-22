import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const test = getStore("test");
  await test.set("cat", "meow");
  await test.set("dog", "woof");
  await test.set("blobfish", "bleep blorp");


  return new Response("blobs set");
};