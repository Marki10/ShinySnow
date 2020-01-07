import React from "react";
import { Link } from "react-router-dom";
import Utilities from "../../Utilities";

import "./Menu.scss";

interface MenuItem {
  label: string;
  link: string;
}

export default function MainMenu(props: object): object | string {
  const routerList = !Utilities.isEmpty(props.routerList)
    ? props.routerList
    : undefined;

  if (routerList) {
    return (
      <nav className="menu-wrapper">
        <ul className="menu">
          {routerList.map((listItem: MenuItem) => {
            return (
              <li className="menu__item" key={listItem.label}>
                <Link to={listItem.link}>{listItem.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  } else {
    return "";
  }
}
