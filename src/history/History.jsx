import React from "react";
import { useContext } from "react";
import { MyContext } from "../context/Context";
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
            <iframe
              className='rounded'
              max-width='300'
              height='300'
              src={`https://www.youtube.com/embed/${i.video.videoId}`}
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
          </div>
          <div className=''>
            <h3 className='md:text-start text-center ps-16 text-2xl'>
              {i?.video.author.title}
            </h3>
            <p className='md:text-start text-center md:p-16'>
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
