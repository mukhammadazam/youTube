import { memo, useEffect, useState } from "react";
import oval6 from "../Saidbar/img/oval6.svg";
import axios from "axios";
import "./Card.scss";
const Card = () => {
  const [data, setData] = useState([]);
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/captions",
    params: { part: "snippet", videoId: "M7FIvfx5J10" },
    headers: {
      "X-RapidAPI-Key": "5401697795msh4c9903c5ca8b1acp1d16c6jsn9312395fea1e",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setData(response.data.items);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <>
      <img className='w-9 absolute sm:start-80' src={oval6} alt='img' />
      <h1 className='ps-3 absolute start-20 sm:start-96 m-0 title'>
        Hello World
      </h1>

      <div className='flex  gap-5 cart pt-10'>
        {data.map((i, el) => (
          <div key={el}>
            <iframe
              width='250'
              height='250'
              src={`https://www.youtube.com/embed/${i.snippet.videoId}`}
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
          </div>
        ))}
      </div>
    </>
  );
};

export default memo(Card);
