"use client";

import Link from "next/link";
import { SermonsQueryResult } from "../../../../sanity.types";

const SermonsTable = ({ sermons }: { sermons: SermonsQueryResult }) => {
  return (
    <section className="px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Previous Sermons</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3 font-medium">Title</th>
              <th className="text-left p-3 font-medium">Date</th>
            </tr>
          </thead>
          <tbody>
            {sermons.map((sermon) => (
              <tr key={sermon.slug} className="border-t border-gray-200">
                <td className="p-3 text-blue-600 hover:underline">
                  <Link href={`/sermons/${sermon.slug}`}>{sermon.title}</Link>
                </td>
                <td className="p-3 w-auto">
                  {new Date(sermon.date as unknown as Date)
                    .toISOString()
                    .slice(0, 10)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SermonsTable;
