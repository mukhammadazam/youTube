import { MyContext } from "../context/Context";
import { useContext } from "react";
import { memo } from "react";
import "./Card.scss";
import oval6 from "../Saidbar/img/oval6.svg";
import { Link } from "react-router-dom";

const Card = () => {
  const { data, search } = useContext(MyContext);

  const searchFunction = data
    .filter((value) => {
      if (search === "") {
        return value;
      } else if (
        value?.video.author.title.toLowerCase().includes(search?.toLowerCase())
      ) {
        console.log(value);
        return value;
      }
    })
    .slice(0, 100)
    .map((i, el) => {
      return (
        <div key={el}>
          <div className='wrapper'>
            <img
              className=' rasm block'
              src={i.video.thumbnails[0].url}
              alt='img'
            />
          </div>
          <Link>{i?.video.author.title}</Link>
          <div className='flex'>
            <p>80k views · 3 days ago</p>
            <p>Dollie Blair</p>
          </div>
        </div>
      );
    });
  return (
    <>
        <img className='w-9 absolute sm:start-80' src={oval6} alt='img' />
        <h1 className='ps-3 absolute start-20 sm:start-96 m-0 title'>
          Dollie Blair
        </h1>

      <div className='grid grid-rows-3 justify-center lg:grid-cols-4    grid-cols-1 gap-4 cart pt-10'>
        {searchFunction}
      </div>
    </>
  );
};

export default memo(Card);
