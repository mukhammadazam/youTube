import { useContext } from "react";
import { MyContext } from "../context/Context";
import { Link } from "react-router-dom";
const Favo = () => {
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
    .slice(70, 90)
    .map((i, el) => (
      <div key={el} className='pb-2'>
        <div className=' '>
          <div className='flex items-center justify-center'>
            <Link to={`/${i?.video.author.title}`}>
              <img
                className=' rasm block'
                src={i.video.thumbnails[0].url}
                alt='img'
              />
            </Link>
          </div>
          <div className=' md:w-96'>
            <h3 className=' text-center text-2xl h-0'>
              {i?.video.author.title}
            </h3>
            <p className=' text-center p-16'>
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
      <div className=' pt-3'>{searchFunction}</div>
    </div>
  );
};

export default Favo;
