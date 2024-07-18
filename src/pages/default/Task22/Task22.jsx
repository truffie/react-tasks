import axios from "axios";
import { useEffect, useState } from "react";

export function Task22() {
  const [img, setImg] = useState(null);
  useEffect(() => {
    const getImg = async () => {
      const res = await axios.get("https://dog.ceo/api/breeds/image/random");
      setImg(res.data.message);
    };
    getImg();
  }, []);

  return (
    <>
      <h2>При первичном рендеринге отобразить рандомную картину собаки</h2>
      {img && <img src={img} alt="some img" />}
    </>
  );
}
