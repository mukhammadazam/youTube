import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { MyContext } from "../context/Context";
const Useparam = () => {
  const { title } = useParams();
  const { data } = useContext(MyContext);
  return (
    <div className='flex justify-between'>
      <div className=''>
        {data
          .filter((Element) => Element.video.author.title === title)
          .slice(0, 1)
          .map((i, el) => (
            <div key={el} className='fixed start-96 top-50'>
              <iframe
                className='rounded'
                width='700'
                height='500'
                src={`https://www.youtube.com/embed/${i.video.videoId}`}
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
            </div>
          ))}
      </div>
      <div className=''>
        {data.slice(21, 38).map((i, el) => (
          <div key={el} className='pb-10'>
            <Link to={`/${i?.video.author.title}`} className={``}>
              <img
                className=' rasm block'
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
    </div>
  );
};

export default Useparam;
