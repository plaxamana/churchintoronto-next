import { client } from "./client";
import { getPaginatedSermonsQuery, getSermonCountQuery } from "./queries";

export async function fetchSermonsPage(page = 1, pageSize = 10) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const [sermons, total] = await Promise.all([
    client.fetch(getPaginatedSermonsQuery(start, end)),
    client.fetch(getSermonCountQuery),
  ]);

  return { sermons, total };
}
