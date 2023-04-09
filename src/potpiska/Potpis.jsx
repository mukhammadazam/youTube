import { MyContext } from "../context/Context";
import { memo, useContext } from "react";
import { Link } from "react-router-dom";
import "./Potpis.scss";
const Potpis = () => {
  const { data } = useContext(MyContext);
  return (
    <div className='grid grid-rows-3 justify-center lg:grid-cols-4  lg:grid-cols-4 grid-cols-1 gap-4'>
      {data.slice(21, 38).map((i, el) => (
        <div key={el} className='pb-10'>
          <iframe
            className='rounded'
            width='250'
            height='250'
            src={`https://www.youtube.com/embed/${i.video.videoId}`}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
          <div className='flex items-center pt-3'>
            <img
              className='bord block'
              src={i.video.thumbnails[0].url}
              width='35px'
              height='45px'
              alt='img'
            />
            <Link>{i.video.author.title}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(Potpis);
