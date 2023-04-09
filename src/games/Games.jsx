import { useContext } from "react";
import { MyContext } from "../context/Context";
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
    .slice(53, 94)
    .map((i, el) => (
      <div key={el} className='pb-2'>
        <div className=' '>
          <div className='flex items-center justify-center'>
            <img
              className=' rasm block'
              src={i.video.thumbnails[0].url}
              alt='img'
            />
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
