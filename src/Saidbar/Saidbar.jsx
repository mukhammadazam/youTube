import { MdSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";
import { FiCopy, FiFile, FiChevronDown } from "react-icons/fi";
import { VscFileSubmodule } from "react-icons/vsc";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { DiCodeigniter } from "react-icons/di";
import { MyContext } from "../context/Context";
import { CiMusicNote1 } from "react-icons/ci";
import { useContext, useState } from "react";
import { SiTimescale } from "react-icons/si";
import { GrGamepad } from "react-icons/gr";
import { BiHeart } from "react-icons/bi";
import { BsStar } from "react-icons/bs";
import shorts from "./img/shorts.svg";
import oval1 from "./img/oval1.svg";
import oval2 from "./img/oval2.svg";
import oval3 from "./img/oval3.svg";
import oval4 from "./img/oval4.svg";
import oval5 from "./img/oval5.svg";
import oval6 from "./img/oval6.svg";
import "./Saidbar.scss";
const Saidbar = () => {
  const { togle } = useContext(MyContext);
  const [open, setOpen] = useState(false);
  const openFun = () => {
    setOpen(!open);
  };
  return (
    <>
      {!togle ? (
        <div className={`minu`}>
          <NavLink to='/' className=''>
            <AiOutlineHome className='icons1' />
            <span className='pb-3 bar__text block w-8'>Главная</span>
          </NavLink>
          <NavLink to='shorts' className=''>
            <img className='icons1' src={shorts} alt='img' />
            <span className='pb-3 bar__text block w-8'>Shorts</span>
          </NavLink>
          <NavLink to='/pat' className=''>
            <MdSubscriptions className='icons1' />
            <span className='pb-3 bar__text block w-8'>Подписки</span>
          </NavLink>
          <NavLink to='/biblet' className=''>
            <MdOutlineVideoLibrary className='icons1' />
            <span className='pb-3 bar__text block w-8'>Библиотика</span>
          </NavLink>
        </div>
      ) : (
        <div className={`bar `}>
          <NavLink to='/' className='bar__link flex items-center'>
            <AiOutlineHome className='icons' />
            <span className='bar__text block w-20'>Home</span>
          </NavLink>

          <NavLink to='/shorts' className='bar__link flex items-center'>
            <DiCodeigniter className='icons' />
            <span className='bar__text block w-20'>Trending</span>
          </NavLink>

          <NavLink to='/pat' className='bar__link flex items-center pb-16'>
            <FiCopy className='icons' />
            <span className='bar__text block w-28'>Subscriptions</span>
          </NavLink>

          <NavLink to='/biblet' className='bar__link flex items-center'>
            <VscFileSubmodule className='icons' />
            <span className='bar__text block w-20'>Library</span>
          </NavLink>

          <NavLink to='/history' className='bar__link flex items-center'>
            <FiFile className='icons' />
            <span className='bar__text block w-20'>History</span>
          </NavLink>

          <NavLink to='/watch' className='bar__link flex items-center'>
            <SiTimescale className='icons' />
            <span className='bar__text block w-24'>WatchLater</span>
          </NavLink>

          <NavLink to='/favo' className='bar__link flex items-center'>
            <BsStar className='icons' />
            <span className='bar__text block w-24'>Favourites</span>
          </NavLink>

          <NavLink to='/like' className='bar__link flex items-center'>
            <BiHeart className='icons' />
            <span className='bar__text block w-24'>LikedVideos</span>
          </NavLink>

          <NavLink to='/music' className='bar__link flex items-center'>
            <CiMusicNote1 className='icons' />
            <span className='bar__text block w-20'>Music</span>
          </NavLink>

          <NavLink to='/games' className='bar__link flex items-center'>
            <GrGamepad className='icons' />
            <span className='bar__text block w-20'>Games</span>
          </NavLink>

          <NavLink onClick={openFun} className='bar__link flex items-center'>
            <FiChevronDown className='icons' />
            <span className='bar__text block w-24'>Show more</span>
          </NavLink>
          {!open ? (
            ""
          ) : (
            <div className={`sub absolute top-64 p-3 bg-slate-200 rounded  `}>
              <p className='sub__text pb-5 w-24'>Subscriptions</p>
              <div className='flex items-center'>
                <img src={oval6} className='w-9' alt='oval' />
                <Link className='w-32'>Gussie Singleton</Link>
              </div>
              <div className='flex items-center pt-4'>
                <img src={oval5} className='w-9' alt='oval' />
                <Link className='w-28'>Nora Francis</Link>
              </div>
              <div className='flex items-center pt-4'>
                <img src={oval4} className='w-9' alt='oval' />
                <Link className='w-28'>Belle Briggs</Link>
              </div>
              <div className='flex items-center pt-4'>
                <img src={oval3} className='w-9' alt='oval' />
                <Link className='w-28'>Eunice Cortez</Link>
              </div>
              <div className='flex items-center pt-4'>
                <img src={oval2} className='w-9' alt='oval' />
                <Link className='w-28'>Emma Hanson</Link>
              </div>
              <div className='flex items-center pt-4'>
                <img src={oval1} className='w-9' alt='oval' />
                <Link className='w-28'>Leah Berry</Link>
              </div>
            </div>
          )}
        </div>
      )}
      <div className='bg-inherit '>
        <div className={`minu1 py-3   fixed px-3 `}>
          <NavLink to='/' className=''>
            <AiOutlineHome className='icons1' />
          </NavLink>
          <NavLink to='shorts' className=''>
            <img className='icons1' src={shorts} alt='img' />
          </NavLink>
          <NavLink to='/pat' className=''>
            <MdSubscriptions className='icons1' />
          </NavLink>
          <NavLink to='/biblet' className=''>
            <MdOutlineVideoLibrary className='icons1' />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Saidbar;
