import { type NextPage } from "next";
import Head from "next/head";
import Card from "~/components/Card";
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
        <h1 className="mb-3 text-3xl font-semibold">
          Welcome to Crystal Dashboard!
        </h1>
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-4">
            <Card>Tracker 1</Card>
          </div>
          <div className="col-span-4">
            <Card>Tracker 200</Card>
          </div>
          <div className="col-span-4">
            <Card>Tracker 5000</Card>
          </div>
          <div className="col-span-4">
            <Card>Some other tracker</Card>
          </div>
        </div>
      </LayoutBase>
    </>
  );
};

export default Dashboard;
