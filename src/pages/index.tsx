import { type NextPage } from "next";
import Head from "next/head";
import Card from "~/components/Card";
import LayoutBase from "~/components/LayoutBase";
import { hash } from "~/utils/common";

type TrackerType = "Tracker1" | "Tracker2" | "Tracker3";

type Tracker = {
  type: TrackerType;
  data: unknown;
};

const Dashboard: NextPage = () => {
  const trackers: Tracker[] = [
    {
      type: "Tracker1",
      data: {
        foo: 1,
        bar: "baz",
      },
    },
    {
      type: "Tracker2",
      data: {},
    },
    {
      type: "Tracker3",
      data: {},
    },
  ];

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
          {trackers.map((tracker) => (
            <div className="col-span-4" key={hash(tracker)}>
              <Tracker {...tracker} />
            </div>
          ))}
        </div>
      </LayoutBase>
    </>
  );
};

const Tracker: React.FC<{
  type: TrackerType;
  data: unknown;
}> = ({ type, data }) => {
  return (
    <Card>
      <p>Type: {type}</p>
      <p>Data:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Card>
  );
};

export default Dashboard;
