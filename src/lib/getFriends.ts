// lib/getFriends.ts
import fs from "fs/promises";
import path from "path";

export async function getFriends() {
  const filePath = path.join(process.cwd(), "public/data/friends.json");
  const json = await fs.readFile(filePath, "utf-8");
  return JSON.parse(json);
}