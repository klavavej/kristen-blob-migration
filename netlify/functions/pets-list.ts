import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const pets = getStore("pets");
  const { blobs } = await pets.list();
  
  console.log(blobs);

  const text = JSON.stringify(blobs);

  return new Response(`Found ${blobs.length} blobs. They are ${text}`);
};