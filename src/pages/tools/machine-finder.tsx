import { type NextPage } from "next";
import Head from "next/head";
import Card from "~/components/Card";
import LayoutBase from "~/components/LayoutBase";

const MachineFinder: NextPage = () => {
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
        <h1 className="mb-3 text-3xl font-semibold">Machine Finder</h1>
        <Card>
          <p>Coming soon!</p>
        </Card>
      </LayoutBase>
    </>
  );
};

export default MachineFinder;
