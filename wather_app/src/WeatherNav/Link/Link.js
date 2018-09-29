import React from "react";

const Link =(props) =>{
  return <button onClick={() => props.changeView(props.name)}>{props.name}</button>;
};


export default Link;
