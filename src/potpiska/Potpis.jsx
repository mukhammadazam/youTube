import { memo, useContext } from "react"
import { MyContext } from "../context/Context"

const Potpis = () => {
    const {data}=useContext(MyContext)
  return (
    <div className='grid grid-rows-3  grid-flow-col gap-4'>
      {data.slice(21, 38).map((i, el) => (
        <div key={el} className='pb-10'>
          <iframe
            className='rounded'
            width='150'
            height='150'
            src={`https://www.youtube.com/embed/${i.video.videoId}`}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
          <h5>{i.video.author.title}</h5>
        </div>
      ))}
    </div>
  );
}

export default memo(Potpis);