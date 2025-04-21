import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { getSermonBySlugQuery } from "@/sanity/lib/queries";

export const revalidate = 60; // Regenerate the page at most once every 60 seconds

export default async function SermonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sermon = await client.fetch(getSermonBySlugQuery(slug));

  if (!sermon) return notFound();

  return (
    <>
      <div className="relative h-60 bg-slate-800 text-white flex items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold">{sermon.title}</h1>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-gray-600 mb-4">
          {new Date(sermon.date).toLocaleDateString("en-CA", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}{" "}
          · {sermon.preacher}
        </p>
        <audio controls className="w-full mb-6">
          <source src={sermon.audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <div className="flex gap-4">
          {sermon.series?.slug && (
            <a
              href={`/series/${sermon.series.slug}`}
              className="border border-gray-400 px-4 py-2 rounded"
            >
              Back to Series
            </a>
          )}
          <a
            href={sermon.audioUrl}
            download
            className="border border-gray-400 px-4 py-2 rounded"
          >
            Download
          </a>
        </div>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const slugs: string[] = await client.fetch(
    `*[_type == "sermon" && defined(slug.current)].slug.current`
  );

  return slugs.map((slug) => ({ slug }));
}
