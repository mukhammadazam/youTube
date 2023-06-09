import { MyContext } from "../context/Context";
import { Link } from "react-router-dom";
import { useContext } from "react";
import './Texts.scss';
const History = () => {
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
    .slice(21, 41)
    .map((i, el) => (
      <div key={el} className='pb-10'>
        <div className='md:flex md:items-center '>
          <div className='flex items-center justify-center'>
            <Link to={`/${i?.video.author.title}`} className={``}>
              <img
                className=' rasm rasms block'
                src={i.video.thumbnails[0].url}
                alt='img' 
              />
            </Link>
          </div>
          <div className=''>
            <h3 className='md:text-start text-center ps-16 text-2xl'>
              {i?.video.author.title}
            </h3>
            <p className='md:text-start texts text-center  md:p-16'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
              recusandae praesentium aliquam perspiciatis accusamus voluptatibus
              nam reprehenderit eligendi atque! Quibusdam, id! Quidem et
              incidunt assumenda, nobis adipisci non. Ratione, fugiat officia.
              Deleniti, harum recusandae, in, praesentium ab dolor nihil
              voluptates facere ipsam et ipsum eos distinctio molestias. Earum,
              dolore error.
            </p>
          </div>
        </div>
      </div>
    ));
  return <div>{searchFunction}</div>;
};

export default History;
