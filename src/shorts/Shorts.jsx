import { memo, useContext, useState } from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { MdOutlineTextsms } from "react-icons/md";
import { MyContext } from "../context/Context";
import { FaShare } from "react-icons/fa";
const Shorts = () => {
  const { data, search } = useContext(MyContext);
  const [like, setLike] = useState("5,7 тыс");
  const likeFun = () => {
    setLike(!like);
    console.log(like);
  };
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
    .slice(21, 41)
    .map((i, el) => (
      <div key={el} className='pb-10 flex'>
        <iframe
          className='rounded'
          max-width='500'
          height='600'
          
          src={`https://www.youtube.com/embed/${i.video.videoId}`}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
        <div className='flex flex-col justify-between py-10 ps-2'>
          <div onClick={likeFun} className=''>
            <BiLike className={`text-3xl ${like ? "" : "text-red-700"}`} />
            <p>5,7 тыс</p>
          </div>
          <div onClick={likeFun}>
            <BiDislike className={`text-3xl ${like ? "text-red-700" : ""}`} />
            <p className='w-1'>Не нравится</p>
          </div>
          <div onClick={likeFun} className=''>
            <MdOutlineTextsms className='text-3xl' />
            <p className='text-center'>30</p>
          </div>
          <div className=''>
            <FaShare className='text-3xl' />
            <p className='w-3'>Поделиться</p>
          </div>
          <img
            className='rounded'
            src={i.video.thumbnails[0].url}
            alt='kjdew'
            width='40px'
            height='80px'
          />
        </div>
      </div>
    ));
  return <div>{searchFunction}</div>;
};

export default memo(Shorts);
