import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const test = getStore("test");
  const { blobs } = await test.list();
  
  console.log(blobs);

  return new Response(`Found ${blobs.length} blobs.`);
};