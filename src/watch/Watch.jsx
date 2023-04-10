import { useContext } from "react";
import { MyContext } from "../context/Context";
import left from "./imgs/ja.png";
import { Link } from "react-router-dom";
const Watch = () => {
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
    .slice(90, 115)
    .map((i, el) => (
      <div key={el} className='pb-2'>
        <div className='  '>
          <div className='flex items-center ps-7 justify-center'>
            <Link to={`/${i?.video.author.title}`}>
              <img
                className=' rasm block'
                src={i.video.thumbnails[0].url}
                alt='img'
              />
            </Link>
          </div>
          <div className=''>
            <h3 className=' text-center ps-16 text-2xl'>
              {i?.video.author.title}
            </h3>
            <p className=' text-center md:p-16'>
              Deleniti, harum recusandae, in, praesentium ab dolor nihil
              voluptates facere ipsam et ipsum eos distinctio molestias. Earum,
              dolore error.
            </p>
          </div>
        </div>
      </div>
    ));
  return (
    <div className='flex items-start gap-3 '>
      <img className='sticky ps-20 top-24' src={left} alt='left' />
      <div className='hidden sm:block'>{searchFunction}</div>
    </div>
  );
};

export default Watch;
