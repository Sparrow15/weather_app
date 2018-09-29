import React, { Component } from 'react';
import Link from "./Link/Link.js";
const links = [
  {
    name: 'weather',
    key: '1',
  },
  {
    name: 'forecast',
    key: '2',
  },
];

const WeatherNav = props => {
  return (
    <div>
      {links.map(l => {
        return <Link changeView={props.changeView} name={l.name} key={l.key} />;
      })}
    </div>
  );
};



export default WeatherNav;
