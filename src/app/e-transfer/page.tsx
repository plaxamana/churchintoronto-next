"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function ETransferPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] bg-slate-800 text-white flex items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold">e-Transfer</h1>
      </section>

      {/* Content */}
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto px-4 py-20 space-y-10"
      >
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            How-to Set Up an Interac e-Transfer
          </h2>
          <p className="text-gray-700">
            Email money transfers are a great way to donate right from your bank
            account. They&apos;re a bit more challenging to set up, but they help the
            church avoid payment processing fees. We recommend e-transfers for
            long-time members and frequent givers.
          </p>
          <hr className="my-6 border-gray-300" />
        </div>

        {[
          {
            title: "Step 1",
            content: (
              <p className="text-gray-700">
                Sign in to your online bank and find{" "}
                <strong>Interac e-Transfers</strong>. These may also be called
                e-mail money transfers.
              </p>
            ),
          },
          {
            title: "Step 2",
            content: (
              <>
                <p className="text-gray-700 mb-2">
                  Great, now you can add the church as a recipient of a
                  transfer. Add the following details.
                </p>
                <ul className="text-gray-700 space-y-1 pl-4 list-disc">
                  <li>
                    <strong>Name:</strong> Church In Toronto
                  </li>
                  <li>
                    <strong>Email:</strong> donate.cit@gmail.com
                  </li>
                </ul>
                <p className="text-sm text-gray-500 mt-2">
                  It’s important to get the email right. Save the new recipient
                  and continue.
                </p>
              </>
            ),
          },
          {
            title: "Step 3",
            content: (
              <>
                <p className="text-gray-700 mb-2">
                  Now you&apos;re ready to send money through an e-transfer. Create a
                  new e-transfer and enter the following:
                </p>
                <ul className="text-gray-700 space-y-1 pl-4 list-disc">
                  <li>
                    <strong>Recipient:</strong> Church In Toronto
                  </li>
                  <li>
                    <strong>Message:</strong> N/A
                  </li>
                  <li>
                    <strong>Amount:</strong> Choose the amount you would like to
                    donate.{" "}
                    <em className="text-sm">
                      (Note: Most banks have a daily transfer limit of $3,500)
                    </em>
                  </li>
                  <li>
                    <strong>Account:</strong> Choose the account you&apos;d like to
                    send from.
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: "Step 4",
            content: (
              <>
                <p className="text-gray-700 mb-2">
                  The last step is to choose a security question and answer. The
                  question can be anything, but it&apos;s{" "}
                  <strong>very important</strong> that the answer is:
                </p>
                <p className="bg-slate-100 border-l-4 border-slate-400 px-4 py-2 font-mono rounded-md w-fit">
                  cit671
                </p>
              </>
            ),
          },
          {
            title: "Step 5",
            content: (
              <p className="text-gray-700">
                Now the last step is to send the transfer. Some banks also allow
                you to set up recurring transfers if you&apos;d like.
                <br />
                <br />
                Thank you so much for supporting the vision at CIT.
              </p>
            ),
          },
        ].map(({ title, content }) => (
          <div key={title}>
            <h3 className="font-bold uppercase text-sm mb-1">{title}</h3>
            {content}
          </div>
        ))}

        {/* CTA Button */}
        <div className="pt-10">
          <Link
            href="/give"
            className="inline-block bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-6 rounded-md transition"
          >
            &larr; Back to Giving Options
          </Link>
        </div>
      </motion.section>
    </>
  );
}
