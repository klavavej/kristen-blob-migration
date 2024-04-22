import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const test = getStore("test");
  await test.set("item 1", "description 1");
  await test.set("item 2", "description 2");
  await test.set("item 3", "description 3");


  return new Response("blob set");
};