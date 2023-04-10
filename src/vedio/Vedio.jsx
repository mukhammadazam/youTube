import { MyContext } from "../context/Context";
import { GoRadioTower } from "react-icons/go";
import { useContext, useState } from "react";
import { FcDownload } from "react-icons/fc";
import { CiYoutube } from "react-icons/ci";
import { Link } from "react-router-dom";
const Vedio = () => {
  const { vedio } = useContext(MyContext);
  const [post, setPost] = useState(false);
  const postFun = () => {
    setPost(!post);
  };
  return (
    <div className='relative'>
      {!vedio ? (
        <div className='bg-gray-100 p-3 rounded hidden md:block  fixed z-1000 top-28  end-44'>
          <div className='flex items-center'>
            <CiYoutube className='text-2xl pe-1' />
            <Link onClick={postFun}>
              <p> Добавить видео</p>
            </Link>
          </div>
          <div className='flex items-center'>
            <GoRadioTower className='text-2xl pe-1' />
            <Link>
              <p>Начать трансляцию</p>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className='post'>
        {!post ? (
          ""
        ) : (
          <div className=' absolute bg-slate-600 pt-52 px-52 pb-20 end-52 rounded z-auto'>
            <div className='flex items-center justify-center'>
              <FcDownload className='text-9xl' />
            </div>
            <div className=''>
              <input className=' block pt-5 ' type='file' />
            </div>
            <div className='flex items-center justify-center'>
              <Link
                className='block w-52 mt-20 py-3 bg-lime-400 '
                onClick={postFun}>
                imges post
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Vedio;
