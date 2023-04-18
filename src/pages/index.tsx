import { type NextPage } from "next";
import Head from "next/head";
import LayoutBase from "~/components/LayoutBase";
import { api } from "~/utils/api";

const Dashboard: NextPage = () => {
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
        <h1 className="text-3xl">Welcome to Crystal Dashboard!</h1>
        <div className="mt-3 grid grid-cols-12 gap-3">
          <div className="col-span-4 rounded border p-3">Tracker 1</div>
          <div className="col-span-4 rounded border p-3">Tracker 200</div>
          <div className="col-span-4 rounded border p-3">Tracker 5000</div>
          <div className="col-span-4 rounded border p-3">
            Some other tracker
          </div>
        </div>
      </LayoutBase>
    </>
  );
};

export default Dashboard;
