import { useContext } from "react"
import { MyContext } from "../../context/Context"

const Shorts = () => {
    const {data}=useContext(MyContext);
  return (
    <div>
      {data.slice(21, 31).map((i, el) => (
        <div key={el} className='pb-10'>
          <iframe
            className='rounded'
            max-width='500'
            height='600'
            src={`https://www.youtube.com/embed/${i.video.videoId}`}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
        </div>
      ))}
    </div>
  );
}

export default Shorts