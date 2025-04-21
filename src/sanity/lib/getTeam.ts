import { client } from "./client";
import { teamQuery } from "./queries";

export async function getTeam() {
  return await client.fetch(teamQuery);
}
