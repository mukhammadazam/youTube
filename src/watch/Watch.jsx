import { MyContext } from "../context/Context";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "./watch.scss";
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
    <div className='lg:flex flex-column lg:items-start gap-3 '>
      {data.slice(44, 45).map((i, el) => (
        <div className='wrapper1' key={el}>
          <Link to={`/${i?.video.author.title}`}>
            <img className=' clas' src={i.video.thumbnails[0].url} alt='img' />
          </Link>
        </div>
      ))}
      <div className=' sm:block'>{searchFunction}</div>
    </div>
  );
};

export default Watch;
