import { MyContext } from "../context/Context";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { memo } from "react";
import oval6 from "../Saidbar/img/oval6.svg";
import "./Card.scss";
const Card = () => {
  const { data, search } = useContext(MyContext);
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
    .slice(0, 100)
    .map((i, el) => {
      return (
        <div key={el}>
          <div className='wrapper'>
            <Link to={`/${i?.video.author.title}`}>
              <img
                className=' rasm block'
                src={i.video.thumbnails[0].url}
                alt='img'
              />
            </Link>
          </div>
          <div className='flex items-center pt-2'>
            <img
              className='rounded-full'
              src={i.video.thumbnails[0].url}
              alt='img'
              width='40px'
              height='40px'
            />
            <Link to={`/${i?.video.author.title}`} className='ps-3'>
              {i?.video.author.title}
            </Link>
          </div>
          <div className='flex justify-center'>
            <p>80k views · 3 days ago</p>
            <p>Dollie Blair</p>
          </div>
        </div>
      );
    });
  return (
    <>
      <img
        className='w-9 absolute sm:start-52 start-5 lg:start-64'
        src={oval6}
        alt='img'
      />
      <h1 className='ps-3 absolute start-20 sm:start-64 start-16 lg:start-80 m-0 title'>
        Dollie Blair
      </h1>

      <div className='grid grid-rows-3 justify-center lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2  md:grid-cols-2   grid-cols-1 gap-4 cart pt-10'>
        {searchFunction}
      </div>
    </>
  );
};

export default memo(Card);
