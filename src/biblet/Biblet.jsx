import { memo, useContext } from "react";
import { MyContext } from "../context/Context";
import { Link } from "react-router-dom";
import oval6 from "../Saidbar/img/oval6.svg";
const Biblet = () => {
  const { data } = useContext(MyContext);
  return (
    <div className='flex  justify-between'>
      <div className='grid grid-rows-3 justify-center lg:grid-cols-3   grid-cols-2 gap-4'>
        {data.slice(51, 78).map((i, el) => (
          <div key={el} className='pb-10'>
            <iframe
              className='rounded'
              width='150'
              height='150'
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
      <div className='pt-20 hidden md:block'>
        <div className='flex items-center justify-center pb-3   '>
          <img className='block' src={oval6} alt='img' width='100px' />
        </div>
        <div className='flex items-center border-b-2 pb-2 ps-1'>
          <Link className='block ps-10 '>
            <p className='text-2xl '>Dollie Blair</p>
          </Link>
        </div>
        <div className='flex items-center justify-center  border-b-2 pb-2 rounded-b'>
          <Link to='/pat' className='block pe-20'>
            Подписки
          </Link>
          <h6 className=''> 290</h6>
        </div>
        <div className='flex items-center justify-center  border-b-2 pb-2 '>
          <Link to='/' className='block pe-20'>Загрузки </Link>
          <h6 className=''> 13</h6>
        </div>
        <div className='flex items-center justify-center '>
          <Link to='/shorts' className='block pe-2'> Отметки "Нравится" </Link>
          <h6 className=''> 1 539</h6>
        </div>
      </div>
    </div>
  );
};

export default memo(Biblet);
