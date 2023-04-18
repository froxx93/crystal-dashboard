import { type NextPage } from "next";
import Head from "next/head";
import Card from "~/components/Card";
import LayoutBase from "~/components/LayoutBase";
import { api } from "~/utils/api";

const About: NextPage = () => {
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
        <h1 className="mb-3 text-3xl font-semibold">About</h1>
        <p className="mb-3 dark:text-gray-300">
          This is a website with a configurable dashboard and a toolkit for
          helping you reaching different goals in Pokémon Crystal.
        </p>
        <p className="mb-3 dark:text-gray-300">
          This website does not track any user-specific data nor does it have a
          commercial purpose.
        </p>
        <p className="dark:text-gray-300">
          For bug reports, feature requests or feedback of any kind feel free to
          DM me on Discord: <strong>Froxx#7674</strong>
        </p>
      </LayoutBase>
    </>
  );
};

export default About;
