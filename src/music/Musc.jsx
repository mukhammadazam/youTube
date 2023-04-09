import { useContext } from "react";
import { MyContext } from "../context/Context";
const Musc = () => {
  const { data,search } = useContext(MyContext);
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
            <iframe
              className='rounded'
              max-width='200'
              height='200'
              src={`https://www.youtube.com/embed/${i.video.videoId}`}
              title='YouTube video player'
              autoplay={1}
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
          </div>
          <div className=' '>
            <h3 className=' text-center text-2xl h-0'>
              {i?.video.author.title}
            </h3>
            <p className='text text-center p-16'>
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
