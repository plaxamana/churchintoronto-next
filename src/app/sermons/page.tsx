import SermonsTable from "@/components/sections/SermonsPage/SermonsTable";
import { fetchSermonsPage } from "@/sanity/lib/getSermons";
import Pagination from "@/components/common/Pagination";

type Props = {
  searchParams: { page?: string };
};

export default async function Page({ searchParams }: Props) {
  const currentPage = parseInt(searchParams.page || "1", 10);
  const pageSize = 10;

  const { sermons, total } = await fetchSermonsPage(currentPage, pageSize);
  const totalPages = Math.ceil(total / pageSize);

  return (
    <>
      <div className="relative h-60 bg-slate-800 text-white flex items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold">Sermons</h1>
      </div>
      <section className="max-w-7xl mx-auto py-12 px-4">
        <div className="flex flex-col space-y-4">
          <a
            href="https://www.churchintoronto.org"
            className="flex bg-slate-500 text-white hover:bg-slate-700 p-4 justify-center rounded-md transition-all duration-300"
          >
            Sermon Library - Current & Past Sermons With Material
          </a>
          <a
            href="https://www.youtube.com/channel/UCaRdYcKlqOuGIjDkky94PCA"
            className="flex bg-slate-500 text-white hover:bg-slate-700 p-4 justify-center rounded-md transition-all duration-300"
          >
            Watch Latest Sermons - Direct YouTube Access
          </a>
        </div>
      </section>
      <section className="max-w-7xl mx-auto py-12 px-4">
        <SermonsTable sermons={sermons} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </section>
    </>
  );
}
