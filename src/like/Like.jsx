import { MyContext } from "../context/Context";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "../favo/Favo.scss";
const Like = () => {
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
    .slice(40, 70)
    .map((i, el) => (
      <div key={el} className='pb-2'>
        <div className=' '>
          <div className='flex items-center justify-center'>
            <Link to={`/${i?.video.author.title}`} className={``}>
              <img
                className=' rasm block'
                src={i.video.thumbnails[0].url}
                alt='img'
              />
            </Link>
          </div>
          <div className=' lg:w-96'>
            <h3 className=' text-center text-2xl h-0'>
              {i?.video.author.title}
            </h3>
            <p className='text text-center me-0 p-16'>
              Deleniti, harum recusandae, in, praesentium ab dolor nihil
              voluptates facere ipsam et ipsum eos distinctio molestias. Earum,
              dolore error.
            </p>
          </div>
        </div>
      </div>
    ));
  return (
    <div className='lg:flex  justify-center lg:items-start justify-between gap-3 '>
      <div className=' ps-3 block sm:w-96 m-0-auto ifrem lg:sticky top-24 '>
        <iframe
          className='sm:ps-28 if '
          width='450'
          height='600'
          src='https://www.youtube.com/embed/VOel6VdYtQk'
          title='YouTube video player'></iframe>
      </div>
      <div className=' pt-3'>{searchFunction}</div>
    </div>
  );
};

export default Like;
