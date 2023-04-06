import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Virtual } from "swiper";
import "swiper/css/virtual";
import axios from "axios";
import "swiper/css";
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
    <div className='flex relative start-52'>
      <Swiper modules={[Virtual]} spaceBetween={50} slidesPerView={3} virtual>
        {data.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            <iframe
              width='250'
              height='150'
              src={`https://www.youtube.com/embed/${slideContent.snippet.videoId}`}
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Card;
