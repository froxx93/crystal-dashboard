import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Card from "~/components/Card";
import LayoutBase from "~/components/LayoutBase";
import { hash } from "~/utils/common";

type TrackerType = "custom-counter" | "Tracker2" | "Tracker3";

type TrackerCustomCounter = {
  type: "custom-counter";
  data: {
    label: string;
    value: number;
  };
};

type Tracker = TrackerCustomCounter;

const Dashboard: NextPage = () => {
  const trackers: Tracker[] = [
    {
      type: "custom-counter",
      data: {
        label: "thing",
        value: 0,
      },
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
              <Tracker {...{ tracker }} />
            </div>
          ))}
        </div>
      </LayoutBase>
    </>
  );
};

const Tracker: React.FC<{
  tracker: Tracker;
}> = ({ tracker: { type, data } }) => {
  return <Card>{trackerMap[type]({ data })}</Card>;
};

const trackerMap: Record<TrackerType, React.FC<{ data: Tracker["data"] }>> = {
  ["custom-counter"]: ({ data }) => {
    const [label, setLabel] = useState("");
    const [value, setValue] = useState(0);
    const [isLabelDefined, setIsLabelDefined] = useState(false);

    return (
      <>
        <h2 className="mb-3 text-xl font-semibold">
          {isLabelDefined ? label : "Custom Counter"}
        </h2>
        {!isLabelDefined && (
          <form onSubmit={() => setIsLabelDefined(true)}>
            <input
              type="text"
              className="mb-3 block w-full rounded border bg-transparent px-2 py-1"
              placeholder="What is there to track?"
              value={label}
              onChange={(e) => {
                setLabel(e.target.value);
              }}
            />
            <button className="block rounded border border-primary px-2 py-1 text-primary">
              Track
            </button>
          </form>
        )}
        {isLabelDefined && (
          <>
            <p className="mb-3 text-3xl font-semibold">{value}</p>
            <div className="flex justify-between gap-3">
              <div className="flex gap-3">
                <button
                  type="button"
                  className="rounded border px-2 py-1"
                  onClick={() => {
                    setValue(value - 1);
                  }}
                >
                  -
                </button>
                <button
                  type="button"
                  className="rounded border px-2 py-1"
                  onClick={() => {
                    setValue(value + 1);
                  }}
                >
                  +
                </button>
              </div>
              <button
                type="button"
                className="rounded border border-red-500 px-2 py-1 text-red-500"
                onClick={() => {
                  setValue(0);
                }}
              >
                Reset
              </button>
            </div>
          </>
        )}
      </>
    );
  },
  Tracker2: ({ data }) => {
    return <p>Tracker 2: {JSON.stringify(data)}</p>;
  },
  Tracker3: ({ data }) => {
    return <p>Tracker 3: {JSON.stringify(data)}</p>;
  },
};

export default Dashboard;
