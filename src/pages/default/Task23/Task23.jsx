//import { React } from " react "
//import styles from "./Task23.module.css"

import axios from "axios";
import { useEffect, useState } from "react";

export function Task23() {
  const [listUniver, setListUniver] = useState([]);
  useEffect(() => {
    const getUniver = async () => {
      const list = await axios.get("http://universities.hipolabs.com/search?country=Belarus");
      console.log(list.data);
      setListUniver(list.data);
    };
    getUniver();
  }, []);
  return (
    <>
      <h2>При первичном рендеринге отобразить список университетов в стране беларусь</h2>
      {listUniver && listUniver.map((el, index) => <p key={index}>{el.name}</p>)}
    </>
  );
}
