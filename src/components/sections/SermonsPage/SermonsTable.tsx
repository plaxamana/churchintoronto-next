"use client";

import { useState } from "react";
import Link from "next/link";
import { SermonsQueryResult } from "../../../../sanity.types";

const SermonsTable = ({ sermons }: { sermons: SermonsQueryResult }) => {
  const [currentPage] = useState(1);
  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentSermons = sermons.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Previous Sermons</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3 font-medium">Title</th>
              <th className="text-left p-3 font-medium">Preacher</th>
              <th className="text-left p-3 font-medium">Date</th>
            </tr>
          </thead>
          <tbody>
            {currentSermons.map((sermon) => (
              <tr key={sermon.slug} className="border-t border-gray-200">
                <td className="p-3 text-blue-600 hover:underline">
                  <Link href={`/sermons/${sermon.slug}`}>{sermon.title}</Link>
                </td>
                <td className="p-3">{sermon.preacher}</td>
                <td className="p-3">
                  {new Date(sermon.date).toISOString().slice(0, 10)}
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
