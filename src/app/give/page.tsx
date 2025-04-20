import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="flex items-center justify-center h-60 bg-slate-800 pt-12">
        <h1 className="font-bold text-4xl text-white">Give</h1>
      </div>
      <section className="py-20 px-4 max-w-4xl mx-auto space-y-8">
        <p className="text-lg">
          Thank you for deciding to give to CIT. Your donation helps us fulfill
          our mission to lead people into a life-changing relationship with
          Jesus.
        </p>
        <a
          href="https://churchintoronto.churchcenter.com/giving"
          className="inline-block bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-md transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Give Online
        </a>
        <p className="text-sm">
          All donations are safe and secure. Tax receipts will be emailed
          directly from Church In Toronto at the beginning of the next year.
          Online giving is provided by{" "}
          <a
            href="https://www.planningcenter.com/giving"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Planning Center Giving
          </a>
          .
        </p>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Other Ways To Give</h2>

          <div className="mb-10">
            <h3 className="font-semibold text-lg mb-2">e-Transfer</h3>
            <p className="mb-4 text-gray-700">
              Email money transfers are a great way to donate right from your
              bank account. Just click the link below for instructions on
              setting it up.
            </p>
            <Link
              href="/e-transfer"
              className="inline-block bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-md transition"
            >
              Set Up e-Transfer
            </Link>
          </div>

          <div className="mb-10">
            <h3 className="font-semibold text-lg mb-2">Text-to-Give</h3>
            <p className="text-gray-700 mb-2">
              Simply text an amount to <strong>84321</strong>
            </p>
            <p className="text-gray-600 text-sm">
              If it&apos;s your first time giving by text, you&apos;ll get a message back
              with a link to get your giving account set up. Every other time
              will be as simple as sending a text message.
              <br />
              <em>Standard message & data rates may apply.</em>
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Cash or Cheque</h3>
            <p className="text-gray-700">
              If you prefer to give by cash or cheque, you can do so by using
              the donation envelopes available at church. Once you&apos;ve completed
              the information, drop it in the offering box located just outside
              the back auditorium doors.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
