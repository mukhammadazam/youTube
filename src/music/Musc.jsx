import { MyContext } from "../context/Context";
import { Link } from "react-router-dom";
import { useContext } from "react";
const Musc = () => {
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
    .slice(53, 94)
    .map((i, el) => (
      <div key={el} className='pb-2'>
        <div className='lg:flex lg:items-center lg:justify-center '>
          <div className='flex items-center justify-center'>
            <Link to={`/${i?.video.author.title}`} className={``}>
              <img
                className=' rasm block'
                src={i.video.thumbnails[0].url}
                alt='img'
              />
            </Link>
          </div>
          <div className=' '>
            <h3 className='sm:text-start sm:ps-16 text-center text-2xl h-0'>
              {i?.video.author.title}
            </h3>
            <p className='text sm:text-start text-center p-16'>
              Deleniti, harum recusandae, in, praesentium ab dolor nihil
              voluptates facere ipsam et ipsum eos distinctio molestias. Earum,
              dolore error.
            </p>
          </div>
        </div>
      </div>
    ));
  return (
    <div className=''>
      <div>{searchFunction}</div>;
    </div>
  );
};

export default Musc;
