import { useContext } from "react";
import { MyContext } from "../context/Context";
import { memo } from "react";
import "./Card.scss";
import oval6 from "../Saidbar/img/oval6.svg";
import { Link } from "react-router-dom";
const Card = () => {
  const { data, search, setSeach } = useContext(MyContext);
  const searchFunction = data
    .filter((value) => {
      if (search === "") {
        return value;
      } else if (
        value?.video.author.title.toLowerCase().includes(search?.toLowerCase())
      ) {
        return value;
      }
    })
    .slice(0, 10)
    .map((i, el) => (
      <div key={el}>
        <div className=''>
          <iframe
            className='rounded'
            width='250'
            height='250'
            src={`https://www.youtube.com/embed/${i.video.videoId}`}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
        </div>
        <Link>{i.video.author.title}</Link>
      </div>
    ));
  return (
    <>
      <img className='w-9 absolute sm:start-80' src={oval6} alt='img' />
      <h1 className='ps-3 absolute start-20 sm:start-96 m-0 title'>
        Dollie Blair
      </h1>

      <div className='flex  gap-5 cart pt-10'>{searchFunction}</div>
    </>
  );
};

export default memo(Card);
