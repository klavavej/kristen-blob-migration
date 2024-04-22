import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const test = getStore("test");
  await test.set("item 1", "description 1");


  return new Response("blob set");
};