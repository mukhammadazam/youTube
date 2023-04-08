import { useContext } from "react";
import { MyContext } from "../context/Context";
import { CiYoutube } from "react-icons/ci";
import { GoRadioTower } from "react-icons/go";
import { Link } from "react-router-dom";
// Добавить видео  Начать трансляцию
const Vedio = () => {
  const { vedio } = useContext(MyContext);
  return (
    <div className="relative">
      {!vedio ? (
        <div className='bg-gray-100 p-3 rounded hidden md:block  absolute z-10 top-0  end-8'>
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
    </div>
  );
};

export default Vedio;
