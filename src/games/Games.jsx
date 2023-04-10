import { useContext } from "react";
import { MyContext } from "../context/Context";
import { Link } from "react-router-dom";
const Games = () => {
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
    .slice(13, 54)
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
              <h3 className=' text-start ps-16 text-1xl'>
                {i?.video.author.title}
              </h3>
            </Link>
          </div>
        </div>
      </div>
    ));
  return (
    <div
      className="grid grid-rows-3 justify-center lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2  md:grid-cols-2   grid-cols-1 gap-4 cart pt-10'>
            ">
      {searchFunction}
    </div>
  );
};

export default Games;
