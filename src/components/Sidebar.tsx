import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Icon from "./Icon";
import Image from "next/image";
import Logo from "/public/logo.png";

export type SidebarItem = SidebarGroup | SidebarLink;
type SidebarItemBase = {
  label: string;
  icon?: string;
};
export type SidebarGroup = SidebarItemBase & {
  children: SidebarItem[];
};
export type SidebarLink = SidebarItemBase & {
  route: string;
};

type SidebarItemGroup = {
  title?: string;
  items: SidebarItem[];
};

const Sidebar = () => {
  const itemGroups: SidebarItemGroup[] = [
    {
      items: [
        {
          label: "Dashboard",
          icon: "dashboard",
          route: "/",
        },
        {
          label: "Tools",
          icon: "build",
          children: [
            {
              label: "Machine Finder",
              icon: "search",
              route: "/tools/machine-finder",
            },
          ],
        },
        {
          label: "About",
          icon: "question-mark",
          route: "/about",
        },
      ],
    },
  ];

  return (
    <aside
      className="w-[200px] flex-shrink-0 bg-gray-100 shadow-md dark:bg-gray-900 dark:text-gray-50"
      aria-label="Sidebar"
    >
      {/* menu */}
      <div className="flex h-full flex-col overflow-y-auto rounded p-3">
        <Link href="/" className="self-center">
          <Image src={Logo} width={48} height={48} alt={""} />
        </Link>
        <ul className="space-y-2">
          {itemGroups.map(({ title, items }, itemGroupIndex) => (
            <React.Fragment key={itemGroupIndex}>
              <li className="pt-8 first:pt-0">
                {title && (
                  <span className="font-medium text-gray-400">{title}</span>
                )}
              </li>
              {items.map((item, itemIndex) => (
                <CSidebarItem key={itemIndex} item={item} />
              ))}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </aside>
  );
};

const CSidebarItem: React.FC<{ item: SidebarItem }> = ({ item }) => {
  return (
    <>
      {"children" in item ? (
        <CSidebarGroup item={item} />
      ) : (
        <CSidebarLink item={item} />
      )}
    </>
  );
};

const CSidebarGroup: React.FC<{
  item: SidebarGroup;
}> = ({ item }) => {
  const { pathname } = useRouter();
  const [isHidden, setHidden] = useState(
    !item.children.find((c) => "route" in c && c.route === pathname)
  );

  return (
    <li>
      <button
        type="button"
        className="group flex w-full items-center rounded p-2 transition hover:bg-gray-200 hover:dark:bg-gray-700"
        onClick={() => setHidden(!isHidden)}
      >
        <span className="ml-3 flex flex-1 gap-3 truncate text-ellipsis whitespace-nowrap text-left">
          {item.icon && <Icon name={item.icon} />}
          {item.label}
        </span>
        <Icon
          name={isHidden ? `keyboard-arrow-right` : `keyboard-arrow-down`}
        />
      </button>

      <ul className={`${isHidden ? "hidden" : ""} block space-y-2 py-2`}>
        {item.children.map((child, index) => (
          <CSidebarItem key={index} item={child} />
        ))}
      </ul>
    </li>
  );
};

const CSidebarLink: React.FC<{ item: SidebarLink }> = ({ item }) => {
  const router = useRouter();
  const active = router.asPath === item.route;

  return (
    <li>
      <Link
        href={item.route}
        className={`group flex w-full cursor-pointer items-center rounded p-2 pl-11 text-base font-normal transition ${
          active
            ? "bg-primary text-white"
            : "hover:bg-gray-200 hover:dark:bg-gray-700"
        }`}
      >
        <span className={`${item.icon ? "flex gap-3" : ""}`}>
          {item.icon && <Icon name={item.icon} />}
          {item.label}
        </span>
      </Link>
    </li>
  );
};

export default Sidebar;
