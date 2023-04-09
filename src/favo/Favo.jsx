import { useContext } from "react";
import { MyContext } from "../context/Context";
import fot from "./fot.png";
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
            <iframe
              className='rounded'
              max-width='200'
              height='200'
              src={`https://www.youtube.com/embed/${i.video.videoId}`}
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
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
      <div className=' ps-3 block sm:w-96 m-0-auto ifrem lg:sticky top-24 '>
        <iframe
          className=''
          width='450'
          height='600'
          src='https://www.youtube.com/embed/3XqS84Xq7yM'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowfullscreen></iframe>
      </div>
      <div className=' pt-3'>{searchFunction}</div>
    </div>
  );
};

export default Favo;
