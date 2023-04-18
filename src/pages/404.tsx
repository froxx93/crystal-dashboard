import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import LayoutBase from "~/components/LayoutBase";

import { api } from "~/utils/api";

const Error404: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Crystal Dashboard</title>
        <meta
          name="description"
          content="Your allround-helper for solving Pokémon Crystal"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutBase>
        <h1 className="mb-3 text-3xl">Ahem...</h1>
        <p className="mb dark:text-gray-400">
          {"What exactly do you think you're doing?"}
        </p>
        <p className="text-primary">
          <Link href="/">
            {"If you're looking for the Dashboard, you can go here."}
          </Link>
        </p>
      </LayoutBase>
    </>
  );
};

export default Error404;
