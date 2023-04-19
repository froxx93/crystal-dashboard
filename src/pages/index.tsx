import { type NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import { MACHINES } from "~/assets/data/machines";
import Card from "~/components/Card";
import LayoutBase from "~/components/LayoutBase";
import { type Machine } from "~/domains/Machine";
import { getDeepestParent } from "~/domains/Map";
import { hash } from "~/utils/common";

type TrackerType = "custom-counter" | "tm-list";

type TrackerCustomCounter = {
  type: "custom-counter";
  data: {
    label: string;
    value: number;
  };
};

type Region = "both" | "johto" | "kanto";
type TrackerTmList = {
  type: "tm-list";
  data: {
    region: Region;
    onlyFieldItemTms: boolean;
  };
};

type Tracker = TrackerCustomCounter | TrackerTmList;

const Dashboard: NextPage = () => {
  const trackers: Tracker[] = [
    {
      type: "custom-counter",
      data: {
        label: "thing",
        value: 0,
      },
    },
    {
      type: "tm-list",
      data: {
        region: "johto",
        onlyFieldItemTms: false,
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
  ["custom-counter"]: ({ data: d }) => {
    const data = d as TrackerCustomCounter["data"]
    const [label, setLabel] = useState(data.label);
    const [value, setValue] = useState(data.value);
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
  ["tm-list"]: ({ data: d }) => {
    const data = d as TrackerTmList["data"];
    const [selectedRegion, setSelectedRegion] = useState<Region>(data.region);
    const [onlyFieldItemTms, setOnlyFieldItemTms] = useState(
      data.onlyFieldItemTms
    );

    const regionFilter =
      selectedRegion === "both" ? ["johto", "kanto"] : [selectedRegion];

    const [selectedTms, setSelectedTms] = useState<Machine[]>(
      MACHINES.filter((machine) =>
        ["tm07", "tm13", "tm42"].includes(machine.id)
      )
    );

    return (
      <>
        <h2 className="mb-3 text-xl font-semibold">TM List</h2>
        <div className="flex flex-col gap-3">
          <div>
            <p>Regions</p>
            {(["both", "johto", "kanto"] as const).map((region) => (
              <label key={region} className="mr-3">
                <input
                  type="radio"
                  name="region"
                  value={region}
                  checked={region === selectedRegion}
                  onClick={() => {
                    setSelectedRegion(region);
                  }}
                />
                &nbsp;{region}
              </label>
            ))}
          </div>

          <div>
            <p>Only Field Item TMs</p>
            <input
              type="checkbox"
              checked={onlyFieldItemTms}
              onChange={(e) => {
                setOnlyFieldItemTms(e.target.checked);
              }}
            />
          </div>

          <div className="grid grid-cols-3">
            {MACHINES.filter((machine) => machine.type === "tm")
              .filter((tm) =>
                tm.itemSources.some((itemSource) =>
                  regionFilter.includes(
                    getDeepestParent(itemSource.location.map).id
                  )
                )
              )
              .filter(
                (tm) =>
                  !onlyFieldItemTms ||
                  (onlyFieldItemTms &&
                    tm.itemSources.some(
                      (itemSource) => itemSource.type === "field-item"
                    ))
              )
              .map((tm) => (
                <label key={tm.id}>
                  <input
                    type="checkbox"
                    checked={selectedTms.some(
                      (selectedTm) => selectedTm.id === tm.id
                    )}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedTms([...selectedTms, tm]);
                      } else {
                        setSelectedTms(
                          selectedTms.filter(
                            (selectedTm) => selectedTm.id !== tm.id
                          )
                        );
                      }
                    }}
                  />
                  &nbsp;{tm.name}
                </label>
              ))}
          </div>
        </div>
      </>
    );
  },
};

export default Dashboard;
