import { MyContext } from "../context/Context";
import { memo, useContext } from "react";
import { Link } from "react-router-dom";
import "./Potpis.scss";
const Potpis = () => {
  const { data } = useContext(MyContext);
  return (
    <div className='grid grid-rows-3 justify-center  lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2  md:grid-cols-2'>
      {data.slice(21, 38).map((i, el) => (
        <div key={el} className='pb-10'>
          <Link to={`/${i?.video.author.title}`}>
            <img
              className=' rasm ras block'
              src={i.video.thumbnails[0].url}
              alt='img'
            />
          </Link>
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
