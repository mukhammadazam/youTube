import { useContext } from "react";
import { MyContext } from "../context/Context";
import { CiYoutube } from "react-icons/ci";
import { GoRadioTower } from "react-icons/go";
import { Link } from "react-router-dom";
const Vedio = () => {
  const { vedio } = useContext(MyContext);
  return (
    <div className="relative">
      {!vedio ? (
        <div className='bg-gray-100 p-3 rounded hidden md:block  fixed z-1000 top-28  end-44'>
          <div className='flex items-center'>
            <CiYoutube className='text-2xl pe-1' />
            <Link>
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

      <div className="post">
        
      </div>
    </div>
  );
};

export default Vedio;
