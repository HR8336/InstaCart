import React from "react";
import { NavLink } from "react-router-dom";
import { MenuList } from "../navbar/MenuList";
import "../css/Dashboard.css";

const Dashboard = () => {
  const menuList = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink to={url} style={{ marginRight: "90px" }}>
          {title}
        </NavLink>
      </li>
    );
  });
  return <nav className="menu-list">{menuList}</nav>;
};

export default Dashboard;
