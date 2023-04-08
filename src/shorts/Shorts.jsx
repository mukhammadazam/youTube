import { Link } from "react-router-dom";
import { MyContext } from "../context/Context";
import { memo, useContext } from "react";
const Shorts = () => {
  const { data, search, setSeach } = useContext(MyContext);
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
          <iframe
            className='rounded'
            max-width='500'
            height='600'
            src={`https://www.youtube.com/embed/${i.video.videoId}`}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
      </div>
    ));
  return <div>{searchFunction}</div>;
};

export default memo(Shorts);
